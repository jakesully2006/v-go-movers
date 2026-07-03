import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918939121010" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
        aria-label="WhatsApp V-GO Movers"
        title="WhatsApp V-GO Movers"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </span>
      </a>
      
      {/* Call Button */}
      <a 
        href="tel:+918939121010" 
        className="w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
        aria-label="Call V-GO Movers"
        title="Call +91 89391 21010 / +91 76039 67268"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
}
