import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to save reservation. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          Secure Your Table
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif mb-8"
        >
          Reservations
        </motion.h1>
        <div className="w-24 h-[1px] bg-luxury-gold mx-auto mb-16" />
      </section>

      <section className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass p-10 md:p-20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-luxury-gold/20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-luxury-gold/20" />
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Number of Guests</label>
                    <select 
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light appearance-none"
                      value={formData.guests}
                      onChange={e => setFormData({...formData, guests: e.target.value})}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-black">{n} Guests</option>)}
                      <option value="9+" className="bg-black">9+ Guests (Contact Us)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <Calendar size={12} /> Date
                    </label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <Clock size={12} /> Time
                    </label>
                    <select 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxury-gold outline-none transition-colors font-light appearance-none"
                      value={formData.time}
                      onChange={e => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="" className="bg-black">Select Time</option>
                      {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(t => (
                        <option key={t} value={t} className="bg-black">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Special Requests</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border border-white/20 p-4 focus:border-luxury-gold outline-none transition-colors font-light resize-none"
                    placeholder="Allergies, special occasions, or table preferences..."
                    value={formData.specialRequest}
                    onChange={e => setFormData({...formData, specialRequest: e.target.value})}
                  />
                </div>

                <div className="flex flex-col items-center gap-6 pt-6">
                  <button 
                    disabled={isSubmitting}
                    className="px-16 py-5 bg-luxury-gold text-black uppercase tracking-[0.3em] font-bold hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                  </button>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 text-center">
                    By clicking confirm, you agree to our booking terms and dress code policy.
                  </p>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-20 text-center space-y-8"
            >
              <CheckCircle className="text-luxury-gold w-20 h-20 mx-auto" />
              <h2 className="text-4xl font-serif">Reservation Confirmed</h2>
              <p className="text-white/60 font-light max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. We have received your reservation for {formData.guests} guests on {formData.date} at {formData.time}. A confirmation email has been sent to {formData.email}.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-luxury-gold uppercase tracking-widest text-xs font-bold border-b border-luxury-gold pb-2"
              >
                Make Another Booking
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Info */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <AlertCircle className="text-luxury-gold w-8 h-8 mx-auto" />
          <h4 className="text-lg font-serif">Dress Code</h4>
          <p className="text-white/40 text-sm font-light">Elegant / Formal. We kindly ask guests to refrain from wearing sportswear or casual attire.</p>
        </div>
        <div className="space-y-4">
          <Users className="text-luxury-gold w-8 h-8 mx-auto" />
          <h4 className="text-lg font-serif">Large Groups</h4>
          <p className="text-white/40 text-sm font-light">For parties of 9 or more, please contact our events team directly at events@aurelius.com.</p>
        </div>
        <div className="space-y-4">
          <Clock className="text-luxury-gold w-8 h-8 mx-auto" />
          <h4 className="text-lg font-serif">Cancellation</h4>
          <p className="text-white/40 text-sm font-light">We require at least 24 hours notice for cancellations to avoid a late fee of £50 per person.</p>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
