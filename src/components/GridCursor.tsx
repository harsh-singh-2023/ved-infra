import { useEffect, useRef } from "react";
import * as THREE from "three";

export function GridCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uGridSize: { value: 40.0 },
        uMouseRadius: { value: 0.15 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        uniform float uGridSize;
        uniform float uMouseRadius;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec2 st = uv * uResolution / uGridSize;
          
          // Create grid
          vec2 grid = fract(st);
          float line = step(0.98, grid.x) + step(0.98, grid.y);
          
          // Mouse distance
          vec2 mouseUv = uMouse / uResolution;
          float dist = distance(uv, mouseUv);
          
          // Ripple effect
          float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.5 + 0.5;
          ripple *= smoothstep(uMouseRadius, 0.0, dist);
          
          // Wave distortion
          float wave = sin(st.x * 0.5 + uTime * 0.5) * sin(st.y * 0.5 + uTime * 0.3) * 0.1;
          wave *= smoothstep(uMouseRadius * 1.5, 0.0, dist);
          
          // Grid intensity based on mouse proximity
          float intensity = smoothstep(uMouseRadius, 0.0, dist);
          
          // Color
          vec3 color = vec3(0.011, 0.008, 0.075); // Primary color
          color = mix(vec3(0.05), color, intensity);
          
          // Final color with grid
          float alpha = line * (0.15 + intensity * 0.4 + ripple * 0.3 + wave);
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      material.uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationId: number;
    const animate = (time: number) => {
      // Smooth mouse follow
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.1;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.1;

      material.uniforms.uTime.value = time * 0.001;
      material.uniforms.uMouse.value.set(mousePos.current.x, window.innerHeight - mousePos.current.y);
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate(0);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
