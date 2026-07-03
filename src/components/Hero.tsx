import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-banner.svg" 
          alt="Commercial freight truck and logistics hub" 
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Reliable Pan India <br />
              <span className="text-orange-600">Freight Coordination</span> <br />
              for Businesses.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              We connect businesses with a trusted network of transport partners, managing every stage of your industrial and commercial logistics across India with precision and transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#quote" 
                className="inline-flex justify-center items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/30 group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-sm font-bold tracking-wide hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
              >
                <PhoneCall className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Bottom Graphic */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 120 1200 120z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
