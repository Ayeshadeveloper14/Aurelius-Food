import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', title: 'Main Dining Hall', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', title: 'Chef at Work', category: 'Kitchen' },
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', title: 'Truffle Wagyu', category: 'Food' },
    { src: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80', title: 'Lobster Thermidor', category: 'Food' },
    { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80', title: 'Wine Cellar', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80', title: 'Private Suite', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', title: 'Signature Cocktail', category: 'Beverages' },
    { src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', title: 'Gold Dessert', category: 'Food' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', title: 'Evening Ambience', category: 'Interior' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 text-center px-6">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-luxury-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
        >
          Visual Experience
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif mb-8"
        >
          Gallery
        </motion.h1>
        <div className="w-24 h-[1px] bg-luxury-gold mx-auto mb-16" />
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-sm break-inside-avoid"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <Maximize2 className="text-luxury-gold w-8 h-8 mb-4 scale-50 group-hover:scale-100 transition-transform" />
                <h3 className="text-xl font-serif mb-1">{img.title}</h3>
                <p className="text-luxury-gold text-[10px] uppercase tracking-widest">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-luxury-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
