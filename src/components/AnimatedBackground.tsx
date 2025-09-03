import { useEffect, useState, useCallback, useMemo } from 'react';
import { Cloud, Network, Code, Server, Database, Cpu } from 'lucide-react';
import { throttle } from '../utils/throttle';

interface NetworkNode {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface Connection {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const [networkNodes, setNetworkNodes] = useState<NetworkNode[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Memoized constants for better performance  
  const nodeCount = useMemo(() => window.innerWidth < 768 ? 4 : 6, []);
  const connectionCount = useMemo(() => Math.min(2, nodeCount), [nodeCount]);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 10, // Reduced sensitivity
      y: (e.clientY / window.innerHeight) * 10,
    });
  }, []);

  useEffect(() => {
    // Create initial network nodes with reduced count for performance
    const initialNodes: NetworkNode[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      initialNodes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1 + 0.5, // Tiny nodes
        speedX: (Math.random() - 0.5) * 0.05, // Extremely slow movement
        speedY: (Math.random() - 0.5) * 0.05,
        opacity: Math.random() * 0.05 + 0.02, // Ultra subtle
      });
    }
    setNetworkNodes(initialNodes);

    // Create initial connections with reduced count
    const initialConnections: Connection[] = [];
    for (let i = 0; i < connectionCount; i++) {
      const node1 = initialNodes[Math.floor(Math.random() * initialNodes.length)];
      const node2 = initialNodes[Math.floor(Math.random() * initialNodes.length)];
      
      if (node1.id !== node2.id) {
        initialConnections.push({
          id: i,
          startX: node1.x,
          startY: node1.y,
          endX: node2.x,
          endY: node2.y,
          opacity: Math.random() * 0.03 + 0.01, // Barely visible
        });
      }
    }
    setConnections(initialConnections);

    // Throttled mouse move handler
    const throttledMouseMove = throttle(handleMouseMove, 100); // Throttle to 10fps
    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, []);

  // Optimized animation with requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    
    const animateNodes = (currentTime: number) => {
      // Limit to 20fps for maximum performance
      if (currentTime - lastTime >= 50) {
        setNetworkNodes(prevNodes =>
          prevNodes.map(node => {
            let newX = node.x + node.speedX;
            let newY = node.y + node.speedY;

            // Bounce off edges with damping
            if (newX <= 0 || newX >= window.innerWidth) {
              node.speedX *= -0.8; // Add damping for smoother movement
              newX = Math.max(0, Math.min(window.innerWidth, newX));
            }
            if (newY <= 0 || newY >= window.innerHeight) {
              node.speedY *= -0.8;
              newY = Math.max(0, Math.min(window.innerHeight, newY));
            }

            return {
              ...node,
              x: newX,
              y: newY,
            };
          })
        );
        
        lastTime = currentTime;
      }
      
      animationFrameId = requestAnimationFrame(animateNodes);
    };

    animationFrameId = requestAnimationFrame(animateNodes);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setNetworkNodes(prevNodes =>
        prevNodes.map(node => ({
          ...node,
          x: Math.min(node.x, window.innerWidth),
          y: Math.min(node.y, window.innerHeight),
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Whisper-light Cloud Layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-10 left-1/4 w-48 h-48 rounded-full opacity-[0.003] blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--muted-foreground) / 0.008) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-2/3 right-1/5 w-40 h-40 rounded-full opacity-[0.002] blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--muted-foreground) / 0.006) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Whisper-subtle Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-8">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.008" />
            <stop offset="50%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.012" />
            <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.008" />
          </linearGradient>
        </defs>
        {connections.map(connection => (
          <line
            key={connection.id}
            x1={connection.startX}
            y1={connection.startY}
            x2={connection.endX}
            y2={connection.endY}
            stroke="url(#connectionGradient)"
            strokeWidth="0.2"
            opacity={connection.opacity}
          />
        ))}
      </svg>

      {/* Whisper-light Tech Nodes */}
      <div className="absolute inset-0 opacity-12">
        {networkNodes.map(node => (
          <div
            key={node.id}
            className="absolute"
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
              width: `${node.size * 3}px`,
              height: `${node.size * 3}px`,
              opacity: node.opacity,
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: 'hsl(var(--muted-foreground) / 0.005)',
                border: '1px solid hsl(var(--muted-foreground) / 0.008)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Barely visible Code Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.001] dark:opacity-[0.002]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49.8%, hsl(var(--muted-foreground) / 0.005) 50%, hsl(var(--muted-foreground) / 0.005) 50.2%, transparent 50.4%)
          `,
          backgroundSize: '160px 160px',
        }}
      />

      {/* Minimal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0.5 to-transparent" />
    </div>
  );
};

export default AnimatedBackground;