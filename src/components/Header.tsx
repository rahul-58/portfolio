import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-gray-950/85 backdrop-blur-xl shadow-lg border-b border-gray-200/70 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100"
          >
            <span className="h-9 w-9 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white flex items-center justify-center shadow-md">
              R
            </span>
            <span className="hidden sm:inline gradient-text text-xl">Rahul</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 px-2 py-1.5 shadow-sm backdrop-blur">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/rahul-58"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 shadow-sm"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <DarkModeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="p-2 rounded-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 shadow-sm"
              aria-label="Toggle mobile navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl rounded-b-2xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-3 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
