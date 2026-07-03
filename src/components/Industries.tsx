import { 
  Building2, CarFront, HardHat, Cog, 
  ShoppingCart, Store, Shirt, Pill, 
  Wrench, Truck
} from 'lucide-react';

const industries = [
  { icon: Building2, name: 'Manufacturing' },
  { icon: CarFront, name: 'Automotive' },
  { icon: HardHat, name: 'Construction' },
  { icon: Cog, name: 'Engineering' },
  { icon: ShoppingCart, name: 'FMCG' },
  { icon: Store, name: 'Retail' },
  { icon: Shirt, name: 'Fertilizers' },
  { icon: Pill, name: 'Pharmaceuticals' },
  { icon: Wrench, name: 'Industrial Eqpt.' },
  { icon: Truck, name: 'Wholesale' }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-orange-600"></span>
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Industries We Serve</h2>
            <span className="w-8 h-0.5 bg-orange-600"></span>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Driving Supply Chains Across Sectors</h3>
          <p className="text-slate-600 text-lg">
            Our logistics coordination expertise spans across major industrial and commercial sectors, ensuring specialized handling for diverse cargo types.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-100 hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all rounded-sm group cursor-pointer"
              >
                <Icon className="w-10 h-10 text-slate-400 group-hover:text-orange-600 transition-colors mb-4" />
                <span className="text-slate-900 font-bold text-sm text-center">{industry.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
