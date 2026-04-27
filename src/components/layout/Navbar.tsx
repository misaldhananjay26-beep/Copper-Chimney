import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'luxury-glass py-3 shadow-xl' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-2xl lg:text-3xl premium-gradient-text tracking-wider font-semibold uppercase">
              Copper Chimney
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-copper-light/80 mt-1">
              Viman Nagar
            </span>
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-xs uppercase tracking-[0.15em] font-medium transition-colors hover:text-copper',
                location.pathname === link.path ? 'text-copper' : 'text-offwhite/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
            <Link
              to="/reservation"
              className="text-[11px] uppercase tracking-[0.2em] px-6 py-3 border border-copper/50 text-copper hover:bg-copper hover:text-charcoal transition-all duration-300"
            >
              Book Table
            </Link>
            <Link
              to="/order"
              className="text-[11px] uppercase tracking-[0.2em] px-6 py-3 bg-copper text-charcoal hover:bg-white transition-all duration-300 font-bold btn-premium shadow-[0_0_15px_rgba(196,140,94,0.3)]"
            >
              Order Online
            </Link>
          </div>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden relative z-50 text-offwhite p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU FULL SCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center space-y-8 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-2xl font-serif text-white hover:text-copper transition-colors',
                    location.pathname === link.path && 'text-copper'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col w-full max-w-sm mt-8 space-y-4">
                <Link
                  to="/reservation"
                  className="w-full text-center uppercase tracking-widest px-5 py-4 border border-copper text-copper hover:bg-copper hover:text-charcoal transition-all"
                >
                  Book Table
                </Link>
                <Link
                  to="/order"
                  className="w-full text-center uppercase tracking-widest px-5 py-4 bg-copper text-charcoal hover:bg-copper-light transition-all font-semibold"
                >
                  Order Online
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
