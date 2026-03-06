import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, UtensilsCrossed } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold-900/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="text-luxury-gold w-6 h-6" />
            <span className="text-xl font-serif tracking-widest uppercase gold-gradient font-bold">
              Aurelius
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed font-light">
            Experience the pinnacle of culinary artistry. Where every dish tells a story of passion, precision, and the finest ingredients sourced from around the globe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-luxury-gold font-serif uppercase tracking-widest mb-8 text-sm">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-luxury-gold transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-luxury-gold transition-colors">Seasonal Menu</a></li>
            <li><a href="#" className="hover:text-luxury-gold transition-colors">Private Dining</a></li>
            <li><a href="#" className="hover:text-luxury-gold transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-luxury-gold transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-luxury-gold font-serif uppercase tracking-widest mb-8 text-sm">Contact Us</h4>
          <ul className="space-y-6 text-sm text-white/60">
            <li className="flex gap-4">
              <MapPin size={18} className="text-luxury-gold shrink-0" />
              <span>123 Elegance Avenue, <br />Mayfair, London W1J 7JZ</span>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <span>+44 20 7946 0123</span>
            </li>
            <li className="flex gap-4">
              <Mail size={18} className="text-luxury-gold shrink-0" />
              <span>reservations@aurelius.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-luxury-gold font-serif uppercase tracking-widest mb-8 text-sm">Opening Hours</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex justify-between">
              <span>Mon - Thu</span>
              <span>18:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Fri - Sat</span>
              <span>17:30 - 00:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>12:00 - 22:00</span>
            </li>
            <li className="mt-6 pt-6 border-t border-gold-900/20">
              <p className="text-xs italic text-luxury-gold">Dress Code: Elegant / Formal</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gold-900/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
        <p>© 2026 Aurelius Fine Dining. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
