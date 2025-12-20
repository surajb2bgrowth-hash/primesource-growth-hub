import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position, color, size = 1, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, size = 1, speed = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[size, size * 0.35, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.95}
          transparent
          opacity={0.85}
        />
      </Torus>
    </Float>
  );
}

function FloatingBox({ position, color, size = 0.8, speed = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.35 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.6}>
      <Box ref={meshRef} args={[size, size, size]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.95}
          transparent
          opacity={0.9}
        />
      </Box>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15
        ],
        scale: Math.random() * 0.02 + 0.01,
        speed: Math.random() * 0.5 + 0.5
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        const matrix = new THREE.Matrix4();
        const y = particle.position[1] + Math.sin(state.clock.elapsedTime * particle.speed + i) * 0.15;
        matrix.setPosition(particle.position[0], y, particle.position[2]);
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale));
        meshRef.current!.setMatrixAt(i, matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -5, -5]} intensity={0.4} color="#3b82f6" />
      <pointLight position={[0, 0, 8]} intensity={0.6} color="#60a5fa" />
      <pointLight position={[-5, 5, 0]} intensity={0.3} color="#a78bfa" />
      
      {/* Main spheres */}
      <FloatingSphere position={[4, 1.5, -3]} color="#1e40af" distort={0.35} size={1.4} speed={0.7} />
      <FloatingSphere position={[-4, -1, -4]} color="#3b82f6" distort={0.25} size={1} speed={1} />
      <FloatingSphere position={[1, 3, -5]} color="#60a5fa" distort={0.2} size={0.7} speed={0.9} />
      <FloatingSphere position={[-2, -3, -2]} color="#8b5cf6" distort={0.3} size={0.5} speed={1.2} />
      
      {/* Torus elements */}
      <FloatingTorus position={[-3, 2, -2]} color="#1e3a8a" size={0.8} speed={0.5} />
      <FloatingTorus position={[5, -2, -3]} color="#2563eb" size={0.6} speed={0.7} />
      
      {/* Box elements */}
      <FloatingBox position={[2.5, -2.5, -1.5]} color="#1e40af" size={0.7} speed={0.6} />
      <FloatingBox position={[-5, 0.5, -3]} color="#6366f1" size={0.5} speed={0.8} />
      
      <Particles />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
