import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Settings, ExternalLink, Star, Code } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      category: "Salesforce",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      hoverColor: "hover:bg-green-100 dark:hover:bg-green-900/30",
      textColor: "text-green-700 dark:text-green-300",
      items: [
        {
          title: "Salesforce Associate",
          link: "https://www.salesforce.com/trailblazer/rahul58",
          description: "Platform Developer I"
        },
        {
          title: "Salesforce AI Associate",
          link: "https://www.salesforce.com/trailblazer/rahul58",
          description: "AI Fundamentals"
        },
        {
          title: "Trailhead Double Star Ranger",
          link: "https://www.salesforce.com/trailblazer/rahul58",
          description: "263 badges, 20 superbadges"
        }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      hoverColor: "hover:bg-orange-100 dark:hover:bg-orange-900/30",
      textColor: "text-orange-700 dark:text-orange-300",
      items: [
        {
          title: "AutoRABIT ARM Onboarding",
          link: "https://drive.google.com/file/d/15D90WlML2xCnvnHE8rGKAKY4i3P7Jt5m/view",
          description: "Release Management"
        },
        {
          title: "Copado Fundamentals I",
          link: "https://drive.google.com/file/d/1TBiOzN45bl9vFah1VJwCUrsnexhKT_h3/view",
          description: "DevOps Platform"
        },
        {
          title: "Copado Robotic Testing",
          link: "https://drive.google.com/file/d/1qLLAnUyMJF8DMdqeKe-lgTkf1gGhv6Go/view?usp=drive_link",
          description: "DevOps Platform"
        }
      ]
    },
    {
      category: "Programming",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      textColor: "text-blue-700 dark:text-blue-300",
      items: [
        {
          title: "Infosys Certified Software Programmer",
          link: "https://drive.google.com/file/d/1cwu1_4OHnUF61I6JmdSKIoy8whvq_m3_/view?usp=drive_link",
          description: "Software"
        }
      ]
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden dark-mode-transition">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating certificates */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute text-3xl text-primary-300/30 dark:text-primary-400/30"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 2) * 60}%`,
            } as React.CSSProperties}
          >
            <Award />
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-green-200/20 to-emerald-200/20 dark:from-green-700/20 dark:to-emerald-700/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-orange-200/20 to-red-200/20 dark:from-orange-700/20 dark:to-red-700/20 rounded-full blur-3xl"
        />

        {/* Geometric patterns */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-20 h-20 border-2 border-green-200/30 dark:border-green-700/30 transform rotate-45"
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
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6"></div>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that validate expertise in cloud platforms, 
            DevOps practices, and enterprise technologies.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{category.category}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.a
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                      viewport={{ once: true }}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-3 sm:p-4 ${category.bgColor} ${category.hoverColor} rounded-lg transition-all duration-200 group/item`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-semibold ${category.textColor} text-sm sm:text-base`}>{item.title}</h4>
                            {item.title.includes("Ranger") && (
                              <div className="flex gap-1">
                                <Star size={14} className="sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                                <Star size={14} className="sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                              </div>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                        <ExternalLink size={14} className="sm:w-4 sm:h-4 text-gray-400 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-300 transition-colors duration-200" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award size={32} className="text-yellow-300" />
              <h3 className="text-2xl font-bold">Trailhead Double Star Ranger</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Achieved the prestigious Double Star Ranger status on Salesforce Trailhead with 
              <span className="font-bold text-yellow-300"> 263 badges</span> and 
              <span className="font-bold text-yellow-300"> 20 superbadges</span>, demonstrating 
              exceptional expertise in the Salesforce ecosystem.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.salesforce.com/trailblazer/rahul58"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <ExternalLink size={20} />
              View Trailhead Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 