import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'main', name: 'Main Course' },
    { id: 'tasting', name: 'Chef\'s Tasting' },
    { id: 'sides', name: 'Sides' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'wines', name: 'Wine List' },
    { id: 'after-dinner', name: 'After Dinner' },
  ];

  const menuItems = {
    starters: [
      { name: 'Beluga Caviar', desc: 'Served with traditional accompaniments and warm blinis.', price: '£120', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=400&q=80' },
      { name: 'Foie Gras Terrine', desc: 'Apricot chutney, toasted brioche, and aged balsamic.', price: '£35', img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&q=80' },
      { name: 'Scallop Carpaccio', desc: 'Yuzu dressing, radish, and sea buckthorn.', price: '£28', img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=400&q=80' },
      { name: 'Wild Mushroom Velouté', desc: 'Truffle foam and porcini dust.', price: '£22', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80' },
      { name: 'Beef Tartare', desc: 'Hand-cut fillet, quail egg yolk, and sourdough crisps.', price: '£32', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80' },
    ],
    main: [
      { name: 'A5 Wagyu Beef', desc: 'Smoked parsnip purée, bone marrow jus, and winter truffles.', price: '£145', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
      { name: 'Atlantic Lobster', desc: 'Butter poached with saffron risotto and sea asparagus.', price: '£85', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=400&q=80' },
      { name: 'Duck Breast', desc: 'Honey glazed with cherry reduction and spiced carrot.', price: '£48', img: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=400&q=80' },
      { name: 'Wild Turbot', desc: 'Champagne sauce, caviar, and braised leeks.', price: '£55', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80' },
      { name: 'Rack of Lamb', desc: 'Herb crusted with pea purée and mint jus.', price: '£52', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=400&q=80' },
    ],
    tasting: [
      { name: 'The Grand Journey', desc: '12-course seasonal tasting menu with rare pairings.', price: '£185', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80' },
      { name: 'Vegetarian Odyssey', desc: '8-course exploration of the finest garden harvests.', price: '£145', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=400&q=80' },
    ],
    sides: [
      { name: 'Truffle Fries', desc: 'Hand-cut potatoes with parmesan and truffle oil.', price: '£12', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80' },
      { name: 'Creamed Spinach', desc: 'With nutmeg and aged cheddar.', price: '£10', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400&q=80' },
      { name: 'Honey Glazed Carrots', desc: 'Roasted with thyme and sea salt.', price: '£9', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80' },
      { name: 'Mashed Potatoes', desc: 'Infused with roasted garlic and chives.', price: '£10', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
    ],
    desserts: [
      { name: 'Gold Chocolate Sphere', desc: 'Hot caramel sauce, hazelnut praline, and vanilla bean.', price: '£24', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80' },
      { name: 'Lemon Soufflé', desc: 'Raspberry sorbet and candied zest.', price: '£18', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80' },
      { name: 'Mille-Feuille', desc: 'Tahitian vanilla cream and fresh berries.', price: '£20', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80' },
      { name: 'Artisan Cheese Board', desc: 'Selection of British and French cheeses.', price: '£22', img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=400&q=80' },
    ],
    beverages: [
      { name: 'Vintage Champagne', desc: 'Dom Pérignon 2012, Epernay.', price: '£350', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400&q=80' },
      { name: 'Signature Cocktail', desc: 'Gold leaf martini with botanical gin.', price: '£25', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80' },
      { name: 'Artisan Coffee', desc: 'Kopi Luwak served in fine porcelain.', price: '£15', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80' },
    ],
    wines: [
      { name: 'Château Margaux', desc: 'Premier Grand Cru Classé, 2015.', price: '£1,200', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80' },
      { name: 'Cloudy Bay', desc: 'Sauvignon Blanc, Marlborough.', price: '£75', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=80' },
      { name: 'Penfolds Grange', desc: 'Shiraz, South Australia, 2018.', price: '£850', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400&q=80' },
    ],
    'after-dinner': [
      { name: 'Macallan 25 Year', desc: 'Sherry Oak Highland Single Malt.', price: '£180', img: 'https://images.unsplash.com/photo-1527281400828-ac737aef5ad4?auto=format&fit=crop&w=400&q=80' },
      { name: 'Hennessy X.O', desc: 'The original X.O cognac.', price: '£45', img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=400&q=80' },
      { name: 'Espresso Martini', desc: 'Freshly brewed espresso, vodka, and coffee liqueur.', price: '£22', img: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&w=400&q=80' },
    ],
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
          Gastronomic Journey
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif mb-8"
        >
          The Menu
        </motion.h1>
        <div className="w-24 h-[1px] bg-luxury-gold mx-auto mb-16" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs md:text-sm uppercase tracking-[0.3em] transition-all pb-2 border-b-2 ${
                activeCategory === cat.id ? 'text-luxury-gold border-luxury-gold' : 'text-white/40 border-transparent hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group cursor-pointer"
              >
                <div className="w-32 h-32 shrink-0 overflow-hidden rounded-sm">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 border-b border-gold-900/20 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-xl font-serif group-hover:text-luxury-gold transition-colors">{item.name}</h3>
                    <span className="text-luxury-gold font-serif">{item.price}</span>
                  </div>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Note */}
      <section className="py-32 text-center px-6">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] max-w-2xl mx-auto leading-loose">
          * Please inform your server of any allergies or dietary requirements. <br />
          A discretionary service charge of 12.5% will be added to your bill.
        </p>
      </section>
            {/* Chef Recommendation Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-luxury-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4">
              Chef Special
            </span>
            <h2 className="text-5xl md:text-6xl font-serif">
              Chef’s Recommendations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {menuItems.main.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="h-72 overflow-hidden rounded-xl mb-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-luxury-gold font-serif">
                    {item.price}
                  </span>
                </div>

                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
