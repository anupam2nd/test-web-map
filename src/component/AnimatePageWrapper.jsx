import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatePageWrapper({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = "0";
      ref.current.style.transform = "translateX(20px)";
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
