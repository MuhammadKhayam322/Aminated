// SkillButton.tsx

"use client";
import React from 'react';
import { motion } from 'framer-motion';

// ✅ Fix: Define it BEFORE using it
function getAnimation(type: string) {
  switch (type) {
    case 'slideLeft':
      return {
        initial: { opacity: 0, x: -40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
      };
    case 'slideRight':
      return {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
      };
    case 'zoom':
      return {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.6 }
      };
    case 'flip':
      return {
        initial: { opacity: 0, rotateY: -180 },
        animate: { opacity: 1, rotateY: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
      };
    default: // fade
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6 }
      };
  }
}

// 👇 Component that uses getAnimation
type SkillButtonProps = {
  label: string;
  animationType?: 'fade' | 'slideLeft' | 'slideRight' | 'zoom' | 'flip';
  onClick?: () => void;
};

const SkillButton: React.FC<SkillButtonProps> = ({ label, animationType = 'fade', onClick }) => {
  const { initial, animate, transition } = getAnimation(animationType);

  return (
    <motion.button
      initial={initial}
      animate={animate}
      transition={transition}
      onClick={onClick}
      whileHover={{ scale: 1.05, borderColor: '#FFD700' }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-black text-white border border-white rounded-sm px-4 py-4"
      style={{ fontFamily: 'Comic Sans MS' }}
    >
      <motion.h1
       
        transition={{ duration: 0.3 }}
        className="text-white"
      >
        {label}
      </motion.h1>
    </motion.button>
  );
};

export default SkillButton;


// keep getAnimation function as-is...





