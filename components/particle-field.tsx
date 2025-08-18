"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const particlesRef = useRef<THREE.Points>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    const getParticleCount = () => {
      if (window.innerWidth < 768) return 500 // Mobile
      if (window.innerWidth < 1024) return 750 // Tablet
      return 1000 // Desktop
    }

    const particleCount = getParticleCount()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    // Purple color palette
    const purpleColors = [
      new THREE.Color(0x8b5cf6), // purple-500
      new THREE.Color(0xa855f7), // purple-600
      new THREE.Color(0xc084fc), // purple-400
      new THREE.Color(0x6366f1), // indigo-500
      new THREE.Color(0x8b5cf6), // purple-500
    ]

    for (let i = 0; i < particleCount; i++) {
      // Random positions
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      // Random purple colors
      const color = purpleColors[Math.floor(Math.random() * purpleColors.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const particleSize = window.innerWidth < 768 ? 0.03 : 0.05

    const material = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, material)
    particlesRef.current = particles
    scene.add(particles)

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)

      if (particlesRef.current) {
        // Rotate particles slowly
        particlesRef.current.rotation.x += 0.001
        particlesRef.current.rotation.y += 0.002

        // React to mouse movement
        const targetX = mouseRef.current.x * 0.1
        const targetY = mouseRef.current.y * 0.1

        particlesRef.current.rotation.x += (targetY - particlesRef.current.rotation.x) * 0.02
        particlesRef.current.rotation.y += (targetX - particlesRef.current.rotation.y) * 0.02
      }

      renderer.render(scene, camera)
    }

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove)
      animate()
    } else {
      // Static render for reduced motion
      renderer.render(scene, camera)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }

      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }

      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" />
}
