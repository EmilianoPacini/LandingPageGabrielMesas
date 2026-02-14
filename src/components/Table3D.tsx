import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

/* ── Loader ────────────────────────────────────────────────── */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="text-white font-rajdhani text-sm">{progress.toFixed(0)}%</span>
    </Html>
  );
}

/* ── Infinity Table ────────────────────────────────────────── */
const InfinityTable = ({
  isLedOn,
  toggleLed,
}: {
  isLedOn: boolean;
  toggleLed: () => void;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // gentle floating animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.04;
    }
  });

  const ledColor = isLedOn ? '#00e5ff' : '#111';
  const emissiveIntensity = isLedOn ? 3 : 0;

  const legPositions: [number, number, number][] = [
    [-0.42, -0.15, -0.42],
    [0.42, -0.15, -0.42],
    [-0.42, -0.15, 0.42],
    [0.42, -0.15, 0.42],
  ];

  return (
    <group
      ref={groupRef}
      onClick={(e) => {
        e.stopPropagation();
        toggleLed();
      }}
      scale={1.6}
    >
      {/* ── Frame / Border (aluminio anodizado) ─────────── */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[1.05, 0.06, 1.05]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* ── Glass Top (vidrio templado con reflejo) ──────── */}
      <mesh position={[0, 0.06, 0]}>
        <boxGeometry args={[0.95, 0.015, 0.95]} />
        <meshPhysicalMaterial
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.05}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* ── LED Strip (tira LED RGBIC) ──────────────────── */}
      {/* Top ring */}
      <mesh position={[0, 0.01, 0]}>
        <boxGeometry args={[0.92, 0.012, 0.92]} />
        <meshStandardMaterial
          color={ledColor}
          emissive={ledColor}
          emissiveIntensity={emissiveIntensity}
          toneMapped={false}
        />
      </mesh>

      {/* Inner LED strips for depth effect */}
      <mesh position={[0, -0.02, 0]}>
        <boxGeometry args={[0.88, 0.005, 0.88]} />
        <meshStandardMaterial
          color={ledColor}
          emissive={ledColor}
          emissiveIntensity={emissiveIntensity * 0.6}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[0.84, 0.005, 0.84]} />
        <meshStandardMaterial
          color={ledColor}
          emissive={ledColor}
          emissiveIntensity={emissiveIntensity * 0.3}
          toneMapped={false}
        />
      </mesh>

      {/* ── Base / Mirror Bottom ─────────────────────────── */}
      <mesh position={[0, -0.08, 0]}>
        <boxGeometry args={[1.05, 0.04, 1.05]} />
        <meshStandardMaterial color="#0d0d0d" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* ── Legs (patas aluminio) ────────────────────────── */}
      {legPositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.04, 0.22, 0.04]} />
          <meshStandardMaterial color="#1e1e1e" metalness={0.7} roughness={0.2} />
        </mesh>
      ))}

      {/* ── LED Glow Light ───────────────────────────────── */}
      <pointLight
        position={[0, 0.15, 0]}
        intensity={isLedOn ? 2 : 0}
        color="#00e5ff"
        distance={2}
        decay={2}
      />
      <pointLight
        position={[0, -0.15, 0]}
        intensity={isLedOn ? 1 : 0}
        color="#00e5ff"
        distance={1.5}
        decay={2}
      />
    </group>
  );
};

/* ── Main Component ────────────────────────────────────────── */
const Table3D = () => {
  const [isLedOn, setIsLedOn] = useState(true);

  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing relative">
      <Canvas
        camera={{ position: [1.8, 1.4, 1.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting setup (no Environment to avoid HDR loading issues) */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#6366f1" />
          <spotLight
            position={[0, 5, 0]}
            angle={0.4}
            penumbra={0.8}
            intensity={0.8}
            color="#ffffff"
          />

          <InfinityTable isLedOn={isLedOn} toggleLed={() => setIsLedOn(!isLedOn)} />

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={1.5}
            maxDistance={4}
            minPolarAngle={0.3}
            maxPolarAngle={Math.PI / 2.1}
            autoRotate
            autoRotateSpeed={1.2}
          />
        </Suspense>
      </Canvas>

      {/* Interaction Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none select-none">
        <p className="text-[11px] text-white/60 font-rajdhani uppercase tracking-[0.2em]">
          {isLedOn ? '💡 Click para Apagar LED' : '🔌 Click para Encender LED'}
        </p>
      </div>
    </div>
  );
};

export default Table3D;
