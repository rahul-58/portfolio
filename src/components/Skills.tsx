import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Cpu, Wrench, LucideIcon } from 'lucide-react';

type SkillCategory = {
  title: string;
  skills: string[];
  icon: LucideIcon;
  color: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C', 'HTML/CSS'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI / ML',
    skills: ['Machine Learning', 'NLP', 'LLM Evaluation', 'RAG', 'FAISS', 'MiniLM', 'scikit-learn'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Backend / Full Stack',
    skills: ['FastAPI', 'Flask', 'Django', 'Node.js', 'Express', 'React', 'REST APIs'],
    icon: Database,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Data & Databases',
    skills: ['SQLite', 'MySQL', 'SQLAlchemy', 'Pandas', 'NumPy', 'Data Validation'],
    icon: Cpu,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Salesforce',
    skills: ['Apex', 'LWC', 'Flows', 'SOQL', 'SOSL', 'Aura', 'Field Service'],
    icon: Cloud,
    color: 'from-sky-500 to-blue-500'
  },
  {
    title: 'Tools & DevOps',
    skills: ['Docker', 'GitHub', 'GitHub Copilot', 'Bitbucket', 'JIRA', 'AutoRABIT', 'Copado'],
    icon: Wrench,
    color: 'from-orange-500 to-red-500'
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden dark-mode-transition">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-200/30 dark:border-primary-700/30 rounded-full" />
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-purple-200/30 dark:border-purple-700/30 rotate-45" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-blue-200/30 dark:border-blue-700/30 rotate-12" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/20 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-50/50 to-transparent dark:from-purple-900/20 dark:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4 border border-primary-100 dark:border-primary-800">
            <Code size={16} />
            Technical toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Skills shaped through research workflows, enterprise software development, backend integrations, and hands-on product projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${category.color}`} />
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <category.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <category.icon size={88} className="text-gray-900 dark:text-gray-100" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8 border border-primary-100/70 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              How I build
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-5 max-w-3xl mx-auto">
              I focus on practical systems that are easy to run, test, debug, and explain, from local RAG apps to full-stack tools and backend services.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['Validation-first', 'User-focused', 'Readable code', 'Reproducible experiments', 'Clear handoffs'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
