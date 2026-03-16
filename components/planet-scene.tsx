"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, Sphere } from "@react-three/drei"
import type { Mesh } from "three"
import * as THREE from "three"

function Planet() {
  const meshRef = useRef<Mesh>(null)
  
  const planetMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#1a5f7a"),
      roughness: 0.8,
      metalness: 0.2,
      emissive: new THREE.Color("#0d3d4d"),
      emissiveIntensity: 0.1,
    })
  }, [])

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[2.5, 64, 64]} position={[0, 0, 0]}>
      <primitive object={planetMaterial} attach="material" />
    </Sphere>
  )
}

function Atmosphere() {
  return (
    <mesh scale={[1.05, 1.05, 1.05]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        color="#4dd0e1"
        transparent
        opacity={0.15}
        depthWrite={false}
      />
    </mesh>
  )
}

export function PlanetScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4dd0e1" />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Planet />
        <Atmosphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
