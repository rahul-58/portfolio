import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Users, Shield, Gamepad2, MessageSquare, Music, FileText, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "RAG PDF QA App with Local GGUF Model",
      description: "Retrieval-Augmented Generation (RAG) app for private, local PDF Q&A. Upload PDFs, ask questions, and get context-aware answers using a local LLM (.gguf via llama.cpp). No external APIs or cloud LLMs—full privacy.",
      technologies: ["Streamlit", "Sentence-Transformers (MiniLM)", "FAISS", "llama.cpp", "llama-cpp-python", "PyMuPDF"],
      link: "https://github.com/rahul-58/RAG-App-with-Local-GGUF-Model",
      icon: Brain,
      color: "from-orange-500 to-yellow-500",
      date: "July 2025"
    },
    {
      title: "SkillForge - Hackathon Collaboration Platform",
      description: "AI-powered platform that connects individuals based on complementary technical skills for hackathon team formation and project discovery.",
      technologies: ["Firebase", "Google Gemini API", "NLP", "React", "Node.js", "Real-time Messaging"],
      link: "https://github.com/rahul-58/SkillForge",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      date: "June 2025"
    },
    {
      title: "Intent Classification Chatbot System",
      description: "Sophisticated chatbot using DistilBERT for intent detection and Mistral 7B for response generation with 91.89% accuracy.",
      technologies: ["DistilBERT", "Mistral 7B", "Streamlit", "FastAPI", "LLMs", "Python"],
      link: "https://github.com/rahul-58/Intent-Classification-and-Response-Generation",
      icon: Brain,
      color: "from-pink-500 to-red-500",
      date: "May 2025"
    },
    {
      title: "Network Traffic Attack Detection Dashboard",
      description: "Real-time network traffic attack detection system using multiple ML models with interactive visualizations and majority voting.",
      technologies: ["Python", "Machine Learning", "Chart.js", "Web Development", "XGBoost", "SVM"],
      link: "https://github.com/rahul-58/DDoS_Detection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      date: "Apr 2025"
    },
    {
      title: "Quiz App - Full-Stack Web Application",
      description: "Complete web application with user authentication, quiz creation, and scoring system deployed on AWS with Docker and CI/CD.",
      technologies: ["Flask", "Python", "AWS", "Docker", "CircleCI", "SQLAlchemy", "Web Development"],
      link: "https://github.com/rahul-58/Quiz-App",
      icon: FileText,
      color: "from-yellow-500 to-orange-500",
      date: "Apr 2025"
    },
    {
      title: "Sentiment Analysis on Restaurant Reviews",
      description: "Advanced sentiment analysis comparing classical ML algorithms against BERT models, achieving 96.15% accuracy for restaurant review classification.",
      technologies: ["BERT", "Transformers", "NLP", "Machine Learning", "TF-IDF", "Python"],
      link: "https://github.com/rahul-58/Sentiment-Analysis-on-Restaurant-Reviews",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
      date: "Mar 2025"
    },
    {
      title: "Fake Review Detection System",
      description: "Machine learning system to detect fake reviews using linguistic and behavioral features with comprehensive preprocessing pipeline.",
      technologies: ["Machine Learning", "NLP", "XGBoost", "SVM", "Feature Engineering", "Python"],
      link: "https://github.com/rahul-58/Fake-Review-Detection",
      icon: Search,
      color: "from-purple-500 to-pink-500",
      date: "Mar 2025"
    },
    {
      title: "Emotion Classification from Sound Events",
      description: "Audio analysis system that classifies emotions from sound events using acoustic features like pitch, rhythm, and tonal characteristics.",
      technologies: ["Audio Processing", "Machine Learning", "XGBoost", "SMOTE", "Feature Engineering", "Python"],
      link: "https://github.com/rahul-58/Emotion-Classification",
      icon: Music,
      color: "from-indigo-500 to-purple-500",
      date: "Feb 2025"
    },
    {
      title: "Robot Navigation to Collect Treasures",
      description: "Interactive Treasure Hunt game featuring dynamic grid-based gameplay with pathfinding algorithms for optimal treasure collection.",
      technologies: ["Python", "Tkinter", "Algorithms", "Game Development", "Dijkstra's Algorithm", "GUI"],
      link: "https://github.com/rahul-58/Robot-Navigation-to-Collect-Treasures",
      icon: Gamepad2,
      color: "from-teal-500 to-green-500",
      date: "Dec 2024"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden dark-mode-transition">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave patterns */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary-100/20 via-purple-100/20 to-blue-100/20 dark:from-primary-900/20 dark:via-purple-900/20 dark:to-blue-900/20 transform -skew-y-6"
        />
        
        <motion.div
          animate={{
            x: [0, 50, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-primary-100/20 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-primary-900/20 transform skew-y-6"
        />

        {/* Floating code symbols */}
        {['<>', '{}', '[]', '()', '//'].map((symbol, i) => (
          <motion.div
            key={symbol}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-2xl text-primary-300/40 dark:text-primary-400/40 font-mono"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            } as React.CSSProperties}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-primary-200/20 to-purple-200/20 dark:from-primary-700/20 dark:to-purple-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative projects that demonstrate expertise in AI/ML, full-stack development, 
            cybersecurity, and cutting-edge technologies.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      <project.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </motion.a>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 text-sm sm:text-base"
                  >
                    View Project
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/rahul-58"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <Github size={20} />
              View More Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 