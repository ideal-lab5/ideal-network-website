// 'use client'
// import { useEffect, useRef } from 'react'
// import * as THREE from 'three'
// import '../app/globals.css';

// export default function BackgroundAnimation() {
//   const mountRef = useRef<HTMLDivElement>(null)
//   const sceneRef = useRef<THREE.Scene>()
//   const rendererRef = useRef<THREE.WebGLRenderer>()
//   const frameRef = useRef<number>()

//   useEffect(() => {
//     if (!mountRef.current) return

//     // Scene setup with black background
//     const scene = new THREE.Scene()
//     scene.background = new THREE.Color(0x000000)
    
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ antialias: true })
    
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     mountRef.current.appendChild(renderer.domElement)

//     // Enhanced particle systems
//     const particleSystems: THREE.Points[] = []
//     const time = { value: 0 }

//     // Main floating particles with size variation
//     const createMainParticles = () => {
//       const particleCount = 150
//       const geometry = new THREE.BufferGeometry()
//       const positions = new Float32Array(particleCount * 3)
//       const velocities = new Float32Array(particleCount * 3)
//       const sizes = new Float32Array(particleCount)
//       const phases = new Float32Array(particleCount)

//       for (let i = 0; i < particleCount; i++) {
//         positions[i * 3] = (Math.random() - 0.5) * 120
//         positions[i * 3 + 1] = (Math.random() - 0.5) * 120
//         positions[i * 3 + 2] = (Math.random() - 0.5) * 60

//         velocities[i * 3] = (Math.random() - 0.5) * 0.015
//         velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015
//         velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015

//         sizes[i] = Math.random() * 3 + 1
//         phases[i] = Math.random() * Math.PI * 2
//       }

//       geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
//       geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))
//       geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
//       geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1))

//       const material = new THREE.PointsMaterial({
//         color: 0x4f46e5,
//         size: 2.5,
//         transparent: true,
//         opacity: 0.7,
//         blending: THREE.AdditiveBlending,
//         sizeAttenuation: true
//       })

//       return new THREE.Points(geometry, material)
//     }

//     // Accent particles with different colors
//     const createAccentParticles = () => {
//       const particleCount = 80
//       const geometry = new THREE.BufferGeometry()
//       const positions = new Float32Array(particleCount * 3)
//       const velocities = new Float32Array(particleCount * 3)

//       for (let i = 0; i < particleCount; i++) {
//         positions[i * 3] = (Math.random() - 0.5) * 100
//         positions[i * 3 + 1] = (Math.random() - 0.5) * 100
//         positions[i * 3 + 2] = (Math.random() - 0.5) * 80

//         velocities[i * 3] = (Math.random() - 0.5) * 0.008
//         velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008
//         velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008
//       }

//       geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
//       geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

//       const material = new THREE.PointsMaterial({
//         color: 0x8b5cf6,
//         size: 1.5,
//         transparent: true,
//         opacity: 0.4,
//         blending: THREE.AdditiveBlending
//       })

//       return new THREE.Points(geometry, material)
//     }

//     // Create connection lines between nearby particles
//     const createConnectionLines = () => {
//       const geometry = new THREE.BufferGeometry()
//       const material = new THREE.LineBasicMaterial({
//         color: 0x6366f1,
//         transparent: true,
//         opacity: 0.15,
//         blending: THREE.AdditiveBlending
//       })
      
//       return new THREE.LineSegments(geometry, material)
//     }

//     // Floating geometric shapes
//     const createFloatingShapes = () => {
//       const shapes: THREE.Mesh[] = []
      
//       for (let i = 0; i < 8; i++) {
//         const geometry = Math.random() > 0.5 
//           ? new THREE.OctahedronGeometry(0.8 + Math.random() * 0.4)
//           : new THREE.TetrahedronGeometry(1 + Math.random() * 0.5)
        
//         const material = new THREE.MeshBasicMaterial({
//           color: Math.random() > 0.5 ? 0x4f46e5 : 0x8b5cf6,
//           wireframe: true,
//           transparent: true,
//           opacity: 0.2
//         })
        
//         const mesh = new THREE.Mesh(geometry, material)
//         mesh.position.set(
//           (Math.random() - 0.5) * 80,
//           (Math.random() - 0.5) * 80,
//           (Math.random() - 0.5) * 40
//         )
        
