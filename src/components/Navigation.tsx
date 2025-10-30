"use client";
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { BookingDialog } from './BookingDialog';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0E1116]/80 backdrop-blur-xl border-b border-[#F5F5F7]/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F26B2D] to-[#FF8E3C] flex items-center justify-center"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  width="20" 
                  height="20" 
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
              <span className="text-[#F5F5F7] hidden sm:inline">Liftoff</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-[#F5F5F7]/80 hover:text-[#F5F5F7] transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F26B2D] to-[#FF8E3C] opacity-0 group-hover:opacity-100"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button 
                  size="sm"
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#F26B2D] hover:bg-[#FF8E3C] text-white"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg bg-[#1C1F24] border border-[#F5F5F7]/10 text-[#F5F5F7]"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0E1116]/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center px-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="space-y-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block text-[#F5F5F7] py-3 relative"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4"
                >
                  <Button 
                    className="w-full bg-[#F26B2D] hover:bg-[#FF8E3C] text-white min-h-[44px]"
                    onClick={() => {
                      setIsOpen(false);
                      setIsBookingOpen(true);
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Dialog */}
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
