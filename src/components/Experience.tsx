import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Capgemini",
      location: "Hyderabad, India",
      period: "Jun 2022 -- Aug 2024",
      link: "https://www.capgemini.com/in-en/",
      achievements: [
        "Developed and deployed technician workflows using Salesforce Field Service Mobile, reducing operational errors by 15% and enhancing data accuracy.",
        "Evaluated and implemented Resource Schedule Optimization (RSO) tools; delivered proof-of-concepts that shaped final architecture.",
        "Translated business requirements into technical specifications, improving feature adoption and resolving high-priority defects.",
        "Refactored Apex triggers and classes for bulk operations, cutting processing time by 20% and increasing test coverage from 60% to 90%.",
        "Redesigned Salesforce data models and integrated external systems, improving scalability and data integrity.",
        "Documented system architecture, development workflows, and feature changes in Confluence and optimized task tracking via JIRA, enhancing team collaboration."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Capgemini",
      location: "Hyderabad, India",
      period: "Feb 2022 -- Jun 2022",
      link: "https://www.capgemini.com/in-en/",
      achievements: [
        "Developed an end-to-end Salesforce solution for car manufacturing use case, automating processes across production, marketing, and delivery using Apex, LWC, SOQL, and custom data models.",
        "Enforced robust security using roles, profiles, and permission sets, ensuring scalable access control."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 dark-mode-transition">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg -translate-x-2"></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                          <a 
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                          >
                            {exp.company}
                            <ExternalLink size={14} />
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15%</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Error Reduction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">90%</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Test Coverage</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 