/* eslint-disable react-hooks/purity */

"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function DataCore() {
  const groupRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    // Parallax sutil seguindo o mouse
    const { x, y } = state.pointer;
    group.rotation.y += delta * 0.25;
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, y * 0.4, 0.05);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -x * 0.15, 0.05);

    if (wireRef.current) wireRef.current.rotation.y -= delta * 0.15;
    if (innerRef.current) innerRef.current.rotation.x += delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Malha externa — "estrutura de dados" */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#ff3621" wireframe transparent opacity={0.55} />
      </mesh>

      {/* Núcleo sólido */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#1a1a20"
          metalness={0.6}
          roughness={0.25}
          emissive="#ff3621"
          emissiveIntensity={0.25}
          flatShading
        />
      </mesh>

      {/* Partículas orbitando — "dados fluindo" */}
      <OrbitParticles />
    </group>
  );
}

function OrbitParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 220;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#ff6b5b"
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export function AboutModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        frameloop={inView ? "always" : "never"}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <pointLight position={[-4, -2, 3]} intensity={8} color="#ff3621" />
        <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
          <DataCore />
        </Float>
      </Canvas>
    </div>
  );
}
