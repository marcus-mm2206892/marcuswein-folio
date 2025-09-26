"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AssetLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function AssetLoader({ children, fallback }: AssetLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const totalAssets = 9; // Critical assets count

  useEffect(() => {
    const criticalAssets = [
      "/assets/images/personal/marcuswein2.svg",
      "/assets/images/personal/marcusw2.svg",
      "/assets/images/svg/vectorhomescreen.svg",
      "/assets/images/personal/mwlogo.svg",
      "/assets/videos/caquvideo.mp4",
      "/assets/videos/campconnectvideo.mp4",
      "/assets/videos/unitrackvideo.mp4",
      "/assets/videos/makiravideo.mp4",
      "/assets/videos/siemensvideo.mp4",
    ];

    let loadedCount = 0;

    const checkAssetLoaded = () => {
      loadedCount++;
      setLoadedAssets(loadedCount);

      if (loadedCount >= totalAssets) {
        setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
      }
    };

    // Preload critical assets
    criticalAssets.forEach((asset) => {
      if (asset.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.muted = true;
        video.oncanplaythrough = checkAssetLoaded;
        video.onerror = checkAssetLoaded; // Count as loaded even if error
        video.src = asset;
      } else {
        const img = new Image();
        img.onload = checkAssetLoaded;
        img.onerror = checkAssetLoaded; // Count as loaded even if error
        img.src = asset;
      }
    });

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const defaultFallback = (
    <div className="fixed inset-0 bg-off-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-16 h-16 border-4 border-accent-green border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-gray-3 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading assets... {Math.round((loadedAssets / totalAssets) * 100)}%
        </motion.p>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {isLoading && (fallback || defaultFallback)}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
