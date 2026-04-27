import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full pt-20">
      {/* PAGE HEADER */}
      <section className="relative py-24 bg-charcoal-light flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600" 
            alt="About Copper Chimney" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl px-6">
          <span className="text-copper uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">A Legacy of Fine Dining</h1>
          <p className="text-offwhite/70 font-sans italic text-lg">
            Where tradition meets modern luxury in the heart of Viman Nagar.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-24 bg-charcoal bg-texture">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Heritage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                alt="Restaurant Interior" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Our Heritage</h2>
              <div className="text-offwhite/70 font-sans space-y-4">
                <p>
                  Established with a vision to redefine Indian fine dining, Copper Chimney has grown into a landmark of culinary excellence in Viman Nagar.
                </p>
                <p>
                  Our journey began with a simple belief: that Indian cuisine, with its vast complexity of spices and techniques, deserves to be presented in an environment of absolute luxury and sophistication.
                </p>
                <p>
                  We source the finest ingredients from across the subcontinent, from the saffron of Kashmir to the pepper of Malabar, ensuring that every dish tells a story of authentic regional heritage.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <motion.div
              className="lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" 
                alt="Chef Cooking" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              className="lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Culinary Philosophy</h2>
              <div className="text-offwhite/70 font-sans space-y-4">
                <p>
                  At Copper Chimney, we believe in the art of slow cooking. Our master chefs employ traditional techniques such as Dum Pukht (slow oven cooking) and authentic tandoor preparations to extract the deepest flavors.
                </p>
                <p>
                  Every spice blend is roasted and ground in-house daily. Our commitment to quality means no shortcuts, no artificial flavors, and an unwavering dedication to the craft of Indian gastronomy.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
