"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

// SVG Components
const HeartSVG = ({ className = "", fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={fill}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const SparklesSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
  </svg>
);

const FloralSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M50 10 Q60 30 50 50 Q40 30 50 10" fill="rgba(255,182,193,0.3)" />
    <path d="M50 10 Q70 20 50 50 Q30 20 50 10" fill="rgba(255,182,193,0.2)" />
    <circle cx="50" cy="50" r="8" fill="rgba(255,105,180,0.5)" />
    <path d="M50 90 Q50 70 50 58" stroke="rgba(144,238,144,0.6)" strokeWidth="2" />
    <path d="M50 75 Q35 65 30 70" stroke="rgba(144,238,144,0.4)" strokeWidth="1.5" fill="none" />
    <path d="M50 80 Q65 70 70 75" stroke="rgba(144,238,144,0.4)" strokeWidth="1.5" fill="none" />
  </svg>
);

const EnvelopeSVG = () => (
  <svg viewBox="0 0 120 80" className="w-full h-full">
    <defs>
      <linearGradient id="envBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff5f5" />
        <stop offset="100%" stopColor="#ffe4e8" />
      </linearGradient>
      <linearGradient id="envFlap" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffb6c1" />
        <stop offset="100%" stopColor="#ff8fab" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#d4618c" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="5" y="15" width="110" height="60" rx="8" fill="url(#envBody)" filter="url(#shadow)" stroke="#ffb6c1" strokeWidth="1.5" />
    <path d="M5 20 L60 55 L115 20" fill="none" stroke="#ffc0cb" strokeWidth="1" opacity="0.5" />
  </svg>
);

const EnvelopeFlapSVG = () => (
  <svg viewBox="0 0 120 50" className="w-full h-auto" preserveAspectRatio="xMidYMin meet">
    <defs>
      <linearGradient id="flapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffc4d0" />
        <stop offset="50%" stopColor="#ffadc4" />
        <stop offset="100%" stopColor="#ff8fab" />
      </linearGradient>
    </defs>
    <path d="M5 0 L60 45 L115 0 Z" fill="url(#flapGrad)" stroke="#ffb6c1" strokeWidth="1" />
  </svg>
);

const LetterSVG = () => (
  <svg viewBox="0 0 90 60" className="w-full h-full">
    <defs>
      <linearGradient id="letterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fff8f8" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="86" height="56" rx="4" fill="url(#letterGrad)" stroke="#ffd6e0" strokeWidth="1" />
    <line x1="15" y1="18" x2="75" y2="18" stroke="#ffc0cb" strokeWidth="1.5" opacity="0.4" />
    <line x1="15" y1="28" x2="75" y2="28" stroke="#ffc0cb" strokeWidth="1.5" opacity="0.4" />
    <line x1="15" y1="38" x2="55" y2="38" stroke="#ffc0cb" strokeWidth="1.5" opacity="0.4" />
    <HeartSVG className="w-4 h-4" />
  </svg>
);

const CupidArrowSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className} fill="none">
    <path d="M5 20 L75 20" stroke="#d4a574" strokeWidth="2" />
    <path d="M75 20 L85 15 L85 25 Z" fill="#ff6b8a" />
    <path d="M85 20 L95 20" stroke="#ff6b8a" strokeWidth="2" />
    <path d="M5 20 L15 15 L15 25 Z" fill="#ffb6c1" stroke="#ff8fab" />
    <circle cx="10" cy="20" r="3" fill="#ff8fab" />
  </svg>
);

