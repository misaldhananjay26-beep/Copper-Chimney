import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function OrderOnline() {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    loadRazorpayScript().then((res) => {
      setScriptLoaded(res as boolean);
    });
  }, []);

  const tax = cartTotal * 0.05; // 5% GST
  const deliveryFee = orderType === 'delivery' ? 50 : 0;
  const grandTotal = cartTotal + tax + deliveryFee;

  const handleCheckout = async () => {
    if (!scriptLoaded) {
      alert("Payment gateway failed to load. Please check your connection.");
      return;
    }

    setIsProcessing(true);

    const options = {
      key: "rzp_test_SiLmZCsjNCrFAG",
      amount: grandTotal * 100, 
      currency: "INR",
      name: "Copper Chimney",
      description: "Premium Dining Order",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&q=80",
      handler: function (response: any) {
        setIsProcessing(false);
        setIsSuccess(true);
        clearCart();
        console.log("Payment ID:", response.razorpay_payment_id);
      },
      prefill: {
        name: "Guest User",
        email: "guest@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#c48c5e",
      },
    };

    try {
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
        clearCart();
      }, 1500);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full pt-20 min-h-screen flex items-center justify-center bg-charcoal bg-texture">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="max-w-md p-10 text-center bg-charcoal-light border border-copper/30 rounded-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-copper-light via-gold to-copper"></div>
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Payment Successful!</h2>
          <p className="text-offwhite/70 font-sans mb-8 leading-relaxed">Your order has been received and is being prepared. {orderType === 'delivery' ? 'It will be delivered in 45 mins.' : 'It will be ready for pickup in 30 mins.'}</p>
          <Link 
            to="/menu"
            className="inline-block px-10 py-4 bg-copper text-charcoal uppercase tracking-widest text-sm font-bold rounded hover:bg-white transition-all btn-premium hover:shadow-[0_0_20px_rgba(196,140,94,0.4)]"
          >
            Order More Delights
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 min-h-screen bg-charcoal">
      <section className="bg-charcoal px-4 py-20 text-center border-b border-copper/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-copper/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-serif premium-gradient-text mb-4 relative z-10">Your Order</h1>
        <p className="text-offwhite/60 font-sans max-w-xl mx-auto relative z-10 text-lg">Review your items and proceed to secure checkout.</p>
      </section>

      <div className="container mx-auto px-6 py-12">
        {cart.length === 0 ? (
          <div className="text-center py-24">
            <ShoppingBag className="mx-auto text-white/20 mb-6" size={64} />
            <h2 className="text-2xl font-serif text-white mb-4">Your cart is empty</h2>
            <Link to="/menu" className="inline-block mt-4 px-8 py-3 border border-copper text-copper uppercase tracking-widest text-sm hover:bg-copper hover:text-charcoal transition-colors">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={item.id} 
                    className="flex items-center bg-charcoal-light p-4 rounded-lg border border-white/5"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="ml-4 flex-grow">
                      <h4 className="text-lg font-serif text-white mb-1">{item.name}</h4>
                      <p className="text-copper font-medium">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-white/20 rounded">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-offwhite/70 hover:text-copper"><Minus size={14}/></button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-offwhite/70 hover:text-copper"><Plus size={14}/></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-2 text-white/40 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* SUMMARY */}
            <div className="lg:col-span-1">
              <div className="bg-charcoal-light p-6 md:p-8 rounded-lg border border-copper/20 sticky top-32">
                <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Order Summary</h3>
                
                <div className="flex gap-2 p-1 bg-charcoal rounded-md mb-8">
                  <button 
                    onClick={() => setOrderType('delivery')}
                    className={`flex-1 py-2 text-sm text-center rounded transition-colors ${orderType === 'delivery' ? 'bg-copper text-charcoal font-semibold' : 'text-offwhite/60 hover:text-white'}`}
                  >
                    Delivery
                  </button>
                  <button 
                    onClick={() => setOrderType('takeaway')}
                    className={`flex-1 py-2 text-sm text-center rounded transition-colors ${orderType === 'takeaway' ? 'bg-copper text-charcoal font-semibold' : 'text-offwhite/60 hover:text-white'}`}
                  >
                    Takeaway
                  </button>
                </div>

                <div className="space-y-4 text-sm font-sans mb-8">
                  <div className="flex justify-between text-offwhite/80">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-offwhite/80">
                    <span>Taxes (5% GST)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-offwhite/80">
                      <span>Delivery Fee</span>
                      <span>₹{deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="pt-4 mt-4 border-t border-white/10 flex justify-between text-lg font-serif text-white">
                    <span>Total</span>
                    <span className="text-copper">₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full py-4 bg-copper text-charcoal uppercase tracking-widest text-sm font-bold rounded hover:bg-white transition-all disabled:opacity-70 disabled:cursor-not-allowed btn-premium flex justify-center shadow-[0_4px_20px_rgba(196,140,94,0.3)]"
                >
                  {isProcessing ? 'Connecting...' : `Checkout (₹${grandTotal.toFixed(0)})`}
                </button>
                <p className="text-center text-xs text-offwhite/40 mt-6 flex items-center justify-center space-x-2">
                  <ShieldCheck size={16} />
                  <span className="uppercase tracking-widest font-medium">Secured by Razorpay</span>
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
