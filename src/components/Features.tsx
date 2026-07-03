import { Network, ShieldCheck, BadgeIndianRupee, LineChart, Clock, Building } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Extensive Partner Network',
    description: 'Access to a vast, verified network of transport operators across the nation.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe Cargo Handling',
    description: 'Strict compliance and safety protocols to ensure your industrial goods are protected.'
  },
  {
    icon: BadgeIndianRupee,
    title: 'Competitive Pricing',
    description: 'Transparent costing with optimized routing to reduce your overall logistics expenditure.'
  },
  {
    icon: LineChart,
    title: 'Professional Management',
    description: 'Data-driven logistics planning minimizing downtime and maximizing operational efficiency.'
  },
  {
    icon: Clock,
    title: 'Timely Coordination',
    description: 'Punctual pickups and deliveries orchestrated by our dedicated logistics support team.'
  },
  {
    icon: Building,
    title: 'Business-Focused',
    description: 'We understand B2B requirements. No household moving distractions—just pure commercial freight.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-orange-600"></span>
                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</h2>
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                The V-GO Advantage
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We act as the reliable bridge between your supply chain requirements and dependable transportation. Partnering with us means zero logistical headaches and complete operational transparency.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-orange-600 transition-colors"
              >
                Let's discuss your requirements
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-50 p-8 rounded-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                    <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6 shadow-sm border border-slate-200">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
