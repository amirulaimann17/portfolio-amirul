"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FlipCardProps {
  title: string;
  content: string;
}

export default function FlipCard({ title, content }: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-40 md:h-48 bg-gray-800 rounded-lg cursor-pointer overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {/* Static Title (Always Visible) */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
      </div>

      {/* Flippable Content (Shows on Hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg p-4 shadow-inner"
          >
            <p className="text-gray-300 text-lg md:text-xl text-center">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
