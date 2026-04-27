import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: yBg, opacity: opacityBg }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Fine Dining" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/80 bg-gradient-to-b from-charcoal/40 via-charcoal/80 to-charcoal"></div>
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-6 flex items-center justify-center space-x-4">
            <span className="w-12 h-[1px] bg-copper/50"></span>
            <span className="text-copper uppercase tracking-[0.4em] text-xs md:text-sm font-semibold">Welcome to</span>
            <span className="w-12 h-[1px] bg-copper/50"></span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-[7rem] font-serif premium-gradient-text mb-6 leading-[1.1] drop-shadow-2xl">
            Copper Chimney
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-2xl text-offwhite/90 font-sans font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the grand culinary heritage of India in an atmosphere of spectacular luxury.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/reservation" className="w-full sm:w-auto px-10 py-4 bg-copper text-charcoal uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(196,140,94,0.3)] transition-all btn-premium text-center">
              Book a Table
            </Link>
            <Link to="/menu" className="w-full sm:w-auto px-10 py-4 border border-copper/50 text-copper uppercase tracking-[0.15em] text-sm hover:bg-copper hover:text-charcoal transition-all duration-500 text-center relative overflow-hidden group">
              <span className="relative z-10 font-medium">View Menu</span>
              <div className="absolute inset-0 bg-copper transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10"
        >
          <span className="text-offwhite/40 uppercase tracking-[0.3em] text-[10px] mb-3">Scroll</span>
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
            <motion.div 
              className="w-full bg-copper absolute top-0 left-0"
              animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* BRAND INTRO */}
      <section className="py-24 bg-charcoal bg-texture">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-copper tracking-[0.2em] uppercase text-sm font-semibold mb-4">Our Heritage</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white">A Symphony of Flavors</h3>
              <p className="text-offwhite/70 leading-relaxed font-sans mb-6">
                For over a decade, Copper Chimney has been synonymous with the rich, authentic flavors of North India. Our master recipes have been passed down through generations, bringing you the true essence of royal Indian banquets.
              </p>
              <p className="text-offwhite/70 leading-relaxed font-sans mb-8">
                Every dish is crafted with precision, using hand-picked spices and the freshest ingredients, cooked to perfection in traditional clay ovens to deliver an experience that delights all senses.
              </p>
              <Link to="/about" className="inline-flex items-center text-copper hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
                Discover Our Story <ChevronRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 border border-copper/30 rounded-t-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800" 
                alt="Signature Dish" 
                className="w-full h-[600px] object-cover rounded-t-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-copper tracking-[0.2em] uppercase text-sm font-semibold mb-4">Culinary Masterpieces</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Signature Dishes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dal Makhani",
                desc: "Black lentils slow-cooked overnight with fresh cream and butter.",
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=600"
              },
              {
                name: "Butter Chicken",
                desc: "Classic tandoori chicken cooked in a rich, velvety tomato and butter gravy.",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600"
              },
              {
                name: "Dum Gosht Biryani",
                desc: "Tender lamb layered with fragrant basmati rice, slow-cooked in a sealed pot.",
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=600"
              }
            ].map((dish, i) => (
              <motion.div 
                key={dish.name}
                className="group cursor-pointer card-hover-effect border border-white/5 bg-charcoal-light rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="overflow-hidden relative">
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
                  <img src={dish.image} alt={dish.name} className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-serif text-white mb-3">{dish.name}</h4>
                  <p className="text-offwhite/60 font-sans">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu" className="inline-block px-8 py-4 border border-copper text-copper uppercase tracking-widest text-sm hover:bg-copper hover:text-charcoal transition-colors">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* AMBIENCE */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600" 
            alt="Restaurant Ambience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <Star className="text-copper mx-auto mb-6" size={32} />
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">An Atmosphere of Unrivaled Elegance</h3>
          <p className="text-lg text-offwhite/80 font-sans italic mb-10">
            Step into a world where contemporary luxury meets traditional warmth. Our dining spaces are designed to provide the perfect backdrop for intimate dinners, family celebrations, and business gatherings.
          </p>
          <Link to="/gallery" className="inline-block px-8 py-4 bg-white text-charcoal uppercase tracking-widest text-sm font-semibold hover:bg-copper hover:text-white transition-colors">
            View Gallery
          </Link>
        </div>
      </section>

      {/* LOCATION & INFO PREVIEW */}
      <section className="py-24 bg-charcoal bg-texture">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          <motion.div 
            className="py-8 lg:py-0 px-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}
          >
            <Clock className="mx-auto text-copper mb-6" size={32} strokeWidth={1.5} />
            <h4 className="text-xl font-serif text-white mb-4">Opening Hours</h4>
            <p className="text-offwhite/60 mb-2">Mon - Sun</p>
            <p className="text-offwhite">12:00 PM - 3:30 PM</p>
            <p className="text-offwhite mb-4">7:00 PM - 11:30 PM</p>
          </motion.div>

          <motion.div 
            className="py-8 lg:py-0 px-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }}
          >
            <MapPin className="mx-auto text-copper mb-6" size={32} strokeWidth={1.5} />
            <h4 className="text-xl font-serif text-white mb-4">Our Location</h4>
            <p className="text-offwhite/80 leading-relaxed mb-4">
              Level 3, Phoenix Marketcity,<br/>
              Viman Nagar, Pune,<br/>
              Maharashtra 411014
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-copper uppercase tracking-widest text-xs hover:text-white transition-colors pb-1 border-b border-copper">Get Directions</a>
          </motion.div>

          <motion.div 
            className="py-8 lg:py-0 px-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.4 }}
          >
            <Phone className="mx-auto text-copper mb-6" size={32} strokeWidth={1.5} />
            <h4 className="text-xl font-serif text-white mb-4">Reservations</h4>
            <p className="text-offwhite/60 mb-2">For bookings & inquiries</p>
            <p className="text-2xl text-copper font-serif mb-4">+91 98765 43210</p>
            <Link to="/reservation" className="text-white uppercase tracking-widest text-xs hover:text-copper transition-colors pb-1 border-b border-white">Book Online</Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
