"use client";
import { motion } from 'motion/react';
import { Dribbble, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Dribbble, label: "Dribbble", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer id="about" className="relative bg-[#0E1116] border-t border-[#F5F5F7]/10 overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-[#F26B2D]/20 via-[#FF8E3C]/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-10 sm:mb-12">
          {/* Left: Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Logo mark - minimal rocket in "O" */}
              <motion.div
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#F26B2D] to-[#FF8E3C] flex items-center justify-center"
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-white"
                >
                  <path 
                    d="M12 2L4 8v8c0 4 3 7 8 9 5-2 8-5 8-9V8l-8-6z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M12 8v8M8 12h8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              <span className="text-white">Liftoff.design</span>
            </div>
            <p className="text-[#F5F5F7]/70 max-w-sm leading-relaxed">
              Crafting high-impact digital experiences that transform bold ideas into beautiful products.
            </p>
          </motion.div>

          {/* Right: Contact and Social */}
          <motion.div
            className="flex flex-col md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <p className="text-[#F5F5F7]/50 mb-2">Get in touch</p>
              <motion.a
                href="mailto:hello@liftoff.design"
                className="inline-flex items-center gap-2 text-[#F26B2D] group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5" />
                <span>hello@liftoff.design</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-[#1C1F24] border border-[#F5F5F7]/10 flex items-center justify-center text-[#F5F5F7]/60 hover:text-[#F26B2D] hover:border-[#F26B2D]/30 transition-colors"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-6 sm:pt-8 border-t border-[#F5F5F7]/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#F5F5F7]/50">
            © 2025 Liftoff.design. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <motion.a
              href="#"
              className="text-[#F5F5F7]/50 hover:text-[#F26B2D] transition-colors min-h-[44px] flex items-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="text-[#F5F5F7]/50 hover:text-[#F26B2D] transition-colors min-h-[44px] flex items-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Terms
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#F26B2D]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#FF8E3C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </footer>
  );
}
