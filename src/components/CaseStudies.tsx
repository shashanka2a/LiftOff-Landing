"use client";
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    logo: "FinFlow",
    title: "Banking reimagined for Gen Z",
    category: "FinTech • Product Design",
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
  },
  {
    logo: "NexusApp",
    title: "Web3 social platform for creators",
    category: "Web3 • UI/UX Design",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  {
    logo: "Lumina",
    title: "Sustainable fashion marketplace",
    category: "E-commerce • Branding",
    gradient: "from-pink-600 via-rose-600 to-orange-600",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 sm:py-32 bg-[#0E1116] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4">Case Studies</h2>
          <p className="text-[#F5F5F7]/70">
            Deep dives into how we helped startups launch successfully
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-[#1C1F24]/30 border border-[#F5F5F7]/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(28, 31, 36, 0.4) 0%, rgba(28, 31, 36, 0.2) 100%)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                }}
                whileHover={{ 
                  y: -12,
                  borderColor: 'rgba(242, 107, 45, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {/* Abstract gradient visual instead of photo */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${study.gradient} relative`}>
                      {/* Abstract shapes */}
                      <div className="absolute inset-0">
                        <motion.div
                          className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/20 blur-2xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/10 blur-3xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            x: [0, -20, 0],
                            y: [0, 20, 0],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                      {/* Minimal grid overlay */}
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                      }} />
                    </div>
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F24] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4 gap-3">
                    <div className="px-3 sm:px-4 py-2 rounded-full bg-[#F26B2D]/10 border border-[#F26B2D]/20">
                      <span className="text-[#F26B2D]">{study.logo}</span>
                    </div>
                    <motion.div
                      className="w-11 h-11 rounded-full bg-[#F26B2D]/10 flex items-center justify-center text-[#F26B2D] group-hover:bg-[#F26B2D] group-hover:text-white transition-colors flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <h3 className="text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-[#F5F5F7]/60">
                    {study.category}
                  </p>
                </div>

                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* Hover glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#F26B2D] to-[#FF8E3C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl -z-10"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="group inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full border border-[#F5F5F7]/30 text-white hover:border-[#F26B2D]/50 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
