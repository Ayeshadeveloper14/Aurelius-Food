import React from 'react';
import { motion } from 'motion/react';
import { History, Target, Users, Award, Star } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const timeline = [
    { year: '1998', event: 'Aurelius opens its doors in Mayfair, London.' },
    { year: '2002', event: 'Awarded first Michelin Star for culinary innovation.' },
    { year: '2008', event: 'Expansion of our private cellar to 5,000 rare vintages.' },
    { year: '2015', event: 'Chef Julian Aurelius joins as Executive Chef.' },
    { year: '2023', event: 'Voted "Best Fine Dining Restaurant" in the UK.' },
  ];

  const team = [
    { name: 'Julian Aurelius', role: 'Executive Chef', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Elena Rossi', role: 'Head Sommelier', img: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=400&q=80' },
    { name: 'Marcus Chen', role: 'Pastry Chef', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Sarah Jenkins', role: 'General Manager', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="py-20 text-center px-6">
        <motion.span {...fadeIn} className="text-luxury-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">The Legacy</motion.span>
        <motion.h1 {...fadeIn} className="text-6xl md:text-8xl font-serif mb-8">Our Story</motion.h1>
        <div className="w-24 h-[1px] bg-luxury-gold mx-auto" />
      </section>

      {/* Restaurant Story */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeIn} className="space-y-8">
          <h2 className="text-4xl font-serif">A Tradition of <br />Excellence</h2>
          <p className="text-white/60 leading-relaxed font-light">
            Founded by the Aurelius family in the heart of London, our restaurant was born from a desire to create a sanctuary where the art of gastronomy could be celebrated in its purest form. What began as a small boutique eatery has evolved into a world-renowned destination for epicureans.
          </p>
          <p className="text-white/60 leading-relaxed font-light">
            Our philosophy is rooted in the belief that fine dining should be an immersive experience—one that engages all the senses and leaves a lasting impression on the soul.
          </p>
          <div className="flex gap-10 pt-6">
            <div className="flex flex-col items-center gap-2">
              <History className="text-luxury-gold w-8 h-8" />
              <p className="text-[10px] uppercase tracking-widest text-white/40">25+ Years</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Target className="text-luxury-gold w-8 h-8" />
              <p className="text-[10px] uppercase tracking-widest text-white/40">Pure Vision</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="text-luxury-gold w-8 h-8" />
              <p className="text-[10px] uppercase tracking-widest text-white/40">3 Stars</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" alt="Interior" className="w-full h-[600px] object-cover rounded-sm" referrerPolicy="no-referrer" />
          <div className="absolute -bottom-10 -left-10 glass p-10 hidden md:block">
            <p className="text-3xl font-serif text-luxury-gold mb-2">1998</p>
            <p className="text-xs uppercase tracking-widest text-white/40">The Beginning</p>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div {...fadeIn} className="glass p-16 space-y-6">
            <h3 className="text-3xl font-serif text-luxury-gold">Our Vision</h3>
            <p className="text-white/60 font-light leading-relaxed">
              To be the global benchmark for luxury dining, where innovation and tradition coexist in perfect harmony, creating moments of pure transcendence for our guests.
            </p>
          </motion.div>
          <motion.div {...fadeIn} className="glass p-16 space-y-6">
            <h3 className="text-3xl font-serif text-luxury-gold">Our Mission</h3>
            <p className="text-white/60 font-light leading-relaxed">
              To source the world's finest ingredients and transform them into culinary masterpieces through passion, precision, and an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chef Biography */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div {...fadeIn} className="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" alt="Chef Julian" className="w-full h-[700px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div {...fadeIn} className="w-full md:w-1/2 space-y-8">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">Executive Chef</span>
          <h2 className="text-5xl font-serif">Julian Aurelius</h2>
          <p className="text-white/60 leading-relaxed font-light">
            Chef Julian's journey began in the kitchens of Lyon, where he learned the foundations of classical French cuisine. His curiosity led him to Tokyo, where he spent five years mastering the art of precision and the importance of seasonal purity.
          </p>
          <p className="text-white/60 leading-relaxed font-light">
            Today, he leads our culinary team with a vision that is both bold and respectful of tradition. His signature style is defined by clean flavors, unexpected textures, and a visual presentation that rivals fine art.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Star className="text-luxury-gold w-5 h-5" />
              <span className="text-sm tracking-widest uppercase">Best Chef in London 2022</span>
            </div>
            <div className="flex items-center gap-4">
              <Star className="text-luxury-gold w-5 h-5" />
              <span className="text-sm tracking-widest uppercase">Global Gastronomy Award 2024</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif">The Artisans</h2>
            <p className="text-white/40 mt-4 uppercase tracking-widest text-xs">The faces behind the excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-serif mb-1 group-hover:text-luxury-gold transition-colors">{member.name}</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Philosophy */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" alt="Philosophy" className="w-full h-[500px] object-cover rounded-sm" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div {...fadeIn} className="order-1 md:order-2 space-y-8">
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">Our Philosophy</span>
            <h2 className="text-5xl font-serif">Gastronomy as Art</h2>
            <p className="text-white/60 leading-relaxed font-light">
              We believe that every plate is a canvas and every ingredient is a story. Our culinary philosophy is built on three pillars: Respect for the Source, Precision in Technique, and Innovation in Presentation.
            </p>
            <p className="text-white/60 leading-relaxed font-light">
              By bridging the gap between classical foundations and modern molecular gastronomy, we create dishes that are both familiar and entirely unexpected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Sustainability */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="space-y-8">
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">Sustainability</span>
            <h2 className="text-5xl font-serif">Conscious Luxury</h2>
            <p className="text-white/60 leading-relaxed font-light">
              Luxury should not come at the cost of the planet. We are committed to zero-waste practices in our kitchen and exclusively partner with suppliers who share our dedication to ethical sourcing and environmental stewardship.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <p className="text-luxury-gold font-serif text-2xl">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Traceable Ingredients</p>
              </div>
              <div className="space-y-2">
                <p className="text-luxury-gold font-serif text-2xl">Zero</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Single-Use Plastics</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeIn}>
            <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80" alt="Sustainability" className="w-full h-[500px] object-cover rounded-sm" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* 7. Private Dining & Events */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div {...fadeIn}>
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">Exclusive Spaces</span>
            <h2 className="text-5xl font-serif">Private Dining & Events</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed font-light mt-6">
              From intimate celebrations in our Wine Cellar to grand corporate galas in the Main Hall, we offer bespoke event planning and catering services tailored to your exact requirements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80" className="w-full h-80 object-cover rounded-sm" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=600&q=80" className="w-full h-80 object-cover rounded-sm" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" className="w-full h-80 object-cover rounded-sm" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* 8. Our Journey (Fixed Timeline) */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-20">Our Journey</h2>
          <div className="relative border-l border-gold-500/20 ml-4 md:ml-0 md:left-1/2">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right md:left-[-50%]' : 'md:pl-16 md:left-[50%]'}`}
              >
                <div className="absolute top-0 w-4 h-4 bg-luxury-gold rounded-full -left-[9px] md:left-auto md:right-[-9px]" 
                  style={{ left: i % 2 === 0 ? 'auto' : '-9px', right: i % 2 === 0 ? '-9px' : 'auto' }}
                />
                <p className="text-3xl font-serif text-luxury-gold mb-2">{item.year}</p>
                <p className="text-white/60 font-light leading-relaxed">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
