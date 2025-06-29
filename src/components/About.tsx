import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      school: "San Jose State University",
      location: "San Jose, CA, US",
      period: "Aug 2024 -- Expected Jun 2026",
      link: "https://www.sjsu.edu/",
      coursework: [
        "Design and Analysis of Algorithms",
        "Topics in Artificial Intelligence", 
        "Topics in Machine Learning",
        "Natural Language Processing",
        "Topics in Cloud Computing"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "MLR Institute of Technology, India",
      location: "Hyderabad, India",
      period: "Jul 2018 -- Jun 2022",
      link: "https://mlrit.ac.in/",
      coursework: [
        "Data Structures", "DBMS", "OOP", "Operating Systems",
        "Computer Networks", "Data Mining", "Cloud Computing",
        "Big Data Analysis", "Machine Learning"
      ]
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 dark-mode-transition">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
              Professional Summary
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Results-driven software developer with strong expertise in AI/ML, Salesforce platform development, 
              and DevOps automation. Proven track record of optimizing system performance and delivering scalable 
              solutions across full-stack and cloud-native environments.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate about solving complex problems through clean code, collaboration, and data-driven innovation. 
              Currently pursuing my Master's in Computer Science at San Jose State University, focusing on advanced 
              AI/ML technologies and cloud computing.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4">
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                <MapPin size={18} className="sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">San Jose, CA, US</span>
              </div>
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                <Calendar size={18} className="sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary-600 dark:text-primary-400 sm:w-7 sm:h-7" size={24} />
              Education
            </h3>
            
            <div className="space-y-6 sm:space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 w-3 sm:w-4 h-3 sm:h-4 bg-primary-600 rounded-full -translate-x-1.5 sm:-translate-x-2"></div>
                  <div className="ml-4 sm:ml-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-primary-600">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {edu.degree}
                    </h4>
                    <a 
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mb-2 block text-sm sm:text-base"
                    >
                      {edu.school}
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Relevant Coursework:</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span 
                            key={courseIndex}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 