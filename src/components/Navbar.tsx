import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reservations', id: 'reservations' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4 border-b border-gold-500/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <UtensilsCrossed className="text-luxury-gold w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-serif tracking-widest uppercase gold-gradient font-bold">
            Aurelius
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-sm uppercase tracking-[0.2em] transition-all relative group ${
                currentPage === link.id ? 'text-luxury-gold' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-luxury-gold transition-all duration-300 ${
                currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('reservations')}
            className="px-6 py-2 border border-luxury-gold text-luxury-gold uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
          >
            Reserve Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-luxury-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl font-serif tracking-widest uppercase ${
                  currentPage === link.id ? 'text-luxury-gold' : 'text-white/70'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage('reservations');
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 px-10 py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-black transition-all"
            >
              Reserve Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