//         mesh.userData = {
//           rotationSpeed: {
//             x: (Math.random() - 0.5) * 0.01,
//             y: (Math.random() - 0.5) * 0.01,
//             z: (Math.random() - 0.5) * 0.01
//           },
//           floatSpeed: Math.random() * 0.02 + 0.01,
//           floatRange: Math.random() * 10 + 5
//         }
        
//         shapes.push(mesh)
//         scene.add(mesh)
//       }
      
//       return shapes
//     }

//     // Initialize all elements
//     const mainParticles = createMainParticles()
//     const accentParticles = createAccentParticles()
//     const connectionLines = createConnectionLines()
//     const floatingShapes = createFloatingShapes()
    
//     particleSystems.push(mainParticles, accentParticles)
//     scene.add(mainParticles, accentParticles, connectionLines)

//     // Add subtle ambient lighting effect
//     const ambientLight = new THREE.AmbientLight(0x4f46e5, 0.1)
//     scene.add(ambientLight)

//     camera.position.z = 35

//     // Enhanced animation loop
//     const animate = () => {
//       time.value += 0.01

//       // Animate main particles with floating motion
//       const mainPositions = mainParticles.geometry.attributes.position.array as Float32Array
//       const mainVelocities = mainParticles.geometry.attributes.velocity.array as Float32Array
//       const phases = mainParticles.geometry.attributes.phase.array as Float32Array

//       for (let i = 0; i < mainPositions.length; i += 3) {
//         const idx = i / 3
        
//         // Add subtle floating motion
//         mainPositions[i] += mainVelocities[i] + Math.sin(time.value + phases[idx]) * 0.005
//         mainPositions[i + 1] += mainVelocities[i + 1] + Math.cos(time.value + phases[idx] * 1.1) * 0.005
//         mainPositions[i + 2] += mainVelocities[i + 2] + Math.sin(time.value * 0.5 + phases[idx] * 0.8) * 0.003

//         // Enhanced boundary wrapping with smooth transitions
//         if (mainPositions[i] > 60) mainPositions[i] = -60
//         if (mainPositions[i] < -60) mainPositions[i] = 60
//         if (mainPositions[i + 1] > 60) mainPositions[i + 1] = -60
//         if (mainPositions[i + 1] < -60) mainPositions[i + 1] = 60
//         if (mainPositions[i + 2] > 30) mainPositions[i + 2] = -30
//         if (mainPositions[i + 2] < -30) mainPositions[i + 2] = 30
//       }

//       // Animate accent particles
//       const accentPositions = accentParticles.geometry.attributes.position.array as Float32Array
//       const accentVelocities = accentParticles.geometry.attributes.velocity.array as Float32Array

//       for (let i = 0; i < accentPositions.length; i += 3) {
//         accentPositions[i] += accentVelocities[i]
//         accentPositions[i + 1] += accentVelocities[i + 1]
//         accentPositions[i + 2] += accentVelocities[i + 2]

//         if (accentPositions[i] > 50) accentPositions[i] = -50
//         if (accentPositions[i] < -50) accentPositions[i] = 50
//         if (accentPositions[i + 1] > 50) accentPositions[i + 1] = -50
//         if (accentPositions[i + 1] < -50) accentPositions[i + 1] = 50
//       }

//       // Update connection lines between nearby particles
//       const connectionPositions: number[] = []
//       const maxDistance = 15
      
//       for (let i = 0; i < mainPositions.length; i += 9) { // Check every 3rd particle for performance
//         for (let j = i + 9; j < mainPositions.length; j += 9) {
//           const dx = mainPositions[i] - mainPositions[j]
//           const dy = mainPositions[i + 1] - mainPositions[j + 1]
//           const dz = mainPositions[i + 2] - mainPositions[j + 2]
//           const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
          
//           if (distance < maxDistance) {
//             connectionPositions.push(
//               mainPositions[i], mainPositions[i + 1], mainPositions[i + 2],
//               mainPositions[j], mainPositions[j + 1], mainPositions[j + 2]
//             )
//           }
//         }
//       }
      
//       connectionLines.geometry.setAttribute(
//         'position', 
//         new THREE.Float32BufferAttribute(connectionPositions, 3)
//       )

//       // Animate floating shapes
//       floatingShapes.forEach(shape => {
//         shape.rotation.x += shape.userData.rotationSpeed.x
//         shape.rotation.y += shape.userData.rotationSpeed.y
//         shape.rotation.z += shape.userData.rotationSpeed.z
        
//         shape.position.y += Math.sin(time.value * shape.userData.floatSpeed) * 0.02
//       })

