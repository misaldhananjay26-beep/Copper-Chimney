import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-3xl text-copper mb-4 uppercase tracking-wider">Copper Chimney</h3>
            <p className="text-offwhite/60 text-sm leading-relaxed mb-6 font-sans">
              Experience the grand culinary heritage of India in a luxurious setting in Viman Nagar. An unforgettable dining experience awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-copper hover:border-copper transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-copper hover:border-copper transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-copper hover:border-copper transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-offwhite/60 hover:text-copper transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6 font-semibold">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/reservation" className="text-offwhite/60 hover:text-copper transition-colors text-sm">Table Reservation</Link>
              </li>
              <li>
                <Link to="/order" className="text-offwhite/60 hover:text-copper transition-colors text-sm">Order Online</Link>
              </li>
              <li>
                <Link to="#" className="text-offwhite/60 hover:text-copper transition-colors text-sm">Private Dining</Link>
              </li>
              <li>
                <Link to="#" className="text-offwhite/60 hover:text-copper transition-colors text-sm">Catering</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white mb-6 font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-offwhite/60 text-sm">
                <MapPin size={16} className="text-copper mr-3 mt-1 shrink-0" />
                <span>Phoenix Marketcity, Viman Nagar, Pune, Maharashtra 411014</span>
              </li>
              <li className="flex items-center text-offwhite/60 text-sm">
                <Phone size={16} className="text-copper mr-3 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-offwhite/60 text-sm">
                <Mail size={16} className="text-copper mr-3 shrink-0" />
                <span>reservations@copperchimneyviman.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Copper Chimney. All Rights Reserved.
          </p>
          <p className="text-xs text-white/40 uppercase tracking-widest">
            Developed by <span className="text-copper">Dhananjay Misal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
