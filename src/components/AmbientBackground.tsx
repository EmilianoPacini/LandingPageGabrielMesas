import React, { useRef } from 'react';

interface AmbientBackgroundProps {
  children: React.ReactNode;
}

const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-deep-black">
      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default AmbientBackground;
