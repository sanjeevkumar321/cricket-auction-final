import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

function ConfettiPopper({
  running = false,
  colors = ["#facc15", "#ffffff"],
  duration = null,
  onStop = () => {},
}) {
  const animationRef = useRef(null);
  const stopTimeout = useRef(null);

  const stopConfetti = () => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
    onStop();
  };

  const startConfetti = () => {
    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      animationRef.current = requestAnimationFrame(frame);
    };
    frame();

    if (duration) {
      stopTimeout.current = setTimeout(stopConfetti, duration);
    }
  };

  useEffect(() => {
    if (running) {
      startConfetti();
    } else {
      stopConfetti();
      clearTimeout(stopTimeout.current);
    }

    return () => {
      stopConfetti();
      clearTimeout(stopTimeout.current);
    };
  }, [running]);

  return null; // This component doesn't render anything visible
}

export default ConfettiPopper;
