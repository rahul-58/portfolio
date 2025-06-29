import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "MySQL"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML",
      skills: ["Machine Learning", "Natural Language Processing", "Large Language Models"],
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Salesforce",
      skills: ["Apex", "Lightning Web Components", "Flows", "SOQL", "SOSL", "Aura"],
      icon: Cloud,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps/Cloud",
      skills: ["Docker", "CircleCI", "AWS", "AutoRABIT", "Bitbucket", "Copado"],
      icon: Database,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Frameworks/Tools",
      skills: ["GitHub", "JIRA", "Confluence", "SDLC", "Agile", "SCRUM"],
      icon: Cpu,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden dark-mode-transition">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-200/30 dark:border-primary-700/30 rounded-full"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-24 h-24 border-2 border-purple-200/30 dark:border-purple-700/30 transform rotate-45"
        />

        <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-blue-200/30 dark:border-blue-700/30 transform rotate-12"
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-primary-400/40 dark:bg-primary-500/40 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
            } as React.CSSProperties}
          />
        ))}

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/20 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-50/50 to-transparent dark:from-purple-900/20 dark:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technical skills and expertise as listed in my resume, covering programming languages, 
            AI/ML technologies, Salesforce platform development, and DevOps practices.
          </p>
        </motion.div>

        {/* Skills Grid with uniform sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02
              }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group`}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={20} className="sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">{category.title}</h3>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 opacity-10">
                <category.icon size={32} className="sm:w-10 sm:h-10 text-gray-400 dark:text-gray-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto px-4 sm:px-0">
              I'm constantly expanding my skill set through hands-on projects, online courses, and staying updated with the latest technologies in AI/ML, cybersecurity, and software development.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {["Problem Solving", "Critical Thinking", "Team Collaboration", "Adaptability", "Innovation"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 