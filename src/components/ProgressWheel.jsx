import React, { useEffect, useRef, useState } from "react";
import { scroll } from "framer-motion";

const ProgressWheel = () => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scroll((progress) => {
      const circle = progressRef.current;
      if (!circle) {
        return;
      }

      const dasharray = progress * 100;
      circle.style.strokeDasharray = `${dasharray} ${100 - dasharray}`;
      circle.style.strokeDashoffset = String(100 - dasharray);
      setIsVisible(progress > 0);
    });

    return () => unsubscribe();
  }, []);

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      className="progress-wheel"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="30" pathLength="100" className="bg" />
      <circle
        cx="50"
        cy="50"
        r="30"
        pathLength="100"
        ref={progressRef}
        className="progress"
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
};

export default ProgressWheel;
