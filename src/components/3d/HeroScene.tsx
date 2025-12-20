import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed = 1, distort = 0.3, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <Torus ref={meshRef} args={[1, 0.3, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          transparent
          opacity={0.9}
        />
      </Torus>
    </Float>
  );
}

function AnimatedBox({ position, color, speed = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.95}
          transparent
          opacity={0.85}
        />
      </Box>
    </Float>
  );
}

function Particles() {
  const count = 100;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      for (let i = 0; i < count; i++) {
        const matrix = new THREE.Matrix4();
        const x = positions[i * 3];
        const y = positions[i * 3 + 1] + Math.sin(state.clock.elapsedTime + i) * 0.1;
        const z = positions[i * 3 + 2];
        matrix.setPosition(x, y, z);
        meshRef.current.setMatrixAt(i, matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#4a9eff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#60a5fa" />
      
      <AnimatedSphere position={[3, 1, -2]} color="#1e40af" distort={0.4} size={1.2} speed={0.8} />
      <AnimatedSphere position={[-3.5, -1, -3]} color="#3b82f6" distort={0.3} size={0.8} speed={1.2} />
      <AnimatedSphere position={[0, 2.5, -4]} color="#60a5fa" distort={0.25} size={0.6} speed={1} />
      
      <AnimatedTorus position={[-2, 1.5, -1]} color="#1e3a8a" speed={0.6} />
      <AnimatedTorus position={[4, -1.5, -2]} color="#2563eb" speed={0.8} />
      
      <AnimatedBox position={[2, -2, -1]} color="#1e40af" speed={0.7} />
      <AnimatedBox position={[-4, 0, -2]} color="#3b82f6" speed={0.9} />
      
      <Particles />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
