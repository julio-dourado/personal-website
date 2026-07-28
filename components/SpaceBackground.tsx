/* eslint-disable react-hooks/immutability, react-hooks/purity, react-hooks/refs */

"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";

const PARTICLE_COUNT = 180;
const CONNECTION_DISTANCE = 1.8;

function ConstellationField() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const velocitiesRef = useRef<THREE.Vector3[]>([]);
  const lineGeometryRef = useRef<THREE.BufferGeometry>(new THREE.BufferGeometry());

  const geometry = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel: THREE.Vector3[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      vel.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.001
        )
      );
    }

    velocitiesRef.current = vel;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useEffect(() => {
    if (pointsRef.current) {
      pointsRef.current.geometry = geometry;
    }
  }, [geometry]);

  useFrame((state) => {
    const posArray = geometry.attributes.position.array as Float32Array;
    const velocities = velocitiesRef.current;
    const lineGeometry = lineGeometryRef.current;

    // Parallax suave seguindo o mouse
    if (groupRef.current) {
      const { x, y } = state.pointer;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        x * 0.12,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -y * 0.08,
        0.04
      );
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      posArray[i * 3] += velocities[i].x;
      posArray[i * 3 + 1] += velocities[i].y;
      posArray[i * 3 + 2] += velocities[i].z;

      if (Math.abs(posArray[i * 3]) > 8) velocities[i].x *= -1;
      if (Math.abs(posArray[i * 3 + 1]) > 5) velocities[i].y *= -1;
      if (Math.abs(posArray[i * 3 + 2]) > 4) velocities[i].z *= -1;
    }

    geometry.attributes.position.needsUpdate = true;

    const linePositions: number[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          linePositions.push(
            posArray[i * 3],
            posArray[i * 3 + 1],
            posArray[i * 3 + 2],
            posArray[j * 3],
            posArray[j * 3 + 1],
            posArray[j * 3 + 2]
          );
        }
      }
    }

    if (linesRef.current) {
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      lineGeometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry = lineGeometry;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <pointsMaterial
          size={0.06}
          color="#ffffff"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <lineBasicMaterial color="#ff3621" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "100px" });

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        frameloop={inView ? "always" : "never"}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        <ConstellationField />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(5,5,5,0.8)_100%)] pointer-events-none" />
    </div>
  );
}
