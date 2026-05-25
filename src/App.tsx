import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const backgroundParticles = [
  { left: '6%', top: '14%', delay: '0s', duration: '4s' },
  { left: '16%', top: '76%', delay: '0.4s', duration: '5s' },
  { left: '28%', top: '26%', delay: '0.8s', duration: '6s' },
  { left: '43%', top: '88%', delay: '1.2s', duration: '5.5s' },
  { left: '58%', top: '18%', delay: '1.6s', duration: '6.5s' },
  { left: '71%', top: '72%', delay: '2s', duration: '5.8s' },
  { left: '84%', top: '32%', delay: '2.4s', duration: '6.2s' },
  { left: '94%', top: '84%', delay: '2.8s', duration: '5.2s' }
];

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 relative dark-mode-transition text-gray-900 dark:text-gray-100">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/30 dark:from-primary-900/20 dark:via-transparent dark:to-purple-900/20" />
          {backgroundParticles.map((particle) => (
            <div
              key={`${particle.left}-${particle.top}`}
              className="absolute w-1.5 h-1.5 bg-primary-300/25 dark:bg-primary-400/25 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
