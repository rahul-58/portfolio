import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-6 h-6"
      >
        {isDarkMode ? (
          <Moon className="w-6 h-6 text-yellow-400" />
        ) : (
          <Sun className="w-6 h-6 text-orange-500" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? [1, 1.2, 1] : 0,
          opacity: isDarkMode ? [0.5, 0.8, 0.5] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-lg bg-yellow-400/20 blur-sm"
      />
    </motion.button>
  );
};

export default DarkModeToggle; 