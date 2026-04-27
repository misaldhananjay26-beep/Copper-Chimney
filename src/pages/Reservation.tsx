import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users } from 'lucide-react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full pt-20 min-h-screen flex items-center justify-center bg-charcoal bg-texture">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="max-w-md p-8 text-center bg-charcoal-light border border-copper/30 rounded-lg"
        >
          <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-6 text-copper">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Reservation Confirmed</h2>
          <p className="text-offwhite/70 font-sans mb-8">Thank you for booking with Copper Chimney. We have sent the confirmation details to your email and phone.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-copper text-charcoal uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-charcoal transition-colors"
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 min-h-screen bg-charcoal flex flex-col items-center">
      
      <section className="bg-charcoal px-4 py-20 text-center border-b border-copper/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-copper/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-serif premium-gradient-text mb-4 relative z-10">Book a Table</h1>
        <p className="text-offwhite/60 font-sans max-w-xl mx-auto relative z-10 text-lg">Reserve your table to enjoy a grand Indian fine dining experience.</p>
      </section>

      <section className="container mx-auto px-6 py-16 flex justify-center">
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit} 
          className="w-full max-w-3xl bg-charcoal-light p-8 md:p-12 border border-copper/10 shadow-2xl relative overflow-hidden rounded-sm"
        >
          {/* subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h3 className="text-xl font-serif text-white mb-8 border-b border-white/10 pb-4 relative z-10">Reservation Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
            <div>
              <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2 flex items-center"><Calendar size={14} className="mr-2"/> Date</label>
              <input required type="date" className="w-full bg-charcoal border border-white/10 text-white px-4 py-4 hover:border-copper/50 focus:border-copper outline-none transition-colors rounded-sm" />
            </div>
            <div>
              <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2 flex items-center"><Clock size={14} className="mr-2"/> Time</label>
              <select required className="w-full bg-charcoal border border-white/10 text-white px-4 py-4 hover:border-copper/50 focus:border-copper outline-none transition-colors appearance-none rounded-sm">
                <option value="">Select Time</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2 flex items-center"><Users size={14} className="mr-2"/> Guests</label>
              <select required className="w-full bg-charcoal border border-white/10 text-white px-4 py-4 hover:border-copper/50 focus:border-copper outline-none transition-colors appearance-none rounded-sm">
                <option value="">Select Guests</option>
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                   <option key={num} value={num}>{num} Person{num>1?'s':''}</option>
                ))}
              </select>
            </div>
          </div>

          <h3 className="text-xl font-serif text-white mb-8 border-b border-white/10 pb-4 mt-12 relative z-10">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
             <div>
              <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-charcoal border border-white/10 text-white px-4 py-4 hover:border-copper/50 focus:border-copper outline-none transition-colors rounded-sm" />
            </div>
            <div>
              <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2">Phone Number</label>
              <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-charcoal border border-white/10 text-white px-4 py-4 hover:border-copper/50 focus:border-copper outline-none transition-colors rounded-sm" />
             </div>
            <div className="md:col-span-2">
              <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full bg-charcoal border border-white/10 text-white px-4 py-4 hover:border-copper/50 focus:border-copper outline-none transition-colors rounded-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-offwhite/70 text-xs uppercase tracking-[0.2em] mb-2">Special Requests (Optional)</label>
              <textarea rows={3} placeholder="Dietary requirements, anniversary celebration, etc." className="w-full bg-charcoal border border-white/10 text-white px-4 py-4 hover:border-copper/50 focus:border-copper outline-none transition-colors align-top rounded-sm"></textarea>
            </div>
          </div>

          <button type="submit" className="w-full py-5 bg-copper text-charcoal uppercase tracking-[0.2em] text-sm font-bold shadow-[0_0_20px_rgba(196,140,94,0.3)] transition-all btn-premium hover:bg-white rounded-sm mt-4 relative z-10">
            Confirm Reservation
          </button>
        </motion.form>
      </section>
    </div>
  );
}
