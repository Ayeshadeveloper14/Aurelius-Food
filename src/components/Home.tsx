import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Award, 
  Wine, 
  Coffee, 
  Clock, 
  Users, 
  Calendar, 
  ArrowRight, 
  Instagram, 
  MapPin, 
  Mail,
  Quote
} from 'lucide-react';

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-luxury-gold uppercase text-sm mb-6 font-medium"
            >
              Est. 1998 • London • Mayfair
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-7xl md:text-[10rem] font-serif mb-8 tracking-tighter leading-none"
            >
              Aurelius <br />
              <span className="italic font-light text-5xl md:text-7xl text-white/80 gold-gradient">Fine Dining</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
            >
              <button 
                onClick={() => onNavigate('reservations')}
                className="group relative px-12 py-5 bg-luxury-gold text-black uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 rounded-sm"
              >
                <span className="relative z-10">Reserve Now</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              <button 
                onClick={() => onNavigate('menu')}
                className="px-12 py-5 border border-white/30 text-white uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-500 rounded-sm backdrop-blur-sm"
              >
                View Menu
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-luxury-gold/50 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-gold to-transparent" />
        </motion.div>
      </section>

      {/* 2. Welcome Message */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <Star className="text-luxury-gold w-8 h-8 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Symphony of Flavors <br />
              <span className="text-luxury-gold italic">Crafted with Passion</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light mb-12">
              Welcome to Aurelius, where culinary excellence meets timeless elegance. Our philosophy is simple: to honor the purest ingredients through innovative techniques and artistic presentation. Join us for an unforgettable journey through the senses.
            </p>
            <div className="w-24 h-[1px] bg-luxury-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-luxury-gold/30 z-0" />
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant Interior" 
              className="relative z-10 w-full h-[600px] object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-luxury-gold/30 z-0" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">Our Heritage</span>
            <h2 className="text-5xl font-serif leading-tight">The Art of <br />Fine Dining</h2>
            <p className="text-white/60 leading-relaxed font-light">
              Since our inception in 1998, Aurelius has been at the forefront of London's gastronomic scene. Our commitment to excellence has earned us three Michelin stars and a reputation for being one of the most exclusive dining destinations in the world.
            </p>
            <p className="text-white/60 leading-relaxed font-light">
              Every detail, from the hand-blown crystal glassware to the bespoke velvet furnishings, has been curated to provide an atmosphere of unparalleled luxury.
            </p>
            <button 
              onClick={() => onNavigate('about')}
              className="flex items-center gap-4 text-luxury-gold uppercase tracking-widest text-sm font-bold group"
            >
              Discover Our Story 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. Signature Dishes Showcase */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span {...fadeIn} className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">Culinary Masterpieces</motion.span>
            <motion.h2 {...fadeIn} className="text-5xl font-serif">Signature Dishes</motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Truffle Infused Wagyu",
                desc: "A5 Grade Wagyu beef served with black winter truffles and gold leaf.",
                img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Lobster Thermidor",
                desc: "Atlantic lobster with a rich brandy cream sauce and gruyère crust.",
                img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Saffron Risotto",
                desc: "Aged carnaroli rice with Persian saffron and edible flowers.",
                img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80"
              }
            ].map((dish, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                  <img 
                    src={dish.img} 
                    alt={dish.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-luxury-gold transition-colors">{dish.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Chef's Special Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-900/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">Limited Time</span>
            <h2 className="text-5xl font-serif mb-8">Chef's Seasonal <br />Degustation</h2>
            <p className="text-white/60 mb-10 leading-relaxed font-light">
              Experience our 12-course tasting menu, a curated journey through the finest seasonal ingredients. Each course is paired with rare vintages from our private cellar.
            </p>
            <ul className="space-y-4 mb-12">
              {['Beluga Caviar Service', 'Wild Turbot with Champagne Sauce', 'Venison with Blackberry Reduction', '24K Gold Chocolate Sphere'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm tracking-widest uppercase">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onNavigate('menu')}
              className="px-10 py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest font-bold hover:bg-luxury-gold hover:text-black transition-all"
            >
              View Full Menu
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
              alt="Chef's Special" 
              className="w-full h-[500px] object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-luxury-gold p-8 text-black">
              <p className="text-4xl font-serif font-bold">£185</p>
              <p className="text-xs uppercase tracking-widest font-bold">Per Person</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Our Master Chef Introduction */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" 
              alt="Master Chef" 
              className="w-full h-[700px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">The Visionary</span>
            <h2 className="text-5xl font-serif leading-tight">Chef Julian <br />Aurelius</h2>
            <p className="text-white/60 leading-relaxed font-light italic text-xl">
              "Cooking is not just about food; it's about creating a moment that lingers in the memory long after the last bite."
            </p>
            <p className="text-white/60 leading-relaxed font-light">
              With over 25 years of experience in Michelin-starred kitchens across Paris, Tokyo, and New York, Chef Julian brings a global perspective to traditional fine dining. His innovative approach to texture and flavor has redefined modern gastronomy.
            </p>
            <div className="flex gap-10 pt-6">
              <div>
                <p className="text-3xl font-serif text-luxury-gold">3</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Michelin Stars</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-luxury-gold">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Global Awards</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-luxury-gold">25</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Fine Dining Experience Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h2 {...fadeIn} className="text-5xl font-serif mb-16">The Aurelius Experience</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Wine className="w-10 h-10" />, title: "Sommelier Service", desc: "Expert wine pairings from our 5,000-bottle cellar." },
              { icon: <Star className="w-10 h-10" />, title: "Michelin Quality", desc: "Uncompromising standards in every detail." },
              { icon: <Users className="w-10 h-10" />, title: "Private Dining", desc: "Exclusive rooms for your most intimate gatherings." },
              { icon: <Clock className="w-10 h-10" />, title: "Valet Parking", desc: "Seamless arrival and departure for all guests." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 space-y-6 hover:border-luxury-gold/50 transition-all group"
              >
                <div className="text-luxury-gold group-hover:scale-110 transition-transform flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-serif">{item.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="space-y-8">
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">Excellence Defined</span>
            <h2 className="text-5xl font-serif">Why Choose <br />Aurelius?</h2>
            <div className="space-y-10">
              {[
                { title: "Sourcing", desc: "We partner with local farmers and global artisans to secure the rarest ingredients." },
                { title: "Technique", desc: "Our kitchen combines molecular gastronomy with classical French foundations." },
                { title: "Atmosphere", desc: "A cinematic environment designed to transport you to another world." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold shrink-0 font-serif">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-white/50 font-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"  className="w-full h-80 object-cover rounded-sm" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80" className="w-full h-80 object-cover rounded-sm mt-10" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="text-luxury-gold w-12 h-12 mx-auto mb-10 opacity-50" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
              "An absolute masterpiece of a dining experience. From the moment we walked in, we were treated like royalty. The truffle wagyu is life-changing."
            </p>
            <div>
              <p className="text-luxury-gold uppercase tracking-widest font-bold">Alexander Thorne</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Food Critic, The London Times</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Exclusive Offers */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">Special Occasions</span>
              <h2 className="text-5xl font-serif">Exclusive Offers</h2>
            </div>
            <button className="text-luxury-gold uppercase tracking-widest text-xs font-bold border-b border-luxury-gold pb-2">View All Offers</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative h-[400px] overflow-hidden group"
            >
              <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <h3 className="text-3xl font-serif mb-4">Anniversary Package</h3>
                <p className="text-white/60 mb-6 font-light">Complimentary champagne and a bespoke dessert for your special day.</p>
                <button className="w-fit px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold">Inquire Now</button>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative h-[400px] overflow-hidden group"
            >
              <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <h3 className="text-3xl font-serif mb-4">Corporate Excellence</h3>
                <p className="text-white/60 mb-6 font-light">Tailored menus and private AV-equipped rooms for business meetings.</p>
                <button className="w-fit px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold">Inquire Now</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. Private Events */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80" 
              alt="Private Events" 
              className="w-full h-[600px] object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">Bespoke Gatherings</span>
            <h2 className="text-5xl font-serif leading-tight">Private Events <br />& Catering</h2>
            <p className="text-white/60 leading-relaxed font-light">
              From intimate wedding receptions to grand gala dinners, our dedicated events team will ensure every detail is executed to perfection. We also offer off-site catering for exclusive private residences.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <p className="text-luxury-gold font-serif text-xl">120</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Max Capacity</p>
              </div>
              <div className="space-y-2">
                <p className="text-luxury-gold font-serif text-xl">3</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Private Rooms</p>
              </div>
            </div>
            <button className="px-10 py-4 border border-white/30 text-white uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">Request Brochure</button>
          </motion.div>
        </div>
      </section>

      {/* 12. Ambience Showcase */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">The Atmosphere</span>
            <h2 className="text-5xl font-serif">Restaurant Ambience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-[500px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
            </div>
            <div className="h-[500px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
            </div>
            <div className="h-[500px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
            </div>
            <div className="md:col-span-2 h-[500px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* 13. Awards & Achievements */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center gap-4">
              <Award className="w-16 h-16 text-luxury-gold" />
              <p className="text-xs uppercase tracking-[0.3em]">Michelin Guide 2025</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Star className="w-16 h-16 text-luxury-gold" />
              <p className="text-xs uppercase tracking-[0.3em]">5-Star Forbes Travel</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Wine className="w-16 h-16 text-luxury-gold" />
              <p className="text-xs uppercase tracking-[0.3em]">Wine Spectator Grand Award</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Award className="w-16 h-16 text-luxury-gold" />
              <p className="text-xs uppercase tracking-[0.3em]">World's 50 Best</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Reservation CTA Banner */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-7xl font-serif mb-10">Ready for an <br />Unforgettable Night?</h2>
            <p className="text-white/60 mb-12 text-lg font-light">Secure your table at London's most exclusive dining destination.</p>
            <button 
              onClick={() => onNavigate('reservations')}
              className="px-16 py-5 bg-luxury-gold text-black uppercase tracking-[0.3em] font-bold hover:bg-white transition-all rounded-sm"
            >
              Book Your Table
            </button>
          </motion.div>
        </div>
      </section>

      {/* 15. Blog Preview */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-serif">Culinary Journal</h2>
            <button className="text-luxury-gold uppercase tracking-widest text-xs font-bold border-b border-luxury-gold pb-2">Read All Articles</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { date: "Oct 12, 2025", title: "The Secret to Perfect Wagyu", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
              { date: "Sep 28, 2025", title: "Wine Pairing for Autumn", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" },
              { date: "Sep 15, 2025", title: "Behind the Scenes: The Kitchen", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80" }
            ].map((post, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden mb-6">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <p className="text-luxury-gold text-[10px] uppercase tracking-widest mb-2">{post.date}</p>
                <h3 className="text-xl font-serif group-hover:text-luxury-gold transition-colors">{post.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Instagram Feed */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Instagram className="text-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.4em] font-bold">@aurelius_dining</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-square overflow-hidden relative group cursor-pointer">
                <img src={`https://picsum.photos/seed/food${i}/400/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. Location with Map */}
      <section className="h-[600px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.246782213473!2d-0.1444660233796856!3d51.50861547181317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052964a6a813%3A0xed034331343748ee!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1710345678901!5m2!1sen!2suk" 
          className="w-full h-full grayscale invert opacity-50"
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-12 text-center max-w-md w-full">
          <MapPin className="text-luxury-gold w-10 h-10 mx-auto mb-6" />
          <h3 className="text-2xl font-serif mb-4">Visit Us</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
            123 Elegance Avenue, Mayfair, London W1J 7JZ
          </p>
          <button className="text-luxury-gold uppercase tracking-widest text-xs font-bold border border-luxury-gold px-8 py-3 hover:bg-luxury-gold hover:text-black transition-all">Get Directions</button>
        </div>
      </section>

      {/* 18. Newsletter Subscription */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Mail className="text-luxury-gold w-10 h-10 mx-auto mb-8" />
          <h2 className="text-4xl font-serif mb-6">Join the Inner Circle</h2>
          <p className="text-white/60 mb-10 font-light">Subscribe to receive exclusive invitations to our tasting events and seasonal menu launches.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-sm focus:border-luxury-gold outline-none transition-colors"
            />
            <button className="px-10 py-4 bg-luxury-gold text-black uppercase tracking-widest font-bold hover:bg-white transition-all">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