//       // Update particle systems
//       mainParticles.geometry.attributes.position.needsUpdate = true
//       accentParticles.geometry.attributes.position.needsUpdate = true

//       // Subtle rotation of entire particle systems
//       mainParticles.rotation.x += 0.0005
//       mainParticles.rotation.y += 0.001
//       accentParticles.rotation.x -= 0.0003
//       accentParticles.rotation.y -= 0.0008

//       // Camera subtle movement
//       camera.position.x = Math.sin(time.value * 0.1) * 2
//       camera.position.y = Math.cos(time.value * 0.15) * 1.5

//       renderer.render(scene, camera)
//       frameRef.current = requestAnimationFrame(animate)
//     }

//     animate()

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }

//     window.addEventListener('resize', handleResize)

//     // Store refs
//     sceneRef.current = scene
//     rendererRef.current = renderer

//     // Cleanup
//     return () => {
//       if (frameRef.current) {
//         cancelAnimationFrame(frameRef.current)
//       }
//       window.removeEventListener('resize', handleResize)
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement)
//       }
      
//       // Dispose of geometries and materials
//       particleSystems.forEach(system => {
//         system.geometry.dispose()
//         if (Array.isArray(system.material)) {
//           system.material.forEach(mat => mat.dispose())
//         } else {
//           system.material.dispose()
//         }
//       })
      
//       floatingShapes.forEach(shape => {
//         shape.geometry.dispose()
//         if (Array.isArray(shape.material)) {
//           shape.material.forEach(mat => mat.dispose())
//         } else {
//           shape.material.dispose()
//         }
//       })
      
//       connectionLines.geometry.dispose()
//       connectionLines.material.dispose()
      
//       renderer.dispose()
//     }
//   }, [])

//   return (
//     <div
//       ref={mountRef}
//       className="fixed inset-0 -z-10 pointer-events-none"
//       style={{ opacity: 0.8 }}
//     />
//   )
// }

'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import '../app/globals.css';

