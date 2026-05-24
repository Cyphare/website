import React, { useEffect, useState, useRef } from 'react';

const BlueCat = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    // Add event listener to track mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculatePupilOffset = (eyeCenterXPercent, eyeCenterYPercent) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const eyeCenterX = rect.left + (rect.width * eyeCenterXPercent / 100);
    const eyeCenterY = rect.top + (rect.height * eyeCenterYPercent / 100);
    
    const dx = mousePos.x - eyeCenterX;
    const dy = mousePos.y - eyeCenterY;
    
    const angle = Math.atan2(dy, dx);
    
    // Max distance pupil can move is 4 SVG units
    // Math.sqrt(dx*dx + dy*dy) gives distance in pixels.
    // We scale it down so it doesn't move instantly to the edge.
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy) / 15, 4); 
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };

  const leftPupil = calculatePupilOffset(35, 50);
  const rightPupil = calculatePupilOffset(65, 50);

  return (
    <div 
      ref={containerRef} 
      className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Ears */}
        <polygon points="10,40 10,5 40,30" fill="#3b82f6" />
        <polygon points="90,40 90,5 60,30" fill="#3b82f6" />
        
        {/* Inner Ears */}
        <polygon points="15,35 15,15 30,30" fill="#93c5fd" />
        <polygon points="85,35 85,15 70,30" fill="#93c5fd" />
        
        {/* Head */}
        <circle cx="50" cy="55" r="45" fill="#3b82f6" />
        
        {/* Eyes (Whites) */}
        <circle cx="35" cy="50" r="12" fill="white" />
        <circle cx="65" cy="50" r="12" fill="white" />
        
        {/* Pupils */}
        <circle 
          cx={35 + leftPupil.x} 
          cy={50 + leftPupil.y} 
          r="5.5" 
          fill="#1e293b" 
        />
        <circle 
          cx={65 + rightPupil.x} 
          cy={50 + rightPupil.y} 
          r="5.5" 
          fill="#1e293b" 
        />
        
        {/* Nose */}
        <polygon points="45,65 55,65 50,72" fill="#f472b6" />
        
        {/* Mouth */}
        <path d="M 40 75 Q 45 80 50 75 Q 55 80 60 75" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
        
        {/* Whiskers */}
        <line x1="5" y1="60" x2="25" y2="65" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="68" x2="25" y2="68" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="76" x2="25" y2="71" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
        
        <line x1="95" y1="60" x2="75" y2="65" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="95" y1="68" x2="75" y2="68" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="95" y1="76" x2="75" y2="71" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default BlueCat;
