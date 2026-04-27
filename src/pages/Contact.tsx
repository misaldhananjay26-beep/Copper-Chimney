import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="w-full pt-20 min-h-screen bg-charcoal">
      <section className="bg-charcoal px-4 py-20 text-center border-b border-copper/10 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-copper/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-serif premium-gradient-text mb-4 relative z-10">Contact Us</h1>
        <p className="text-offwhite/60 font-sans max-w-xl mx-auto relative z-10 text-lg">We'd love to hear from you. Get in touch for bookings, private events, or general inquiries.</p>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Reach Out</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <MapPin className="text-copper mr-4 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-serif text-white mb-1">Location</h4>
                  <p className="text-offwhite/70 font-sans leading-relaxed">Level 3, Phoenix Marketcity,<br/>Viman Nagar, Pune,<br/>Maharashtra 411014</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-copper mr-4 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-serif text-white mb-1">Phone</h4>
                  <p className="text-offwhite/70 font-sans">+91 98765 43210</p>
                  <p className="text-offwhite/70 font-sans">+91 12345 67890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-copper mr-4 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-serif text-white mb-1">Email</h4>
                  <p className="text-offwhite/70 font-sans">reservations@copperchimneyviman.in</p>
                  <p className="text-offwhite/70 font-sans">info@copperchimneyviman.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-copper mr-4 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-serif text-white mb-1">Hours</h4>
                  <p className="text-offwhite/70 font-sans">Lunch: 12:00 PM - 3:30 PM (Daily)</p>
                  <p className="text-offwhite/70 font-sans">Dinner: 7:00 PM - 11:30 PM (Daily)</p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="w-full h-48 bg-charcoal-light border border-white/10 rounded-lg flex items-center justify-center grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
               <span className="text-offwhite/40 uppercase tracking-widest text-sm">Interactive Map Loaded Here</span>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-charcoal-light p-8 md:p-10 border border-white/5 rounded-lg"
          >
            <h2 className="text-3xl font-serif text-white mb-8 border-b border-copper/20 pb-4">Send a Message</h2>
            
            {success ? (
              <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded">
                Thank you! Your message has been sent. We will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-offwhite/70 text-xs uppercase tracking-widest mb-2">Name</label>
                  <input required type="text" className="w-full bg-charcoal border border-white/20 text-white px-4 py-3 focus:border-copper outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-offwhite/70 text-xs uppercase tracking-widest mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-charcoal border border-white/20 text-white px-4 py-3 focus:border-copper outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-charcoal border border-white/10 text-white px-4 py-3 focus:border-copper outline-none transition-colors rounded-sm" />
                </div>
                <div>
                  <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2">Message</label>
                  <textarea required rows={5} className="w-full bg-charcoal border border-white/10 text-white px-4 py-3 focus:border-copper outline-none transition-colors rounded-sm"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-copper text-charcoal uppercase tracking-[0.2em] text-sm font-bold shadow-[0_0_15px_rgba(196,140,94,0.3)] transition-all btn-premium hover:bg-white rounded-sm mt-4">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
