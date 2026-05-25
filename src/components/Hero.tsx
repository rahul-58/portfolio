import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Code, ArrowRight, Sparkles } from 'lucide-react';

const floatingDots = [
  { left: '8%', top: '20%', delay: 0 },
  { left: '18%', top: '72%', delay: 0.3 },
  { left: '32%', top: '14%', delay: 0.6 },
  { left: '47%', top: '82%', delay: 0.9 },
  { left: '62%', top: '18%', delay: 1.2 },
  { left: '78%', top: '70%', delay: 1.5 },
  { left: '88%', top: '30%', delay: 1.8 }
];

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const resumeLink = 'https://drive.google.com/file/d/1NiE6uPJlG24GTAGyV7YtfyU25ZRHjPcH/view?usp=sharing';
    window.open(resumeLink, '_blank');
  };

  const highlights = ['AI/ML', 'Backend APIs', 'Full-Stack Apps', 'RAG Evaluation'];
  const stats = [
    { value: '14+', label: 'Projects' },
    { value: '2+', label: 'Years Experience' },
    { value: 'MS CS', label: 'SJSU' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 pb-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-44 -right-32 w-[28rem] h-[28rem] bg-gradient-to-br from-primary-400/35 via-purple-400/25 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 0.95, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-44 -left-32 w-[30rem] h-[30rem] bg-gradient-to-tr from-blue-400/35 via-indigo-400/25 to-cyan-400/20 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_38%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:44px_44px]" />
        {floatingDots.map((dot, index) => (
          <motion.div
            key={`${dot.left}-${dot.top}`}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.65, 0.2], scale: [1, 1.25, 1] }}
            transition={{ duration: 4 + index * 0.25, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
            className="absolute w-2 h-2 bg-primary-400/50 dark:bg-primary-300/50 rounded-full"
            style={{ left: dot.left, top: dot.top }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center lg:justify-start order-1 lg:order-none"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 opacity-70 blur-sm"
              />
              <div className="relative rounded-[2rem] overflow-hidden w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-4 border-white dark:border-gray-800 shadow-2xl bg-white dark:bg-gray-900">
                <img
                  src="/Rahul.jpg"
                  alt="Rahul Reddy Gangapuram"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'auto', objectPosition: 'center 30%' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 shadow-xl px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
                  <Sparkles size={16} className="text-primary-600 dark:text-primary-400" />
                  Building AI + Web apps
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/70 border border-primary-100 dark:border-gray-700 text-primary-700 dark:text-primary-300 text-sm font-semibold shadow-sm mb-5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Available for Software Engineering opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 dark:from-primary-400 dark:via-purple-400 dark:to-primary-400 bg-clip-text text-transparent">
                Rahul Reddy
              </span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">Gangapuram</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-4 font-semibold">
              Software Developer | AI, Backend & Full-Stack
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
              MS Computer Science student at San Jose State University with experience building LLM evaluation workflows, backend integrations, REST APIs, and user-facing applications.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {highlights.map((highlight) => (
                <span key={highlight} className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm">
                  {highlight}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/80 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-700 p-3 sm:p-4 shadow-sm backdrop-blur">
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToProjects}
                className="flex items-center gap-2 bg-primary-600 text-white px-6 sm:px-7 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                View Projects
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToContact}
                className="flex items-center gap-2 bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 px-6 sm:px-7 py-3 rounded-xl font-semibold hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Mail size={18} />
                Contact Me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleResumeDownload}
                className="flex items-center gap-2 border border-primary-600 text-primary-600 dark:text-primary-400 px-6 sm:px-7 py-3 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Download size={18} />
                Resume
              </motion.button>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/rahul-58"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-reddy-gangapuram/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://leetcode.com/u/Rahul_Reddy_58/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                aria-label="LeetCode"
              >
                <Code size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
