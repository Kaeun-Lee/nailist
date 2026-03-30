"use client";
import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  children?: React.ReactNode
  title?: string
  highlightText?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  buttonClassName?: string
  maxWidth?: string
  veilOpacity?: string
}

export function HeroSection({
  children,
  title,
  highlightText,
  description,
  buttonText,
  onButtonClick,
  colors = ["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-white/20 dark:bg-black/25",
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])


  return (
    <section className={`relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center ${className}`}>
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>

      <div className={`relative z-10 w-full ${children ? '' : `${maxWidth} mx-auto px-6`}`}>
        {children ? (
          children
        ) : (
          <div className="text-center">
            <h1
              className={`font-bold text-foreground text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none mb-6 ${titleClassName}`}
            >
              {title} <span className="text-primary">{highlightText}</span>
            </h1>
            <p className={`text-lg sm:text-xl text-white text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}>
              {description}
            </p>
            <button
              onClick={onButtonClick}
              className={`min-w-[160px] sm:min-w-[200px] px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full border-4 border-neutral-700 bg-neutral-800 text-base sm:text-lg font-semibold text-white hover:bg-neutral-900 transition-colors ${buttonClassName}`}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
