"use client";

import { useState, useEffect } from "react";
import Beams from "../components/Beams";
import LiquidEther from "../components/LiquidEther";
import ShinyText from "../components/ShinyText";
import RotatingText from "../components/RotatingText";
import TargetCursor from "../components/TargetCursor";

export default function Home() {
  const [currentReality, setCurrentReality] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const realities = [
    "exordium", // Your current hero
    "void", // Pure darkness with minimal text
    "umbra", // Data-like flowing content
    "nexus", // Final revelation
  ];

  // Removed keyboard navigation - now using buttons

  const navigateReality = (direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReality((prev) => {
        const next = prev + direction;
        if (next < 0) return realities.length - 1;
        if (next >= realities.length) return 0;
        return next;
      });
      setTimeout(() => setIsTransitioning(false), 500);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      {/* Transition Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Reality Indicator */}
      {/* <div className="fixed bottom-4 right-4 text-gray-600 text-sm font-mono z-40">
        {realities[currentReality].toUpperCase()}
      </div> */}

      {/* Reality: Exordium */}
      {currentReality === 0 && (
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Beams Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Beams
              beamWidth={3}
              beamHeight={30}
              beamNumber={20}
              lightColor="#71717a"
              speed={2}
              noiseIntensity={2}
              scale={0.2}
              rotation={30}
            />
          </div>

          {/* LiquidEther Over Beams */}
          {/* <div className="absolute inset-0 w-full h-full z-5 opacity-25">
            <LiquidEther
              colors={["#18181b", "#27272a", "#d4d4d8"]}
              mouseForce={20}
              cursorSize={100}
              isViscous={true}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={0}
              autoRampDuration={0.6}
            />
          </div> */}

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pointer-events-none select-none min-h-screen py-8 sm:py-12">
            {/* Welcome Message */}
            <div className="flex items-center justify-center">
              <h1 className="text-lg sm:text-xl md:text-2xl font-thin tracking-wider font-orbitron mb-4 sm:mb-8 text-white mr-2">
                welcome to
              </h1>
              <ShinyText
                text="XenStudios"
                disabled={false}
                speed={3}
                className="text-lg sm:text-xl md:text-2xl font-thin tracking-wider font-orbitron mb-4 sm:mb-8"
              />
            </div>

            {/* Xen Logo */}
            <div className="mb-4 sm:mb-6 pointer-events-none select-none">
              <img
                src="/images/xen-logo.svg"
                alt="Xen Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-2xl"
              />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl text-zinc-300 mx-auto font-smooch-sans font-light flex items-center justify-center transition-all duration-300 pointer-events-none select-none mb-8 sm:mb-12 md:mb-16 lowercase px-4">
              <span className="mr-1">Where Reality </span>
              <RotatingText
                texts={["bends", "fractures", "dissolves", "transcends"]}
                mainClassName="inline text-zinc-300 font-smooch-sans font-light text-lg sm:text-xl md:text-2xl"
                splitBy="none"
                initial={{ y: "20%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-20%", opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>

            {/* Path Selection */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 pointer-events-auto px-4">
              {/* Choose your path text */}
              <p className="text-white font-orbitron text-xs sm:text-sm tracking-wide">
                choose your path
              </p>

              {/* Buttons and divider container */}
              <div className="flex flex-col sm:flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-2 w-full max-w-md md:max-w-none">
                <button
                  onClick={() => setCurrentReality(1)}
                  className="cursor-target w-full sm:w-auto px-4 sm:px-6 py-3 font-bold font-orbitron rounded-2xl tracking-wider transition-all duration-300 bg-gradient-to-br from-white/80 via-white/70 to-white/80 backdrop-blur-md border border-white/80 text-black hover:bg-white hover:border-white hover:text-black hover:scale-[1.02] shine-button hover:cursor-none shadow-[0_0_8px_rgba(255,255,255,0.2)] sm:shadow-[0_0_15px_rgba(255,255,255,0.25)] md:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] sm:hover:shadow-[0_0_60px_rgba(255,255,255,0.9)] md:hover:shadow-[0_0_100px_rgba(255,255,255,1)] text-sm sm:text-base"
                >
                  XenStudios
                  <p className="text-xs font-inter text-zinc-700 mt-1">
                    Design Studio & Creative Services
                  </p>
                </button>

                {/* Horizontal Divider with Text */}
                <div className="flex items-center gap-2 sm:gap-4 w-full md:w-auto justify-center">
                  <div className="bg-black w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <span className="text-white/60 font-orbitron text-xs sm:text-sm tracking-wider">
                    or
                  </span>
                  <div className="bg-black w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                <button
                  onClick={() => setCurrentReality(3)}
                  className="cursor-target w-full sm:w-auto px-4 sm:px-6 py-3 font-orbitron rounded-2xl tracking-wider transition-all duration-300 bg-gradient-to-br from-black/30 via-black/20 to-black/30 backdrop-blur-md border border-zinc-500/40 text-zinc-300 hover:bg-black hover:border-black hover:text-white hover:scale-[1.02] shine-button hover:cursor-none shadow-[0_0_6px_rgba(255,255,255,0.15)] sm:shadow-[0_0_12px_rgba(255,255,255,0.18)] md:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] sm:hover:shadow-[0_0_50px_rgba(255,255,255,0.7)] md:hover:shadow-[0_0_80px_rgba(255,255,255,0.8)] text-sm sm:text-base"
                >
                  XenUsers
                  <p className="text-xs font-inter text-zinc-400 mt-1">
                    Premium Usernames & Numbers
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      {/* <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex gap-3 pointer-events-auto">
          <button
            onClick={() => setCurrentReality(0)}
            className="px-3 py-2 font-orbitron text-xs tracking-wider transition-all duration-300 bg-transparent text-zinc-300 hover:cursor-pointer shine-button hover:scale-[1.02] lowercase"
          >
            EXORDIUM
          </button>
          <button
            onClick={() => setCurrentReality(1)}
            className="px-3 py-2 font-orbitron text-xs tracking-wider transition-all duration-300 bg-transparent text-zinc-300 hover:cursor-pointer shine-button hover:scale-[1.02] lowercase"
          >
            VOID
          </button>
          <button
            onClick={() => setCurrentReality(2)}
            className="px-3 py-2 font-orbitron text-xs tracking-wider transition-all duration-300 bg-transparent text-zinc-300 hover:cursor-pointer shine-button hover:scale-[1.02] lowercase"
          >
            UMBRA
          </button>
          <button
            onClick={() => setCurrentReality(3)}
            className="px-3 py-2 font-orbitron text-xs tracking-wider transition-all duration-300 bg-transparent text-zinc-300 hover:cursor-pointer shine-button hover:scale-[1.02] lowercase"
          >
            NEXUS
          </button>
        </div>
      </div> */}
    </div>
  );
}
