"use client";

import type { Group } from "three";

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function GreenOnion({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[0.012, 0.015, 0.05, 6]} />
      <meshStandardMaterial color="#22c55e" roughness={0.5} />
    </mesh>
  );
}

function Chopsticks() {
  return (
    <group position={[0.35, 0.2, 0.1]} rotation={[0, -0.3, 0.15]}>
      {/* Chopstick 1 */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.008, 0.6, 8]} />
        <meshStandardMaterial color="#8b4513" roughness={0.6} />
      </mesh>
      {/* Chopstick 2 */}
      <mesh position={[0.04, 0, 0.02]} rotation={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.012, 0.008, 0.6, 8]} />
        <meshStandardMaterial color="#8b4513" roughness={0.6} />
      </mesh>
    </group>
  );
}

function FriedEgg() {
  return (
    <group position={[0, 0.16, 0]}>
      {/* Egg white outline/shadow */}
      <mesh position={[0, -0.005, 0]}>
        <cylinderGeometry args={[0.17, 0.19, 0.015, 24]} />
        <meshStandardMaterial color="#e5e5e5" roughness={0.4} />
      </mesh>
      {/* Egg white - flat disc */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.17, 0.02, 24]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} />
      </mesh>
      {/* Egg yolk */}
      <mesh position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.2} />
      </mesh>
    </group>
  );
}

function BowlMesh() {
  const bowlShape = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const x = 0.28 + 0.22 * Math.sin(t * Math.PI * 0.55);
      const y = -0.18 + t * 0.32;
      points.push(new THREE.Vector2(x, y));
    }
    return points;
  }, []);

  return (
    <group>
      {/* Bowl exterior - warm terracotta */}
      <mesh>
        <latheGeometry args={[bowlShape, 32]} />
        <meshStandardMaterial
          color="#c2856e"
          roughness={0.5}
          metalness={0.0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Bowl() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const greenOnions = useMemo(() => {
    const onions: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    for (let i = 0; i < 15; i++) {
      const angle = (i / 15) * Math.PI * 2 + Math.random() * 0.3;
      const radius = 0.12 + Math.random() * 0.22;
      onions.push({
        pos: [Math.cos(angle) * radius, 0.18, Math.sin(angle) * radius],
        rot: [Math.PI / 2, Math.random() * Math.PI, 0],
      });
    }
    return onions;
  }, []);

  return (
    <group ref={groupRef}>
      <BowlMesh />

      {/* Rice base - flat disc */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.42, 0.4, 0.12, 32]} />
        <meshStandardMaterial color="#fafafa" roughness={0.8} />
      </mesh>

      {/* Rice texture bumps */}
      {Array.from({ length: 25 }).map((_, i) => {
        const angle = (i / 25) * Math.PI * 2;
        const radius = 0.22 + Math.random() * 0.15;
        return (
          <mesh
            key={`rice-${i}`}
            position={[
              Math.cos(angle) * radius,
              0.16,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.025, 6, 6]} />
            <meshStandardMaterial color="#fef3c7" roughness={0.8} />
          </mesh>
        );
      })}

      <FriedEgg />

      {greenOnions.map((onion, i) => (
        <GreenOnion key={`onion-${i}`} position={onion.pos} rotation={onion.rot} />
      ))}

      <Chopsticks />
    </group>
  );
}

export function EggFriedRiceBowl() {
  return (
    <div className="size-24">
      <Canvas
        camera={{ position: [0.8, 1.4, 0.8], fov: 35 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-3, 4, -3]} intensity={0.4} />
        <pointLight position={[0, 3, 0]} intensity={0.3} />

        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <Bowl />
        </Float>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={1}
          maxDistance={4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
