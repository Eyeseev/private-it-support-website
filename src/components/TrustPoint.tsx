'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TrustPointProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function TrustPoint({ icon, children }: TrustPointProps) {
  return (
    <li className="flex items-start transition-all duration-200 hover:translate-x-1">
      <motion.div
        className="text-blue-700 h-7 w-7 mr-4 flex-shrink-0"
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        whileFocus={{ scale: 1.15 }}
        tabIndex={-1}
      >
        {icon}
      </motion.div>
      <span>{children}</span>
    </li>
  );
} 