import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'How We Work', href: '#workflow' },
  { name: 'Why Us', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

const Logo = () => {
  return (
    <div className="flex items-center gap-1 group cursor-pointer">
      <img 
        src="/logo.png" 
        alt="V-GO Movers Logo" 
        className="h-16 w-auto object-contain transition-transform group-hover:scale-105" 
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:flex bg-slate-900 text-slate-300 py-2 px-8 text-xs font-medium justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 89391 21010</span>
            </div>
            <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Mail className="w-3.5 h-3.5" />
            <span>vgomovers@gmail.com</span>
            </div>
          </div>
        <div>
          <span>ISO Certified Logistics & Freight Management</span>
        </div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2 top-0' : 'bg-white py-4 top-0 lg:top-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <a href="#">
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <a 
                href="#quote"
                className="bg-orange-600 text-white px-6 py-2.5 rounded-sm font-bold text-sm tracking-wide hover:bg-slate-900 transition-colors shadow-lg shadow-orange-600/20"
              >
                REQUEST A QUOTE
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-slate-900 hover:text-orange-600 border-b border-slate-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#quote"
                className="bg-orange-600 text-white text-center py-4 rounded-sm font-bold text-lg tracking-wide hover:bg-slate-900 transition-colors mt-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                REQUEST A QUOTE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
