"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const showcaseItems = [
  {
    title: "FinFlow SaaS",
    category: "Product Design",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    title: "NexusApp",
    category: "UI/UX Design",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    title: "Lumina Brand",
    category: "Brand Identity",
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    title: "Quantum AI",
    category: "Web3 Platform",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

export function Showreel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="work" ref={containerRef} className="py-20 sm:py-32 bg-[#0E1116] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <motion.h2
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>
        <motion.p
          className="text-[#F5F5F7]/70 mt-3 sm:mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transforming visions into pixel-perfect realities
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex gap-4 sm:gap-8 px-4 sm:px-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {showcaseItems.map((item, index) => {
            const x = useTransform(
              scrollYProgress,
              [0, 1],
              [index * 30, -index * 30]
            );

            return (
              <motion.div
                key={item.title}
                style={{ x: index === 0 ? x : undefined }}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[600px] group cursor-pointer snap-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-[#1C1F24] border border-[#F5F5F7]/10 h-full"
                  whileHover={{ y: -8, borderColor: 'rgba(242, 107, 45, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Abstract gradient visual instead of stock photo */}
                  <motion.div
                    className="aspect-video overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${item.gradient} relative`}>
                      {/* Abstract geometric shapes */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/30 blur-2xl" />
                        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
                      </div>
                      {/* Grid overlay for tech feel */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                      }} />
                    </div>
                  </motion.div>
                  
                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-white mb-2">{item.title}</h3>
                        <p className="text-[#F26B2D]">{item.category}</p>
                      </div>
                      <motion.div
                        className="w-11 h-11 rounded-full bg-[#F26B2D]/10 flex items-center justify-center text-[#F26B2D] group-hover:bg-[#F26B2D] group-hover:text-white transition-colors flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#F26B2D]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Scroll hint for mobile */}
        <motion.div
          className="flex justify-center mt-6 sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-2">
            {showcaseItems.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-[#F5F5F7]/20" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
