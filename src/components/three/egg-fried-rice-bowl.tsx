"use client";

import type { Group } from "three";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function RiceGrain({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
      <meshStandardMaterial color="#faf8f0" roughness={0.8} />
    </mesh>
  );
}

function EggPiece({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <mesh position={position} scale={scale}>
      <dodecahedronGeometry args={[0.06, 0]} />
      <meshStandardMaterial color="#ffdb58" roughness={0.6} />
    </mesh>
  );
}

function GreenOnion({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[0.012, 0.015, 0.06, 8]} />
      <meshStandardMaterial color="#5cb85c" roughness={0.7} />
    </mesh>
  );
}

function BowlMesh() {
  const bowlShape = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const x = 0.25 + 0.25 * Math.sin(t * Math.PI * 0.5);
      const y = -0.2 + t * 0.35;
      points.push(new THREE.Vector2(x, y));
    }
    return points;
  }, []);

  return (
    <mesh>
      <latheGeometry args={[bowlShape, 32]} />
      <meshStandardMaterial
        color="#d4a574"
        roughness={0.4}
        metalness={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Bowl() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const riceGrains = useMemo(() => {
    const grains: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.32;
      const height = 0.08 + Math.random() * 0.08;
      grains.push({
        pos: [Math.cos(angle) * radius, height, Math.sin(angle) * radius],
        rot: [Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5],
      });
    }
    return grains;
  }, []);

  const eggPieces = useMemo(() => {
    const pieces: { pos: [number, number, number]; scale: number }[] = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 0.1 + Math.random() * 0.15;
      pieces.push({
        pos: [Math.cos(angle) * radius, 0.14 + Math.random() * 0.04, Math.sin(angle) * radius],
        scale: 0.8 + Math.random() * 0.4,
      });
    }
    return pieces;
  }, []);

  const greenOnions = useMemo(() => {
    const onions: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.28;
      onions.push({
        pos: [Math.cos(angle) * radius, 0.16 + Math.random() * 0.03, Math.sin(angle) * radius],
        rot: [Math.random() * 0.8 - 0.4, Math.random() * Math.PI, Math.random() * 0.8 - 0.4],
      });
    }
    return onions;
  }, []);

  return (
    <group ref={groupRef}>
      <BowlMesh />

      {/* Rice base layer */}
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.38, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
        <meshStandardMaterial color="#fdf6e3" roughness={0.9} />
      </mesh>

      {riceGrains.map((grain, i) => (
        <RiceGrain key={`rice-${i}`} position={grain.pos} rotation={grain.rot} />
      ))}

      {eggPieces.map((egg, i) => (
        <EggPiece key={`egg-${i}`} position={egg.pos} scale={egg.scale} />
      ))}

      {greenOnions.map((onion, i) => (
        <GreenOnion key={`onion-${i}`} position={onion.pos} rotation={onion.rot} />
      ))}
    </group>
  );
}

export function EggFriedRiceBowl() {
  return (
    <div className="size-24">
      <Canvas
        camera={{ position: [1.2, 1, 1.2], fov: 40 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-3, 4, -3]} intensity={0.4} />
        <pointLight position={[0, 3, 0]} intensity={0.3} />

        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <Bowl />
        </Float>
      </Canvas>
    </div>
  );
}
