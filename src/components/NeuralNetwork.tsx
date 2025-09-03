import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  pulse: number;
}

interface Connection {
  from: Node;
  to: Node;
  opacity: number;
  flow: number;
}

const NeuralNetwork = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Create nodes in a neural network pattern
    const nodeCount = 20;
    const containerWidth = 400;
    const containerHeight = 400;
    
    const initialNodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      // Create layered structure like a neural network
      const layer = Math.floor(i / 5);
      const positionInLayer = i % 5;
      
      initialNodes.push({
        id: i,
        x: (layer * containerWidth / 4) + Math.random() * 50,
        y: (positionInLayer * containerHeight / 5) + Math.random() * 50,
        size: Math.random() * 3 + 2,
        pulse: Math.random(),
      });
    }
    
    setNodes(initialNodes);
    
    // Create connections between nearby nodes
    const initialConnections: Connection[] = [];
    
    for (let i = 0; i < initialNodes.length; i++) {
      for (let j = i + 1; j < initialNodes.length; j++) {
        const nodeA = initialNodes[i];
        const nodeB = initialNodes[j];
        const distance = Math.sqrt(
          Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
        );
        
        // Only connect nodes that are reasonably close
        if (distance < 150 && Math.random() > 0.7) {
          initialConnections.push({
            from: nodeA,
            to: nodeB,
            opacity: Math.random() * 0.4 + 0.1,
            flow: Math.random(),
          });
        }
      }
    }
    
    setConnections(initialConnections);
  }, []);

  useEffect(() => {
    const animateNetwork = () => {
      // Animate node pulses
      setNodes(prevNodes =>
        prevNodes.map(node => ({
          ...node,
          pulse: (node.pulse + 0.02) % 1,
        }))
      );
      
      // Animate connection flows
      setConnections(prevConnections =>
        prevConnections.map(connection => ({
          ...connection,
          flow: (connection.flow + 0.01) % 1,
          opacity: 0.1 + Math.sin(connection.flow * Math.PI * 2) * 0.2,
        }))
      );
    };

    const intervalId = setInterval(animateNetwork, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 400"
        className="absolute inset-0"
      >
        {/* Animated Connections */}
        {connections.map((connection, index) => (
          <g key={index}>
            <line
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity={connection.opacity}
              className="animate-pulse"
            />
            {/* Data flow animation */}
            <circle
              cx={connection.from.x + (connection.to.x - connection.from.x) * connection.flow}
              cy={connection.from.y + (connection.to.y - connection.from.y) * connection.flow}
              r="2"
              fill="hsl(var(--primary-glow))"
              opacity={connection.opacity * 2}
            />
          </g>
        ))}
        
        {/* Neural Network Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Node glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size + 3}
              fill="hsl(var(--primary))"
              opacity={0.1 + node.pulse * 0.2}
              className="animate-pulse"
            />
            {/* Main node */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="hsl(var(--primary))"
              opacity={0.6 + node.pulse * 0.4}
            />
            {/* Core */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.5}
              fill="hsl(var(--primary-glow))"
              opacity={0.8}
            />
          </g>
        ))}
      </svg>
      
      {/* Additional floating data particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NeuralNetwork;