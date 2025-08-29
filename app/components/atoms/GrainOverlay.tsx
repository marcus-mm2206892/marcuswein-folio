import React from 'react'

interface GrainOverlayProps {
  className?: string
  opacity?: number
  zIndex?: number
}

export default function GrainOverlay({ 
  className = '', 
  opacity = 70, 
  zIndex = 100 
}: GrainOverlayProps) {
  return (
    <div 
      className={`overlay_grain ${className}`}
      style={{
        opacity: `${opacity}%`,
        zIndex: zIndex
      }}
    />
  )
}
