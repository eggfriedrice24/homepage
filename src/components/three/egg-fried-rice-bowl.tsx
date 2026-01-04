"use client";

import type { Group } from "three";

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function RiceGrain({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.03, 4, 4]} />
      <meshStandardMaterial color="#f5f5dc" flatShading />
    </mesh>
  );
}

function EggPiece({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <icosahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial color="#ffd700" flatShading />
    </mesh>
  );
}

function GreenOnion({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[Math.random(), Math.random(), 0]}>
      <cylinderGeometry args={[0.02, 0.02, 0.1, 6]} />
      <meshStandardMaterial color="#228b22" flatShading />
    </mesh>
  );
}

function Bowl() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const riceGrains = useMemo(() => {
    const grains: [number, number, number][] = [];
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.35;
      const height = 0.15 + Math.random() * 0.15;
      grains.push([
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius,
      ]);
    }
    return grains;
  }, []);

  const eggPieces = useMemo(() => {
    const pieces: [number, number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.25;
      pieces.push([
        Math.cos(angle) * radius,
        0.25 + Math.random() * 0.1,
        Math.sin(angle) * radius,
      ]);
    }
    return pieces;
  }, []);

  const greenOnions = useMemo(() => {
    const onions: [number, number, number][] = [];
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.3;
      onions.push([
        Math.cos(angle) * radius,
        0.28 + Math.random() * 0.05,
        Math.sin(angle) * radius,
      ]);
    }
    return onions;
  }, []);

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.35, 0.3, 16, 1, true]} />
        <meshStandardMaterial color="#8b4513" flatShading side={2} />
      </mesh>

      <mesh position={[0, -0.15, 0]} rotation={[Math.PI, 0, 0]}>
        <circleGeometry args={[0.35, 16]} />
        <meshStandardMaterial color="#8b4513" flatShading />
      </mesh>

      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.45, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#fffacd" flatShading />
      </mesh>

      {riceGrains.map((pos, i) => (
        <RiceGrain key={`rice-${i}`} position={pos} />
      ))}

      {eggPieces.map((pos, i) => (
        <EggPiece key={`egg-${i}`} position={pos} />
      ))}

      {greenOnions.map((pos, i) => (
        <GreenOnion key={`onion-${i}`} position={pos} />
      ))}
    </group>
  );
}

export function EggFriedRiceBowl() {
  return (
    <div className="h-64 w-64">
      <Canvas
        camera={{ position: [1.5, 1.5, 1.5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 3, -5]} intensity={0.3} />

        <Float
          speed={2}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <Bowl />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
