import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 text-center px-6">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-luxury-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
        >
          Get In Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif mb-8"
        >
          Contact Us
        </motion.h1>
        <div className="w-24 h-[1px] bg-luxury-gold mx-auto mb-16" />
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Contact Info */}
        <motion.div {...fadeIn} className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">Visit the <br />Sanctuary</h2>
            <p className="text-white/60 font-light leading-relaxed max-w-md">
              Whether you have a question about our menu, wish to inquire about private events, or simply want to share your experience, we are here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-luxury-gold">
                <MapPin size={20} />
                <h4 className="uppercase tracking-widest text-xs font-bold">Location</h4>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                123 Elegance Avenue, <br />Mayfair, London W1J 7JZ
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-luxury-gold">
                <Phone size={20} />
                <h4 className="uppercase tracking-widest text-xs font-bold">Phone</h4>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                +44 20 7946 0123 <br />+44 20 7946 0456
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-luxury-gold">
                <Mail size={20} />
                <h4 className="uppercase tracking-widest text-xs font-bold">Email</h4>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                reservations@aurelius.com <br />events@aurelius.com
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-luxury-gold">
                <Clock size={20} />
                <h4 className="uppercase tracking-widest text-xs font-bold">Hours</h4>
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Mon - Sat: 17:30 - 00:00 <br />Sun: 12:00 - 22:00
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="pt-10 border-t border-gold-900/20 flex gap-8">
            {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-luxury-gold transition-colors">{social}</a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div {...fadeIn} className="glass p-10 md:p-16 relative">
          <h3 className="text-2xl font-serif mb-10">Send a Message</h3>
          <form className="space-y-8" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });
              if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
              } else {
                alert('Failed to send message.');
              }
            } catch (error) {
              console.error(error);
              alert('An error occurred.');
            }
          }}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Your Name</label>
              <input name="name" required type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
              <input name="email" required type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Subject</label>
              <select name="subject" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light appearance-none">
                <option className="bg-black">General Inquiry</option>
                <option className="bg-black">Private Event</option>
                <option className="bg-black">Press & Media</option>
                <option className="bg-black">Careers</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
              <textarea name="message" required rows={5} className="w-full bg-transparent border border-white/20 p-4 focus:border-luxury-gold outline-none transition-colors font-light resize-none" />
            </div>
            <button type="submit" className="w-full py-5 bg-luxury-gold text-black uppercase tracking-[0.3em] font-bold hover:bg-white transition-all flex items-center justify-center gap-4">
              Send Message <Send size={16} />
            </button>
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="mt-32 h-[500px] w-full grayscale invert opacity-50">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.246782213473!2d-0.1444660233796856!3d51.50861547181317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052964a6a813%3A0xed034331343748ee!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1710345678901!5m2!1sen!2suk" 
          className="w-full h-full"
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
        />
      </section>
    </div>
  );
};

export default Contact;
