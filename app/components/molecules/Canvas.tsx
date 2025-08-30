import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TagsAnimation from "../atoms/TagsAnimation";

const modelUrl = "/assets/3d/memoji.glb";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotationX = useTransform(mouseY, [-1.2, 1.2], [0.7, -0.7]);
  const rotationY = useTransform(mouseX, [-1, 1], [-0.7, 0.7]);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    let model: THREE.Object3D | undefined;
    const modelContainer = new THREE.Object3D();
    scene.add(modelContainer);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(modelUrl, (gltf) => {
      model = gltf.scene;

      // Center the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      // Scale the model to fit nicely in the viewport
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 40 / maxDim; // Adjust this value to control model size
      model.scale.setScalar(scale);

      modelContainer.add(model);
    });

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffddbb, 1);
    directionalLight.position.set(-10, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Get initial canvas size
    const getCanvasSize = () => {
      if (!canvasRef.current) return { width: 1, height: 1 };
      const rect = canvasRef.current.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    };

    const initialSize = getCanvasSize();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      39, // FOV
      initialSize.width / initialSize.height,
      0.1,
      100
    );
    camera.position.z = 80;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(initialSize.width, initialSize.height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = false;
    controls.enabled = false;

    // Mouse move handler with throttling for smoother performance
    let animationId: number;
    const onDocumentMouseMove = (event: MouseEvent) => {
      if (model && canvasRef.current) {
        // Cancel previous animation frame to prevent multiple updates
        if (animationId) {
          cancelAnimationFrame(animationId);
        }

        animationId = requestAnimationFrame(() => {
          const rect = canvasRef.current!.getBoundingClientRect();
          const mouseXValue =
            ((event.clientX - rect.left) / rect.width) * 2 - 1;
          const mouseYValue = -(
            ((event.clientY - rect.top) / rect.height) * 2 -
            1
          );

          mouseX.set(mouseXValue);
          mouseY.set(mouseYValue);
        });
      }
    };

    window.addEventListener("mousemove", onDocumentMouseMove, {
      passive: true,
    });

    // Resize handler
    const handleResize = () => {
      if (!canvasRef.current) return;

      // Force canvas to update its dimensions
      const canvas = canvasRef.current;
      const container = canvas.parentElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        canvas.style.width = rect.width + "px";
        canvas.style.height = rect.height + "px";
      }

      const size = getCanvasSize();

      // Update camera aspect ratio
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();

      // Update renderer size to match container
      renderer.setSize(size.width, size.height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Use ResizeObserver to watch the canvas container for size changes
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    // Initial resize to ensure correct dimensions
    setTimeout(() => {
      handleResize();
    }, 100);

    // Animation loop with smooth lerping
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        // Get target rotations from Framer Motion
        targetRotationX = rotationX.get();
        targetRotationY = rotationY.get();

        // Smooth lerping for rotation
        const lerpFactor = 0.1; // Adjust this value (0.05-0.15) for different smoothness
        currentRotationX += (targetRotationX - currentRotationX) * lerpFactor;
        currentRotationY += (targetRotationY - currentRotationY) * lerpFactor;

        // Apply smoothed rotations
        model.rotation.x = currentRotationX;
        model.rotation.y = currentRotationY;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onDocumentMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [mouseX, mouseY, rotationX, rotationY]);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 pointer-events-none z-2">
        <TagsAnimation />
      </div>
    </div>
  );
}