export default function BackgroundAnimation() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup with black background
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Enhanced particle systems
    const particleSystems: THREE.Points[] = []
    const time = { value: 0 }

    // Main floating particles with size variation
    const createMainParticles = () => {
      const particleCount = 150
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const velocities = new Float32Array(particleCount * 3)
      const sizes = new Float32Array(particleCount)
      const phases = new Float32Array(particleCount)

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 120
        positions[i * 3 + 1] = (Math.random() - 0.5) * 120
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60

        velocities[i * 3] = (Math.random() - 0.5) * 0.015
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015

        sizes[i] = Math.random() * 3 + 1
        phases[i] = Math.random() * Math.PI * 2
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
      geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1))

      const material = new THREE.PointsMaterial({
        color: 0x4f46e5,
        size: 2.5,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      })

      return new THREE.Points(geometry, material)
    }

    // Accent particles with different colors
    const createAccentParticles = () => {
      const particleCount = 80
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const velocities = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100
        positions[i * 3 + 2] = (Math.random() - 0.5) * 80

        velocities[i * 3] = (Math.random() - 0.5) * 0.008
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

      const material = new THREE.PointsMaterial({
        color: 0x8b5cf6,
        size: 1.5,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      })

      return new THREE.Points(geometry, material)
    }

    // Create connection lines between nearby particles
    const createConnectionLines = () => {
      const geometry = new THREE.BufferGeometry()
      const material = new THREE.LineBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
      })
      
      return new THREE.LineSegments(geometry, material)
    }

    // Enhanced floating geometric shapes with collision detection
    const createFloatingShapes = () => {
      const shapes: THREE.Mesh[] = []
      const shapeTypes = ['octahedron', 'tetrahedron', 'icosahedron', 'dodecahedron', 'box']
      
      for (let i = 0; i < 18; i++) {
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
        let geometry
        let radius
        
        switch (shapeType) {
          case 'octahedron':
            radius = 0.6 + Math.random() * 0.4
            geometry = new THREE.OctahedronGeometry(radius)
            break
          case 'tetrahedron':
            radius = 0.8 + Math.random() * 0.5
            geometry = new THREE.TetrahedronGeometry(radius)
            break
          case 'icosahedron':
            radius = 0.5 + Math.random() * 0.3
            geometry = new THREE.IcosahedronGeometry(radius)
            break
          case 'dodecahedron':
            radius = 0.4 + Math.random() * 0.3
            geometry = new THREE.DodecahedronGeometry(radius)
            break
          default:
            radius = 0.5 + Math.random() * 0.4
            geometry = new THREE.BoxGeometry(radius * 2, radius * 2, radius * 2)
        }
        
        const colors = [0x4f46e5, 0x8b5cf6, 0x06b6d4, 0x10b981, 0xf59e0b, 0xef4444]
        const color = colors[Math.floor(Math.random() * colors.length)]
        
        const material = new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.15 + Math.random() * 0.15
        })
        
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 50
        )
        
        mesh.userData = {
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.015
          ),
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.015,
            y: (Math.random() - 0.5) * 0.015,
            z: (Math.random() - 0.5) * 0.015
          },
          floatSpeed: Math.random() * 0.025 + 0.01,
          floatRange: Math.random() * 12 + 8,
          radius: radius,
          bounceIntensity: 0.7 + Math.random() * 0.3,
          originalOpacity: material.opacity,
          pulsePhase: Math.random() * Math.PI * 2
        }
        
        shapes.push(mesh)
        scene.add(mesh)
      }
      
      return shapes
    }

    // Collision detection function
    const checkShapeCollisions = (shapes: THREE.Mesh[]) => {
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const shape1 = shapes[i]
          const shape2 = shapes[j]
          
          const distance = shape1.position.distanceTo(shape2.position)
          const minDistance = shape1.userData.radius + shape2.userData.radius + 1
          
          if (distance < minDistance) {
            // Collision detected - bounce effect
            const collisionVector = new THREE.Vector3()
              .subVectors(shape2.position, shape1.position)
              .normalize()
            
            // Separate shapes
            const overlap = minDistance - distance
            const separation = collisionVector.clone().multiplyScalar(overlap * 0.5)
            
            shape1.position.sub(separation)
            shape2.position.add(separation)
            
            // Bounce velocities
            const bounceForce = 0.05
            shape1.userData.velocity.add(collisionVector.clone().multiplyScalar(-bounceForce * shape1.userData.bounceIntensity))
            shape2.userData.velocity.add(collisionVector.clone().multiplyScalar(bounceForce * shape2.userData.bounceIntensity))
            
            // Flash effect on collision
            if (shape1.material instanceof THREE.MeshBasicMaterial) {
              shape1.material.opacity = Math.min(1, shape1.userData.originalOpacity + 0.3)
            }
            if (shape2.material instanceof THREE.MeshBasicMaterial) {
              shape2.material.opacity = Math.min(1, shape2.userData.originalOpacity + 0.3)
            }
          }
        }
      }
    }

    // Initialize all elements
    const mainParticles = createMainParticles()
    const accentParticles = createAccentParticles()
    const connectionLines = createConnectionLines()
    const floatingShapes = createFloatingShapes()
    
    particleSystems.push(mainParticles, accentParticles)
    scene.add(mainParticles, accentParticles, connectionLines)

    // Add subtle ambient lighting effect
    const ambientLight = new THREE.AmbientLight(0x4f46e5, 0.1)
    scene.add(ambientLight)

    camera.position.z = 35

    // Enhanced animation loop
    const animate = () => {
      time.value += 0.01

      // Animate main particles with floating motion
      const mainPositions = mainParticles.geometry.attributes.position.array as Float32Array
      const mainVelocities = mainParticles.geometry.attributes.velocity.array as Float32Array
      const phases = mainParticles.geometry.attributes.phase.array as Float32Array

      for (let i = 0; i < mainPositions.length; i += 3) {
        const idx = i / 3
        
        // Add subtle floating motion
        mainPositions[i] += mainVelocities[i] + Math.sin(time.value + phases[idx]) * 0.005
        mainPositions[i + 1] += mainVelocities[i + 1] + Math.cos(time.value + phases[idx] * 1.1) * 0.005
        mainPositions[i + 2] += mainVelocities[i + 2] + Math.sin(time.value * 0.5 + phases[idx] * 0.8) * 0.003

        // Enhanced boundary wrapping with smooth transitions
        if (mainPositions[i] > 60) mainPositions[i] = -60
        if (mainPositions[i] < -60) mainPositions[i] = 60
        if (mainPositions[i + 1] > 60) mainPositions[i + 1] = -60
        if (mainPositions[i + 1] < -60) mainPositions[i + 1] = 60
        if (mainPositions[i + 2] > 30) mainPositions[i + 2] = -30
        if (mainPositions[i + 2] < -30) mainPositions[i + 2] = 30
      }

      // Animate accent particles
      const accentPositions = accentParticles.geometry.attributes.position.array as Float32Array
      const accentVelocities = accentParticles.geometry.attributes.velocity.array as Float32Array

      for (let i = 0; i < accentPositions.length; i += 3) {
        accentPositions[i] += accentVelocities[i]
        accentPositions[i + 1] += accentVelocities[i + 1]
        accentPositions[i + 2] += accentVelocities[i + 2]

        if (accentPositions[i] > 50) accentPositions[i] = -50
        if (accentPositions[i] < -50) accentPositions[i] = 50
        if (accentPositions[i + 1] > 50) accentPositions[i + 1] = -50
        if (accentPositions[i + 1] < -50) accentPositions[i + 1] = 50
      }

      // Update connection lines between nearby particles
      const connectionPositions: number[] = []
      const maxDistance = 15
      
      for (let i = 0; i < mainPositions.length; i += 9) { // Check every 3rd particle for performance
        for (let j = i + 9; j < mainPositions.length; j += 9) {
          const dx = mainPositions[i] - mainPositions[j]
          const dy = mainPositions[i + 1] - mainPositions[j + 1]
          const dz = mainPositions[i + 2] - mainPositions[j + 2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
          
          if (distance < maxDistance) {
            connectionPositions.push(
              mainPositions[i], mainPositions[i + 1], mainPositions[i + 2],
              mainPositions[j], mainPositions[j + 1], mainPositions[j + 2]
            )
          }
        }
      }
      
      connectionLines.geometry.setAttribute(
        'position', 
        new THREE.Float32BufferAttribute(connectionPositions, 3)
      )

      // Animate floating shapes with physics and collision
      floatingShapes.forEach(shape => {
        // Apply velocity
        shape.position.add(shape.userData.velocity)
        
        // Add floating motion
        shape.position.y += Math.sin(time.value * shape.userData.floatSpeed + shape.userData.pulsePhase) * 0.02
        
        // Apply rotation
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z
        
        // Boundary collision with damping
        const bounds = { x: 50, y: 50, z: 25 }
        
        if (Math.abs(shape.position.x) > bounds.x) {
          shape.userData.velocity.x *= -0.8
          shape.position.x = Math.sign(shape.position.x) * bounds.x
        }
        if (Math.abs(shape.position.y) > bounds.y) {
          shape.userData.velocity.y *= -0.8
          shape.position.y = Math.sign(shape.position.y) * bounds.y
        }
        if (Math.abs(shape.position.z) > bounds.z) {
          shape.userData.velocity.z *= -0.8
          shape.position.z = Math.sign(shape.position.z) * bounds.z
        }
        
        // Velocity damping
        shape.userData.velocity.multiplyScalar(0.998)
        
        // Fade collision flash effect
        if (shape.material instanceof THREE.MeshBasicMaterial) {
          const targetOpacity = shape.userData.originalOpacity
          if (shape.material.opacity > targetOpacity) {
            shape.material.opacity = THREE.MathUtils.lerp(shape.material.opacity, targetOpacity, 0.05)
          }
        }
        
        // Subtle scale pulsing
        const scalePulse = 1 + Math.sin(time.value * 2 + shape.userData.pulsePhase) * 0.05
        shape.scale.setScalar(scalePulse)
      })

      // Check for shape collisions
      checkShapeCollisions(floatingShapes)

      // Update particle systems
      mainParticles.geometry.attributes.position.needsUpdate = true
      accentParticles.geometry.attributes.position.needsUpdate = true

      // Subtle rotation of entire particle systems
      mainParticles.rotation.x += 0.0005
      mainParticles.rotation.y += 0.001
      accentParticles.rotation.x -= 0.0003
      accentParticles.rotation.y -= 0.0008

      // Camera subtle movement
      camera.position.x = Math.sin(time.value * 0.1) * 2
      camera.position.y = Math.cos(time.value * 0.15) * 1.5

      renderer.render(scene, camera)
      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Store refs
    sceneRef.current = scene
    rendererRef.current = renderer

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose of geometries and materials
      particleSystems.forEach(system => {
        system.geometry.dispose()
        if (Array.isArray(system.material)) {
          system.material.forEach(mat => mat.dispose())
        } else {
          system.material.dispose()
        }
      })
      
      floatingShapes.forEach(shape => {
        shape.geometry.dispose()
        if (Array.isArray(shape.material)) {
          shape.material.forEach(mat => mat.dispose())
        } else {
          shape.material.dispose()
        }
      })
      
      connectionLines.geometry.dispose()
      connectionLines.material.dispose()
      
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}