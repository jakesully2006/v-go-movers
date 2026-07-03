import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-1 group cursor-pointer mb-6 inline-flex bg-white px-4 py-2 rounded-lg">
      <img
        src="/logo.png"
        alt="V-GO Movers Logo"
        className="h-12 w-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-8 border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              Professional logistics coordination and freight management for commercial and industrial businesses across India.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-orange-500 transition-colors text-sm">About Company</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors text-sm">Our Services</a></li>
              <li><a href="#industries" className="hover:text-orange-500 transition-colors text-sm">Industries We Serve</a></li>
              <li><a href="#workflow" className="hover:text-orange-500 transition-colors text-sm">How We Work</a></li>
              <li><a href="#quote" className="hover:text-orange-500 transition-colors text-sm">Request a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-orange-500 transition-colors text-sm">Freight Coordination</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors text-sm">Full Truck Load (FTL)</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors text-sm">Commercial Logistics</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors text-sm">End-to-End Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=Plot%20103%2C%20Ring%20Road%20Housing%20Sector%2C%20Madhavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600060&output=embed"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Plot 103, Ring Road Housing Sector, Madhavaram, Chennai, Tamil Nadu - 600060
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">+91 89391 21010</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <a href="mailto:vgomovers@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  vgomovers@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <a
                  href="https://share.google/Ds26vw8Uhp4enhci3"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Google Maps location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} V-GO Movers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>

          <button
            onClick={scrollToTop}
            className="absolute -top-5 right-0 md:relative md:top-auto w-10 h-10 bg-slate-800 hover:bg-orange-600 text-white rounded-sm flex items-center justify-center transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