export default function Valentine() {
  const [stage, setStage] = useState<"envelope" | "message" | "celebration">("envelope");
  const [isOpening, setIsOpening] = useState(false);

  const envelopeRef = useRef<HTMLDivElement>(null);
  const envelopeWrapperRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const heartsContainerRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const celebrationRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);
  const floatingHeartsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const questionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bigHeartRef = useRef<HTMLDivElement>(null);

  // Ambient floating hearts in background
  useEffect(() => {
    if (stage === "envelope" && floatingHeartsRef.current) {
      const container = floatingHeartsRef.current;
      const interval = setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = `<svg viewBox="0 0 24 24" fill="rgba(255,182,193,0.4)" class="w-6 h-6"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        heart.className = "absolute pointer-events-none";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.bottom = "0";
        container.appendChild(heart);

        gsap.to(heart, {
          y: -window.innerHeight - 100,
          x: (Math.random() - 0.5) * 200,
          rotation: Math.random() * 360,
          opacity: 0,
          duration: 8 + Math.random() * 4,
          ease: "none",
          onComplete: () => heart.remove(),
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [stage]);

  // Sparkle animation on envelope
  useEffect(() => {
    if (stage === "envelope" && sparklesRef.current) {
      const sparkles = sparklesRef.current.querySelectorAll(".sparkle");
      sparkles.forEach((sparkle, i) => {
        gsap.to(sparkle, {
          scale: 1.5,
          opacity: 0.3,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
          ease: "power1.inOut",
        });
      });
    }
  }, [stage]);

  // Message screen animations
  useEffect(() => {
    if (stage === "message" && messageRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: -50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      );

      paragraphsRef.current.forEach((p, i) => {
        if (p) {
          tl.fromTo(
            p,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            `-=0.3`
          );
        }
      });

      tl.fromTo(
        questionRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
        "-=0.2"
      );

      tl.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    }
  }, [stage]);

  // Celebration animations
  useEffect(() => {
    if (stage === "celebration" && celebrationRef.current) {
      createConfetti();
      createCelebrationHearts();

      gsap.fromTo(
        bigHeartRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, [stage]);

  const createHeart = () => {
    if (!heartsContainerRef.current) return;

    const colors = ["#ff6b8a", "#ff8fab", "#ffb6c1", "#ffc0cb", "#ff69b4", "#ff1493"];
    const heart = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    heart.innerHTML = `<svg viewBox="0 0 24 24" fill="${color}" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));" class="w-full h-full"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    heart.className = "floating-heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.width = `${25 + Math.random() * 35}px`;
    heart.style.height = heart.style.width;
    heartsContainerRef.current.appendChild(heart);

    gsap.fromTo(
      heart,
      { y: "100vh", opacity: 1, rotationY: 0, rotationX: 0, scale: 0.5 },
      {
        y: "-20vh",
        opacity: 0,
        rotationY: 360,
        rotationX: 360,
        scale: 1.2,
        duration: 3 + Math.random() * 2,
        ease: "power1.out",
        onComplete: () => heart.remove(),
      }
    );
  };

  const createSparkle = () => {
    if (!heartsContainerRef.current) return;

    const sparkle = document.createElement("div");
    sparkle.innerHTML = `<svg viewBox="0 0 24 24" fill="#ffd700" class="w-full h-full"><path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/></svg>`;
    sparkle.className = "absolute pointer-events-none";
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.width = `${10 + Math.random() * 15}px`;
    heartsContainerRef.current.appendChild(sparkle);

    gsap.fromTo(
      sparkle,
      { scale: 0, rotation: 0, opacity: 1 },
      {
        scale: 1.5,
        rotation: 180,
        opacity: 0,
        duration: 1 + Math.random(),
        ease: "power2.out",
        onComplete: () => sparkle.remove(),
      }
    );
  };

  const createHeartBurst = () => {
    for (let i = 0; i < 50; i++) {
      setTimeout(createHeart, i * 60);
    }
    for (let i = 0; i < 30; i++) {
      setTimeout(createSparkle, i * 100);
    }
  };

  const createConfetti = () => {
    if (!celebrationRef.current) return;

    const colors = ["#ff6b95", "#ffd700", "#ff69b4", "#87ceeb", "#98fb98", "#dda0dd", "#ff9a9e", "#ffb6c1"];
    const shapes = ["circle", "square", "heart"];

    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement("div");
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      if (shape === "heart") {
        confetti.innerHTML = `<svg viewBox="0 0 24 24" fill="${color}" class="w-3 h-3"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
      } else {
        confetti.className = "confetti";
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = shape === "circle" ? "50%" : "2px";
      }

      confetti.style.position = "absolute";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.pointerEvents = "none";
      celebrationRef.current.appendChild(confetti);

      gsap.fromTo(
        confetti,
        { y: -20, rotation: 0, opacity: 1 },
        {
          y: "100vh",
          rotation: 720 * (Math.random() > 0.5 ? 1 : -1),
          opacity: 0,
          duration: 4 + Math.random() * 3,
          delay: Math.random() * 2,
          ease: "power1.in",
          repeat: -1,
        }
      );
    }
  };

  const createCelebrationHearts = () => {
    if (!celebrationRef.current) return;

    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerHTML = `<svg viewBox="0 0 24 24" fill="#ff6b8a" class="w-8 h-8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
      heart.className = "absolute pointer-events-none";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.bottom = "0";
      celebrationRef.current?.appendChild(heart);

      gsap.to(heart, {
        y: -window.innerHeight,
        x: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 180 - 90,
        opacity: 0,
        duration: 5,
        ease: "power1.out",
        onComplete: () => heart.remove(),
      });
    }, 300);

    return () => clearInterval(interval);
  };

  const handleEnvelopeClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    const tl = gsap.timeline();

    // Envelope shake
    if (envelopeWrapperRef.current) {
      tl.to(envelopeWrapperRef.current, {
        rotation: 3,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Seal burst
    tl.to(sealRef.current, {
      scale: 1.5,
      duration: 0.2,
      ease: "power2.out",
    });
    tl.to(sealRef.current, {
      scale: 0,
      opacity: 0,
      rotation: 180,
      duration: 0.4,
      ease: "back.in(2)",
    });

    // Open flap with 3D rotation
    tl.to(flapRef.current, {
      rotationX: 180,
      duration: 1,
      ease: "power2.inOut",
    });

    // Letter rises with slight wobble
    tl.to(
      letterRef.current,
      {
        y: -160,
        rotation: 2,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    tl.to(
      letterRef.current,
      {
        rotation: 0,
        duration: 0.3,
      },
      "-=0.3"
    );

    // Heart burst
    tl.call(createHeartBurst, [], "-=0.5");

    // Fade out
    tl.to(
      envelopeRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.8,
        delay: 2.5,
        ease: "power2.in",
        onComplete: () => setStage("message"),
      }
    );
  };

  const handleYes = () => {
    // Explode hearts from button
    for (let i = 0; i < 20; i++) {
      setTimeout(createHeart, i * 50);
    }

    gsap.to(messageRef.current, {
      opacity: 0,
      scale: 0.9,
      y: -30,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => setStage("celebration"),
    });
  };

  const handleNoHover = () => {
    if (!noButtonRef.current) return;

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    gsap.to(noButtonRef.current, {
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
      rotation: Math.random() * 20 - 10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 overflow-hidden relative">
      {/* Decorative Background SVGs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloralSVG className="absolute top-10 left-10 w-20 h-20 text-pink-200 opacity-40 animate-float" />
        <FloralSVG className="absolute top-20 right-20 w-16 h-16 text-pink-200 opacity-30 animate-float-delayed" />
        <FloralSVG className="absolute bottom-20 left-20 w-24 h-24 text-pink-200 opacity-30 animate-float" />
        <FloralSVG className="absolute bottom-10 right-10 w-20 h-20 text-pink-200 opacity-40 animate-float-delayed" />
        <CupidArrowSVG className="absolute top-1/4 -left-10 w-32 opacity-20 animate-float" />
        <CupidArrowSVG className="absolute bottom-1/4 -right-10 w-32 opacity-20 rotate-180 animate-float-delayed" />
      </div>

      {/* Floating Hearts Background */}
      <div ref={floatingHeartsRef} className="fixed inset-0 pointer-events-none overflow-hidden" />

      {/* Hearts Container for Burst Effects */}
      <div ref={heartsContainerRef} className="fixed inset-0 pointer-events-none z-50" />

      {/* Envelope Screen */}
      {stage === "envelope" && (
        <div ref={envelopeRef} className="min-h-screen flex flex-col items-center justify-center relative z-10">
          <p className="font-vibes text-rose-400 text-3xl mb-8 animate-pulse drop-shadow-sm">
            ✨ Tap to open ✨
          </p>

          <div ref={envelopeWrapperRef} className="envelope-wrapper relative" onClick={handleEnvelopeClick}>
            {/* Sparkles around envelope */}
            <div ref={sparklesRef} className="absolute inset-0 -m-8">
              <SparklesSVG className="sparkle absolute -top-4 -left-4 w-6 h-6 text-yellow-300" />
              <SparklesSVG className="sparkle absolute -top-2 -right-6 w-5 h-5 text-yellow-200" />
              <SparklesSVG className="sparkle absolute -bottom-4 -left-6 w-5 h-5 text-yellow-200" />
              <SparklesSVG className="sparkle absolute -bottom-2 -right-4 w-6 h-6 text-yellow-300" />
              <SparklesSVG className="sparkle absolute top-1/2 -left-8 w-4 h-4 text-yellow-100" />
              <SparklesSVG className="sparkle absolute top-1/2 -right-8 w-4 h-4 text-yellow-100" />
            </div>

            <div className="envelope-container relative w-80 h-52 cursor-pointer transform hover:scale-105 transition-transform duration-300">
              {/* Envelope SVG Body */}
              <div className="absolute inset-0">
                <EnvelopeSVG />
              </div>

              {/* Letter inside */}
              <div
                ref={letterRef}
                className="absolute bottom-5 left-6 right-6 h-36 flex items-center justify-center"
              >
                <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4 border border-pink-100">
                  <HeartSVG className="w-8 h-8 text-rose-300 mb-2" fill="#fda4af" />
                  <span className="font-dancing text-rose-400 text-lg">A message awaits...</span>
                </div>
              </div>

              {/* Envelope Flap SVG */}
              <div
                ref={flapRef}
                className="envelope-flap absolute top-3 left-1 right-1 z-10 origin-top"
                style={{ transformStyle: "preserve-3d" }}
              >
                <EnvelopeFlapSVG />
              </div>

              {/* Heart Seal */}
              <div ref={sealRef} className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <HeartSVG className="w-14 h-14 text-rose-400 drop-shadow-lg animate-heartbeat" fill="#fb7185" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">LOVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Screen */}
      {stage === "message" && (
        <div ref={messageRef} className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
          {/* Decorative hearts */}
          <HeartSVG className="absolute top-10 left-10 w-12 h-12 text-rose-200 opacity-50 animate-float" />
          <HeartSVG className="absolute top-20 right-16 w-8 h-8 text-pink-200 opacity-40 animate-float-delayed" />
          <HeartSVG className="absolute bottom-20 left-16 w-10 h-10 text-rose-200 opacity-40 animate-float" />
          <HeartSVG className="absolute bottom-10 right-10 w-14 h-14 text-pink-200 opacity-50 animate-float-delayed" />

          <div className="max-w-lg text-center">
            <h1
              ref={titleRef}
              className="font-vibes text-5xl md:text-6xl text-rose-500 mb-10 drop-shadow-sm"
            >
              Hey Beautiful
            </h1>

            <div className="space-y-6 font-playfair text-rose-700 text-lg md:text-xl leading-relaxed mb-10">
              <p ref={(el) => { paragraphsRef.current[0] = el; }}>
                Every moment with you feels like a beautiful dream I never want to wake up from.
              </p>
              <p ref={(el) => { paragraphsRef.current[1] = el; }}>
                You make my heart skip a beat, and my world brighter just by being you.
              </p>
              <p ref={(el) => { paragraphsRef.current[2] = el; }}>
                I&apos;m so grateful for every laugh, every hug, and every memory we&apos;ve created together.
              </p>
            </div>

            <p ref={questionRef} className="font-vibes text-3xl md:text-4xl text-rose-500 mb-12">
              Hi, babe, will you be my Val?
              <HeartSVG className="inline-block w-8 h-8 ml-2 text-rose-400" fill="#fb7185" />
            </p>

            <div ref={buttonsRef} className="flex gap-6 justify-center items-center flex-wrap">
              <button
                onClick={handleYes}
                className="group relative px-14 py-5 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white text-xl font-dancing font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Yes!
                  <HeartSVG className="w-6 h-6 group-hover:scale-125 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="px-14 py-5 bg-gray-100 text-gray-300 text-xl font-dancing rounded-full transition-all duration-300 border-2 border-gray-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Celebration Screen */}
      {stage === "celebration" && (
        <div
          ref={celebrationRef}
          className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10 overflow-hidden"
        >
          <h1 className="font-vibes text-6xl md:text-7xl text-rose-500 mb-8 animate-bounce drop-shadow-lg">
            Yaaay! 🎉
          </h1>

          <div ref={bigHeartRef} className="relative mb-8">
            <HeartSVG className="w-40 h-40 md:w-52 md:h-52 text-rose-400 drop-shadow-2xl" fill="url(#heartGradient)" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b8a" />
                  <stop offset="50%" stopColor="#ff8fab" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
              </defs>
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="url(#heartGradient)"
                className="animate-heartbeat"
              />
            </svg>
          </div>

          <p className="font-playfair text-2xl md:text-3xl text-rose-600 text-center mb-6 drop-shadow-sm">
            You just made me the happiest person ever!
          </p>

          <p className="font-vibes text-3xl text-rose-500 flex items-center gap-3">
            I love you so much!
            <HeartSVG className="w-8 h-8 animate-heartbeat" fill="#fb7185" />
          </p>
        </div>
      )}
    </main>
  );
}
