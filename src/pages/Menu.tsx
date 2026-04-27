import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { Plus } from 'lucide-react';

const MENU_DATA = [
  {
    id: "m1", category: "Starters", name: "Murgh Malai Tikka", price: 450, spice: 1, veg: false, bestSeller: true, image: "https://images.unsplash.com/photo-1599487405270-86430a634392?auto=format&fit=crop&q=80&w=600",
    desc: "Creamy boneless chicken marinated in yogurt, cheese and spices, cooked in tandoor."
  },
  {
    id: "m2", category: "Starters", name: "Tandoori Paneer Tikka", price: 380, spice: 2, veg: true, bestSeller: false, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600",
    desc: "Cottage cheese cubes marinated in spiced yogurt and roasted in a clay oven."
  },
  {
    id: "m3", category: "Main Course", name: "Butter Chicken", price: 580, spice: 1, veg: false, bestSeller: true, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600",
    desc: "Classic tandoori chicken cooked in a rich, velvety tomato and butter gravy."
  },
  {
    id: "m4", category: "Main Course", name: "Dal Makhani", price: 420, spice: 1, veg: true, bestSeller: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600",
    desc: "Black lentils slow-cooked overnight with tomatoes, butter and cream."
  },
  {
    id: "m5", category: "Biryani", name: "Dum Gosht Biryani", price: 650, spice: 2, veg: false, bestSeller: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=600",
    desc: "Aromatic basmati rice layered with tender mutton, slow cooked in Dum."
  },
  {
    id: "m6", category: "Biryani", name: "Subz Dum Biryani", price: 480, spice: 2, veg: true, bestSeller: false, image: "https://images.unsplash.com/photo-1631515243349-e0cb4c113364?auto=format&fit=crop&q=80&w=600",
    desc: "Seasonal vegetables layered with saffron infused basmati rice."
  },
  {
    id: "m7", category: "Bread", name: "Garlic Naan", price: 110, spice: 0, veg: true, bestSeller: false, image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=600",
    desc: "Soft Indian bread topped with chopped garlic and butter."
  },
  {
    id: "m8", category: "Desserts", name: "Gulab Jamun", price: 210, spice: 0, veg: true, bestSeller: true, image: "https://images.unsplash.com/photo-1605197133748-eb872a9a7a92?auto=format&fit=crop&q=80&w=600",
    desc: "Deep fried cottage cheese dumplings soaked in sugar syrup."
  }
];

const CATEGORIES = ["All", "Starters", "Main Course", "Biryani", "Bread", "Desserts"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();
  const [successMsg, setSuccessMsg] = useState("");

  const filteredMenu = activeCategory === "All" 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    });
    setSuccessMsg(`Added ${item.name} to cart`);
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  return (
    <div className="w-full pt-20 pb-24 min-h-screen">
      {/* HEADER */}
      <section className="bg-charcoal px-4 py-20 text-center border-b border-copper/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-copper/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-serif premium-gradient-text mb-4 relative z-10">Our Menu</h1>
        <p className="text-offwhite/60 font-sans max-w-xl mx-auto relative z-10 text-lg">Explore our culinary offerings, crafted with the finest ingredients and authentic recipes.</p>
      </section>

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full border text-xs uppercase tracking-[0.2em] transition-all duration-300 relative overflow-hidden ${
                activeCategory === cat 
                ? 'border-copper text-charcoal font-bold shadow-[0_0_15px_rgba(196,140,94,0.3)]' 
                : 'border-white/10 text-offwhite/60 hover:border-copper/50 hover:text-copper'
              }`}
            >
              <div className={`absolute inset-0 bg-copper transition-transform duration-500 origin-left ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0'}`}></div>
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* NOTIFICATION */}
        <AnimatePresence>
          {successMsg && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 right-6 lg:right-12 z-50 bg-green-500 text-white px-6 py-3 shadow-lg rounded"
            >
              {successMsg}
            </motion.div>
          )}
        </AnimatePresence>

        {/* MENU GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="bg-charcoal-light/80 rounded-xl overflow-hidden border border-white/5 group card-hover-effect flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-charcoal">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent z-10 pointer-events-none"></div>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0" loading="lazy" />
                  {item.bestSeller && (
                    <div className="absolute top-4 right-4 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-lg z-20">
                      Best Seller
                    </div>
                  )}
                  <div className="absolute top-4 left-4 flex gap-1 z-20">
                    <span className={`w-4 h-4 rounded-sm border flex items-center justify-center bg-charcoal/50 backdrop-blur-sm ${item.veg ? 'border-green-500' : 'border-red-500'}`}>
                      <span className={`w-2 h-2 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-2xl text-white mr-2 leading-tight">{item.name}</h3>
                    <span className="text-copper font-medium text-lg whitespace-nowrap">₹{item.price}</span>
                  </div>
                  <p className="text-offwhite/50 text-sm font-sans line-clamp-2 mb-6 flex-grow">{item.desc}</p>
                  
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-3.5 mt-auto border border-white/10 hover:border-copper hover:shadow-[0_0_15px_rgba(196,140,94,0.3)] bg-charcoal hover:bg-copper hover:text-charcoal text-white uppercase tracking-widest text-xs font-semibold flex items-center justify-center transition-all duration-300 rounded"
                  >
                    <Plus size={16} className="mr-2" /> Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
