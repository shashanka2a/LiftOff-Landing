"use client";
import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { BookingDialog } from './BookingDialog';

export function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E1116] to-[#1C1F24] pt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 3D Orbit Visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbit rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border border-[#F26B2D]/20"
              style={{
                transform: `scale(${ring * 0.4}) rotateX(60deg)`,
              }}
              animate={{
                borderColor: [`rgba(242, 107, 45, 0.1)`, `rgba(242, 107, 45, 0.3)`, `rgba(242, 107, 45, 0.1)`],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: ring * 0.3,
              }}
            />
          ))}
          
          {/* Glowing sphere */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full"
            style={{
              background: 'radial-gradient(circle, #F26B2D 0%, #FF8E3C 50%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-white mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Design That Launches Startups.
          </motion.h1>
          
          <motion.p
            className="text-[#F5F5F7]/90 max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Liftoff.design crafts high-impact digital experiences that transform bold ideas into beautiful products.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-h-[50px] bg-[#F26B2D] hover:bg-[#FF8E3C] text-white group relative overflow-hidden shadow-lg shadow-[#F26B2D]/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  See Our Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF8E3C] to-[#F26B2D]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto min-h-[50px] border-[#F5F5F7]/30 !text-white hover:bg-[#F5F5F7]/10 hover:!text-white hover:border-[#F26B2D]/50 backdrop-blur-sm"
              >
                Book a Discovery Call
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#F5F5F7]/40 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-[#F26B2D] rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Booking Dialog */}
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
