import React from 'react';
import { motion } from 'motion/react';

const IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1599487405270-86430a634392?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1605197133748-eb872a9a7a92?auto=format&fit=crop&q=80&w=800" 
];

export default function Gallery() {
  return (
    <div className="w-full pt-20 min-h-screen bg-charcoal">
      <section className="bg-charcoal px-4 py-20 text-center border-b border-copper/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-copper/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-serif premium-gradient-text mb-4 relative z-10">Our Gallery</h1>
        <p className="text-offwhite/60 font-sans max-w-xl mx-auto relative z-10 text-lg">A visual journey through our rich culinary traditions and elegant ambience.</p>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded group relative aspect-square"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
              <img 
                src={src} 
                alt={`Gallery visual ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
