import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase, FlaskConical, Code2, CheckCircle2, LucideIcon } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  link: string;
  icon: LucideIcon;
  accent: string;
  tags: string[];
  achievements: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Graduate Research Assistant',
    company: 'San Jose State University',
    location: 'San Jose, CA',
    period: 'Aug 2025 -- Present',
    link: 'https://www.sjsu.edu/',
    icon: FlaskConical,
    accent: 'from-purple-500 to-indigo-500',
    tags: ['LLM Evaluation', 'RAG Experiments', 'Python', 'Reproducibility'],
    achievements: [
      'Built Python workflows for LLM and ML experiments, logging prompts, context, settings, outputs, and evaluation results for reproducibility.',
      'Developed evaluation pipelines to assess robustness, consistency, and response drift under controlled input and retrieval variations.',
      'Created validation checks, batch runs, and structured artifacts to make experiment results easier to review, compare, and debug.',
      'Integrated BLEU, perplexity, retrieval signals, and LLM-as-a-judge evaluation to analyze output quality across lexical and semantic dimensions.',
      'Documented assumptions, limitations, and failure modes to support repeatable analysis and clearer technical review.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Capgemini',
    location: 'Hyderabad, India',
    period: 'Jun 2022 -- Aug 2024',
    link: 'https://www.capgemini.com/in-en/',
    icon: Briefcase,
    accent: 'from-primary-500 to-cyan-500',
    tags: ['REST APIs', 'Backend Workflows', 'SQL', 'Release Support'],
    achievements: [
      'Built and maintained enterprise software solutions in Agile teams, translating business requirements into reliable backend features and workflow updates.',
      'Developed and supported RESTful APIs and backend workflows, adding validation checks, safer retries, clearer error handling, and structured logging.',
      'Used SQL reconciliation queries and data checks to investigate issues, validate outputs, explain discrepancies, and support releases.',
      'Reproduced failures from logs and payloads, shipped targeted fixes, and supported QA and stakeholders through testing and release activities.',
      'Wrote documentation and support notes to make recurring issues easier to troubleshoot, maintain, and hand off across teams.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Capgemini',
    location: 'Hyderabad, India',
    period: 'Feb 2022 -- Jun 2022',
    link: 'https://www.capgemini.com/in-en/',
    icon: Code2,
    accent: 'from-emerald-500 to-teal-500',
    tags: ['Debugging', 'Testing', 'Documentation', 'Team Reviews'],
    achievements: [
      'Assisted with implementing software changes and validating functionality against requirements, building a strong foundation in debugging and collaborative software development.',
      'Supported testing, issue investigation, and documentation tasks, helping improve correctness and maintainability across assigned work.',
      'Worked with team members during reviews and release preparation to complete assigned work on schedule in a structured development environment.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 dark-mode-transition relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-0 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4 border border-primary-100 dark:border-primary-800">
            <Briefcase size={16} />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Research, backend development, integration support, testing, documentation, and release-focused work across academic and enterprise environments.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-emerald-500" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative md:pl-20"
              >
                <div className={`hidden md:flex absolute left-4 top-6 h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r ${exp.accent} text-white shadow-lg ring-8 ring-white dark:ring-gray-900`}>
                  <exp.icon size={18} />
                </div>

                <div className="group rounded-2xl bg-gray-50/90 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 p-5 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className={`md:hidden shrink-0 h-11 w-11 flex items-center justify-center rounded-2xl bg-gradient-to-r ${exp.accent} text-white shadow-lg`}>
                        <exp.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{exp.title}</h3>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
                        >
                          {exp.company}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 text-sm text-gray-500 dark:text-gray-400 lg:text-right">
                      <span className="inline-flex items-center lg:justify-end gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center lg:justify-end gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white dark:bg-gray-900 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-400" size={18} />
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { value: '2+', label: 'Years enterprise development' },
            { value: '3', label: 'Research and engineering roles' },
            { value: 'AI + Backend', label: 'Current technical focus' }
          ].map((metric) => (
            <div key={metric.label} className="rounded-2xl p-6 text-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border border-primary-100/70 dark:border-gray-700">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
