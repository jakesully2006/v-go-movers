import { CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    'Professional Freight Coordination',
    'Reliable Transport Network',
    'Business Logistics Solutions',
    'End-to-End Shipment Management',
    'Dedicated Customer Support',
    'Timely Delivery Coordination'
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-slate-900 rounded-sm transform translate-x-4 translate-y-4"></div>
            <img 
              src="/about-warehouse.png" 
              alt="Logistics Coordination Hub" 
              className="relative rounded-sm shadow-xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-orange-600 p-8 rounded-sm shadow-xl hidden md:block">
              <div className="text-4xl font-black text-white mb-1">10+</div>
              <div className="text-sm text-orange-100 font-bold uppercase tracking-wider">Years of<br/>Expertise</div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-orange-600"></span>
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">About V-GO Movers</h2>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Bridging the Gap Between Your Business & Reliable Transport.
            </h3>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At V-GO Movers Pvt. Ltd., we specialize in comprehensive logistics coordination. We do not operate our own trucks; instead, we leverage our extensive network of verified transport partners to bring you optimized, cost-effective, and highly reliable freight management solutions.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              From heavy industrial machinery to commercial retail distribution, we ensure every shipment is planned, allocated, and tracked with professional precision. Your cargo&apos;s safety and timely arrival is our highest priority.
            </p>

            <p className="text-slate-700 font-medium mb-8">
              Led by proprietors <span className="text-slate-900">Divaakar.V.</span> and <span className="text-slate-900">Jayakumar.V.</span>, the company is built to serve businesses that need dependable freight coordination without the overhead of managing their own transport network.
            </p>

            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 shrink-0" />
                  <span className="text-slate-800 font-semibold text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
