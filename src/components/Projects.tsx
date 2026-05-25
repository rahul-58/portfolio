import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Brain,
  Users,
  Shield,
  Gamepad2,
  MessageSquare,
  Search,
  Database,
  Server,
  Network,
  ShoppingCart,
  PenLine,
  Sparkles,
  Layers,
  LucideIcon
} from 'lucide-react';

type ProjectCategory = 'All' | 'AI / LLM' | 'Full Stack' | 'Backend' | 'ML / NLP' | 'Systems';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  icon: LucideIcon;
  color: string;
  date: string;
  category: Exclude<ProjectCategory, 'All'>;
  featured?: boolean;
};

const filters: ProjectCategory[] = ['All', 'AI / LLM', 'Full Stack', 'Backend', 'ML / NLP', 'Systems'];

const projects: Project[] = [
  {
    title: 'CartSense',
    description:
      'Full-stack household grocery management app with shared inventory, shopping lists, receipt-confirmed purchases, household access flows, refill reminders, and purchase history.',
    technologies: ['React', 'TypeScript', 'Flask', 'SQLAlchemy', 'SQLite', 'OCR', 'Python'],
    link: 'https://github.com/rahul-58/CartSense',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-500',
    date: 'May 2026',
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'LLM Powered SQL Query Generator',
    description:
      'Text-to-SQL application that lets users ask questions in plain English, review generated SQL, validate safe queries, and inspect SQLite-backed results.',
    technologies: ['FastAPI', 'React', 'SQLite', 'Ollama', 'Python', 'JavaScript', 'SQL'],
    link: 'https://github.com/rahul-58/LLM-Powered-SQL-Generator',
    icon: Database,
    color: 'from-violet-500 to-purple-500',
    date: 'May 2026',
    category: 'AI / LLM',
    featured: true
  },
  {
    title: 'Collab Editor',
    description:
      'Collaborative document editor with creation, formatting, autosave, sharing, ownership, validation, durable file-backed persistence, and text/markdown import support.',
    technologies: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS', 'Railway', 'File Storage'],
    link: 'https://github.com/rahul-58/Collab-Editor',
    icon: PenLine,
    color: 'from-sky-500 to-blue-500',
    date: 'May 2026',
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'Fully Offline RAG for Multi-PDF Q&A',
    description:
      'Fully local RAG app for multi-PDF question answering with chunking, MiniLM embeddings, FAISS indexing, top-k retrieval, context assembly, and local llama.cpp generation.',
    technologies: ['Python', 'Streamlit', 'FAISS', 'MiniLM', 'llama.cpp', 'llama-cpp-python', 'PDF Processing'],
    link: 'https://github.com/rahul-58/Fully-Offline-RAG',
    icon: Brain,
    color: 'from-orange-500 to-yellow-500',
    date: 'Jun 2025',
    category: 'AI / LLM',
    featured: true
  },
  {
    title: 'Study Buddy',
    description:
      'Full-stack study platform with Discord-style study group collaboration, messaging, resource sharing, Dockerized setup, and dynamic quiz generation using Groq.',
    technologies: ['Django', 'JavaScript', 'Docker', 'Groq', 'HTML', 'CSS', 'SQLite'],
    link: 'https://github.com/rahul-58/Study-Buddy',
    icon: Users,
    color: 'from-indigo-500 to-cyan-500',
    date: 'Feb 2026',
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'SkillForge',
    description:
      'Hackathon team formation platform that matches participants by shared interests, goals, skills, and availability, with Gemini-powered skill extraction and match explanations.',
    technologies: ['React', 'Node.js', 'Firebase', 'Gemini API', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/rahul-58/SkillForge',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
    date: 'Jul 2025',
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'Python-Microservices Task Manager',
    description:
      'Microservices-based task manager with clear service boundaries, predictable REST API behavior, validation workflows, Dockerized services, and local integration testing support.',
    technologies: ['Python', 'Flask', 'Docker', 'REST APIs', 'Git', 'JSON', 'Microservices'],
    link: 'https://github.com/rahul-58/Python-MicroServices',
    icon: Server,
    color: 'from-slate-500 to-gray-700',
    date: 'Sep 2025',
    category: 'Backend'
  },
  {
    title: 'Python Socket Leader Election Process',
    description:
      'Distributed systems simulation that uses Python sockets and TCP/IP message passing to coordinate multiple processes and agree on a leader.',
    technologies: ['Python', 'Sockets', 'TCP/IP', 'Distributed Systems', 'Algorithms', 'Networking', 'CLI'],
    icon: Network,
    color: 'from-cyan-500 to-blue-600',
    date: 'Oct 2025',
    category: 'Systems'
  },
  {
    title: 'DDoS Detection',
    description:
      'Machine learning workflow for network attack detection with repeatable data preparation, feature engineering, comparative experiments, and validation across model variants.',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'SVM', 'Random Forest'],
    link: 'https://github.com/rahul-58/DDoS_Detection',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    date: 'Mar 2022',
    category: 'ML / NLP'
  },
  {
    title: 'Robot Navigation to Collect Treasures',
    description:
      'Interactive treasure collection game where a robot navigates a weighted grid using brute force and heuristic pathfinding approaches, including Dijkstra\'s algorithm.',
    technologies: ['Python', 'Tkinter', 'Dijkstra\'s Algorithm', 'Graph Algorithms', 'Pathfinding', 'GUI', 'Data Structures'],
    link: 'https://github.com/rahul-58/Robot-Navigation-to-Collect-Treasures',
    icon: Gamepad2,
    color: 'from-teal-500 to-green-500',
    date: 'Dec 2024',
    category: 'Systems'
  },
  {
    title: 'Intent Classification and Response Generation',
    description:
      'NLP project for classifying user intent from text inputs and generating responses based on the predicted category using preprocessing and classification workflows.',
    technologies: ['Python', 'NLP', 'scikit-learn', 'Pandas', 'NumPy', 'Text Preprocessing', 'Classification'],
    link: 'https://github.com/rahul-58/Intent-Classification-and-Response-Generation',
    icon: MessageSquare,
    color: 'from-pink-500 to-red-500',
    date: 'May 2025',
    category: 'ML / NLP'
  },
  {
    title: 'Sentiment Analysis on Restaurant Reviews',
    description:
      'Sentiment analysis workflow that classifies restaurant reviews as positive or negative using text preprocessing, feature preparation, and supervised classification.',
    technologies: ['Python', 'NLP', 'scikit-learn', 'Pandas', 'NumPy', 'Text Preprocessing', 'Classification'],
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    date: 'Mar 2025',
    category: 'ML / NLP'
  },
  {
    title: 'Fake Review Detection',
    description:
      'Text classification project for detecting potentially unreliable reviews using NLP preprocessing, feature engineering, classification outputs, and error-case analysis.',
    technologies: ['Python', 'NLP', 'scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Classification'],
    icon: Search,
    color: 'from-purple-500 to-pink-500',
    date: 'Mar 2025',
    category: 'ML / NLP'
  },
  {
    title: 'Emotion Classification',
    description:
      'NLP classification project that identifies emotions from text inputs using supervised learning workflows, feature preparation, model evaluation, and failure-case review.',
    technologies: ['Python', 'NLP', 'scikit-learn', 'Pandas', 'NumPy', 'Text Classification', 'Evaluation Metrics'],
    icon: Brain,
    color: 'from-fuchsia-500 to-purple-500',
    date: 'Feb 2025',
    category: 'ML / NLP'
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const projectStats = [
    { label: 'Projects', value: `${projects.length}+` },
    { label: 'Focus Areas', value: '5' },
    { label: 'Recent Builds', value: '2026' }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden dark-mode-transition">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-600/20" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-600/20" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent dark:via-primary-700/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/70 border border-primary-100 dark:border-gray-700 text-primary-700 dark:text-primary-300 text-sm font-semibold shadow-sm mb-4">
            <Layers size={16} />
            Selected work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A mix of AI, full-stack, backend, ML/NLP, and distributed-systems projects built with practical workflows, clear validation, and maintainable code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8"
        >
          {projectStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/80 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-700 p-4 text-center shadow-sm backdrop-blur">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-600/20'
                    : 'bg-white/80 dark:bg-gray-900/70 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-700 dark:hover:text-primary-300'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.25) }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.color}`} />
                <div className="p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.color} text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                        <project.icon size={22} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{project.date}</p>
                      </div>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        aria-label={`Open ${project.title} on GitHub`}
                      >
                        <Github size={22} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 7).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/70 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200 text-sm"
                      >
                        View Project
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium text-sm">
                        GitHub link not provided
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-14 sm:mt-16"
        >
          <div className="rounded-2xl p-6 sm:p-8 text-white bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.28),_transparent_35%)]" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Want to see the code?</h3>
              <p className="text-base sm:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Explore more repositories, experiments, and ongoing builds on GitHub.
              </p>
              <a
                href="https://github.com/rahul-58"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                <Github size={20} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
