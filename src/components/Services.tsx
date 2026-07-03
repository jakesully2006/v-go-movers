import { Truck, Map, Briefcase, Factory, PackageCheck, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Freight Coordination',
    description: 'End-to-end planning and coordination for commercial shipments that need reliable execution and clear communication.',
  },
  {
    icon: Map,
    title: 'Intercity Logistics',
    description: 'Seamless freight movement across cities and states through a trusted network of verified transport partners.',
  },
  {
    icon: PackageCheck,
    title: 'Shipment Planning',
    description: 'Route, timing, and carrier planning designed to keep every movement efficient, safe, and predictable.',
  },
  {
    icon: Truck,
    title: 'Carrier Allocation',
    description: 'Matching each shipment with the most suitable transport partner based on cargo type, volume, and delivery needs.',
  },
  {
    icon: Factory,
    title: 'Industrial Logistics',
    description: 'Specialized freight support for factories, warehouses, engineering firms, and large-scale industrial cargo.',
  },
  {
    icon: HeadphonesIcon,
    title: 'End-to-End Freight Management',
    description: 'Complete oversight from booking and communication to delivery confirmation and client support.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-orange-600"></span>
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Core Capabilities</h2>
            <span className="w-8 h-0.5 bg-orange-600"></span>
          </div>
          <h3 className="text-4xl font-bold mb-6 tracking-tight">Professional Logistics Coordination</h3>
          <p className="text-slate-400 text-lg">
            We exclusively serve commercial and industrial clients, managing the complexities of supply chain transportation so you can focus on your core business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-slate-800/50 p-8 rounded-sm border border-slate-700 hover:border-orange-500 transition-colors group">
                <div className="w-14 h-14 bg-slate-800 rounded-sm flex items-center justify-center mb-6 border border-slate-700 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                  <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium">
            <span className="text-orange-500 font-bold uppercase mr-2">Note:</span>
            We do not provide household shifting, residential relocation, local moving, office relocation, packing, or unpacking services.
          </p>
        </div>
      </div>
    </section>
  );
}
