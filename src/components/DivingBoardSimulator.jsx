import React, { useState, useEffect } from 'react';

const DivingBoardSimulator = () => {
  const [weight, setWeight] = useState(600); // G en Newtons
  const [distanceA, setDistanceA] = useState(2); // a en metros
  const [distanceB, setDistanceB] = useState(3); // b en metros
  
  const [forces, setForces] = useState({
    reactionB: 0,
    reactionC: 0
  });
  
  // Calcular las fuerzas de reacción
  useEffect(() => {
    // Equilibrio de momentos respecto a C: RB(a) = G(a + b)
    const reactionB = (weight * (distanceA + distanceB)) / distanceA;
    // Equilibrio de fuerzas verticales: RB + RC = G
    const reactionC = weight - reactionB;
    
    setForces({
      reactionB: reactionB.toFixed(1),
      reactionC: reactionC.toFixed(1)
    });
  }, [weight, distanceA, distanceB]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Simulador de Trampolín de Buceo</h1>
        
        <div className="relative w-full h-80 bg-slate-100 rounded-lg mb-6">
          <svg viewBox="0 0 600 300" className="w-full h-full">
            {/* Trampolín */}
            <line 
              x1={150} 
              y1={150} 
              x2={450} 
              y2={150} 
              stroke="black" 
              strokeWidth="4"
            />
            
            {/* Punto B - Rodillo */}
            <circle 
              cx={300} 
              cy={160} 
              r="10" 
              fill="blue"
            />
            <text x="290" y="190" className="text-sm">B</text>
            
            {/* Punto C - Bisagra */}
            <circle 
              cx={400} 
              cy={160} 
              r="10" 
              fill="red"
            />
            <text x="390" y="190" className="text-sm">C</text>
            
            {/* Nadador (representado por peso G) */}
            <circle 
              cx={150} 
              cy={150} 
              r={weight * 0.02} 
              fill="green"
            />
            <text x="130" y="130" className="text-sm">G = {weight}N</text>
            
            {/* Fuerza RB */}
            <line 
              x1={300} 
              y1={160} 
              x2={300} 
              y2={160 - forces.reactionB * 0.1} 
              stroke="blue" 
              strokeWidth="2" 
              markerEnd="url(#arrowhead)"
            />
            <text x="310" y="140" className="text-sm" fill="blue">RB = {forces.reactionB}N</text>
            
            {/* Fuerza RC */}
            <line 
              x1={400} 
              y1={160} 
              x2={400} 
              y2={160 - forces.reactionC * 0.1} 
              stroke="red" 
              strokeWidth="2" 
              markerEnd="url(#arrowhead)"
            />
            <text x="410" y="140" className="text-sm" fill="red">RC = {forces.reactionC}N</text>
            
            {/* Distancias */}
            <line 
              x1={150} 
              y1={180} 
              x2={300} 
              y2={180} 
              stroke="#666" 
              strokeWidth="1" 
              strokeDasharray="5,5"
            />
            <text x="210" y="200" className="text-sm">b = {distanceB}m</text>
            
            <line 
              x1={300} 
              y1={180} 
              x2={400} 
              y2={180} 
              stroke="#666" 
              strokeWidth="1" 
              strokeDasharray="5,5"
            />
            <text x="340" y="200" className="text-sm">a = {distanceA}m</text>
            
            {/* Definición de flecha */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
          </svg>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Peso del nadador (G): {weight}N
            </label>
            <input
              type="range"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full"
              min="400"
              max="1000"
              step="10"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Distancia a: {distanceA}m
            </label>
            <input
              type="range"
              value={distanceA}
              onChange={(e) => setDistanceA(Number(e.target.value))}
              className="w-full"
              min="1"
              max="4"
              step="0.1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Distancia b: {distanceB}m
            </label>
            <input
              type="range"
              value={distanceB}
              onChange={(e) => setDistanceB(Number(e.target.value))}
              className="w-full"
              min="1"
              max="4"
              step="0.1"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-slate-100 rounded-lg">
          <div>
            <h3 className="font-medium">Reacción en B:</h3>
            <p>{forces.reactionB} N</p>
          </div>
          <div>
            <h3 className="font-medium">Reacción en C:</h3>
            <p>{forces.reactionC} N</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-medium mb-2">Ecuaciones:</h3>
          <p>1. ΣFy = 0: RB + RC = G</p>
          <p>2. ΣMc = 0: RB(a) = G(a + b)</p>
          <p>Donde:</p>
          <p>RB = G(a + b)/a</p>
          <p>RC = G - RB</p>
        </div>
      </div>
    </div>
  );
};

export default DivingBoardSimulator;
