"use client";
import { motion } from 'motion/react';
import { Palette, Layers, Code, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: "Product Design",
    description: "From concept to pixel-perfect MVP.",
    gradient: "from-[#F26B2D] to-[#FF8E3C]",
  },
  {
    icon: Palette,
    title: "Brand Systems",
    description: "Timeless, minimal, and scalable identity.",
    gradient: "from-[#FF8E3C] to-[#F26B2D]",
  },
  {
    icon: Code,
    title: "Webflow Dev",
    description: "Figma to production-grade Webflow builds.",
    gradient: "from-[#F26B2D] to-[#FF8E3C]",
  },
  {
    icon: Sparkles,
    title: "Motion & Interaction",
    description: "Bring your product to life.",
    gradient: "from-[#FF8E3C] to-[#F26B2D]",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-gradient-to-b from-[#0E1116] to-[#1C1F24] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#F26B2D] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF8E3C] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-3 sm:mb-4">What We Do</h2>
          <p className="text-[#F5F5F7]/70 max-w-2xl mx-auto px-4">
            Full-spectrum design services to elevate your startup
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className="relative h-full p-6 sm:p-8 rounded-2xl bg-[#1C1F24]/50 border border-[#F5F5F7]/10 backdrop-blur-sm overflow-hidden cursor-pointer min-h-[180px]"
                  whileHover={{ y: -8, borderColor: 'rgba(242, 107, 45, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon with animated background */}
                  <motion.div
                    className="relative mb-5 sm:mb-6 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#F26B2D]/20 to-[#FF8E3C]/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#F26B2D]" />
                    
                    {/* Floating particles around icon */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={false}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#F26B2D] rounded-full"
                          animate={{
                            x: [0, Math.random() * 40 - 20],
                            y: [0, Math.random() * 40 - 20],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>

                  <h3 className="text-white mb-2 sm:mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-[#F5F5F7]/70 relative z-10 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.gradient} opacity-10 blur-2xl`} />
                  </motion.div>

                  {/* Bottom glow line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
