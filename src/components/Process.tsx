"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Search, Pencil, Rocket } from 'lucide-react';
import { BookingDialog } from './BookingDialog';

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We dive deep into your vision, audience, and competitive landscape to uncover opportunities.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design",
    description: "Rapid prototyping and iterative design sprints to craft pixel-perfect experiences.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver",
    description: "Seamless handoff with production-ready assets, design systems, and ongoing support.",
  },
];

export function Process() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="py-20 sm:py-32 bg-gradient-to-b from-[#1C1F24] to-[#0E1116] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4 px-4">We Launch Fast. We Design for Impact.</h2>
          <p className="text-[#F5F5F7]/70 max-w-2xl mx-auto px-4">
            Our streamlined process ensures your startup goes from concept to launch in record time
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - Desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#F5F5F7]/10 hidden md:block -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#F26B2D] to-[#FF8E3C]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#F5F5F7]/10 md:hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#F26B2D] to-[#FF8E3C]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 sm:space-y-20">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className={`relative flex flex-row md:flex-row items-start md:items-center gap-6 sm:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Mobile/Tablet Layout */}
                  <div className="md:hidden flex items-start gap-6 w-full">
                    {/* Center Icon - Mobile */}
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        delay: index * 0.2 + 0.1 
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F26B2D] to-[#FF8E3C] flex items-center justify-center relative"
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                        
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#F26B2D]"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Content - Mobile */}
                    <div className="flex-1 pt-2">
                      <motion.div
                        className="mb-3"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          delay: index * 0.2 + 0.2 
                        }}
                      >
                        <span className="text-[#F26B2D]/50 block">{step.number}</span>
                      </motion.div>
                      
                      <h3 className="text-white mb-2">{step.title}</h3>
                      <p className="text-[#F5F5F7]/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:flex md:flex-1 items-center ${isEven ? 'justify-end md:pr-16' : 'justify-start md:pl-16'}`}>
                    <div className={`${isEven ? 'text-right' : 'text-left'} max-w-md`}>
                      <motion.div
                        className={`inline-block mb-3 ${!isEven ? 'block' : ''}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          delay: index * 0.2 + 0.2 
                        }}
                      >
                        <span className="text-[#F26B2D]/50 block">{step.number}</span>
                      </motion.div>
                      
                      <h3 className="text-white mb-3">{step.title}</h3>
                      <p className="text-[#F5F5F7]/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Icon - Desktop */}
                  <motion.div
                    className="relative z-10 flex-shrink-0 hidden md:block"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.2 + 0.1 
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F26B2D] to-[#FF8E3C] flex items-center justify-center relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                      
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#F26B2D]"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Empty spacer for layout balance - Desktop */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#F5F5F7]/70 mb-5 sm:mb-6 px-4">
            Ready to launch your vision?
          </p>
          <motion.button
            onClick={() => setIsBookingOpen(true)}
            className="px-8 py-4 min-h-[52px] rounded-full bg-gradient-to-r from-[#F26B2D] to-[#FF8E3C] text-white relative overflow-hidden group shadow-lg shadow-[#F26B2D]/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Start Your Project</span>
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF8E3C] to-[#F26B2D]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Booking Dialog */}
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
