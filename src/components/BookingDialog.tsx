"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-lg bg-[#1C1F24] border border-[#F5F5F7]/10 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26B2D] to-[#FF8E3C]" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0E1116] border border-[#F5F5F7]/10 flex items-center justify-center text-[#F5F5F7]/60 hover:text-[#F5F5F7] hover:border-[#F26B2D]/50 transition-colors z-10"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <motion.div
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F26B2D] to-[#FF8E3C] flex items-center justify-center mb-4"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Calendar className="w-7 h-7 text-white" />
                        </motion.div>
                        <h2 className="text-white mb-2">Book a Discovery Call</h2>
                        <p className="text-[#F5F5F7]/70">
                          Let's discuss how we can help launch your vision
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-[#F5F5F7]/90 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="bg-[#0E1116] border-[#F5F5F7]/10 text-white placeholder:text-[#F5F5F7]/40 focus:border-[#F26B2D]/50 min-h-[48px]"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-[#F5F5F7]/90 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="bg-[#0E1116] border-[#F5F5F7]/10 text-white placeholder:text-[#F5F5F7]/40 focus:border-[#F26B2D]/50 min-h-[48px]"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-[#F5F5F7]/90 mb-2">
                            Company / Project
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Startup"
                            className="bg-[#0E1116] border-[#F5F5F7]/10 text-white placeholder:text-[#F5F5F7]/40 focus:border-[#F26B2D]/50 min-h-[48px]"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-[#F5F5F7]/90 mb-2">
                            <MessageSquare className="w-4 h-4 inline mr-2" />
                            Tell us about your project
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="What are you looking to build?"
                            className="bg-[#0E1116] border-[#F5F5F7]/10 text-white placeholder:text-[#F5F5F7]/40 focus:border-[#F26B2D]/50 resize-none"
                          />
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="pt-2"
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full min-h-[52px] bg-gradient-to-r from-[#F26B2D] to-[#FF8E3C] hover:from-[#FF8E3C] hover:to-[#F26B2D] text-white relative overflow-hidden"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <motion.div
                                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                Submitting...
                              </span>
                            ) : (
                              'Schedule Your Call'
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F26B2D] to-[#FF8E3C] flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <motion.svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                      </motion.div>
                      <h3 className="text-white mb-2">Request Received!</h3>
                      <p className="text-[#F5F5F7]/70">
                        We'll be in touch within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Background decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F26B2D]/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
