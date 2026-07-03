import { ClipboardList, Search, Truck, Handshake, Navigation, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Shipment Request',
    description: 'Customer submits cargo details, volume, and destination requirements.'
  },
  {
    icon: Search,
    title: 'Requirement Analysis',
    description: 'Our team analyzes the optimal transport type and routing strategy.'
  },
  {
    icon: Handshake,
    title: 'Carrier Selection',
    description: 'We allocate the shipment to a verified, trusted transport partner.'
  },
  {
    icon: Truck,
    title: 'Freight Booking',
    description: 'Coordination of pickup schedules and formalization of logistics.'
  },
  {
    icon: Navigation,
    title: 'Shipment Tracking',
    description: 'Continuous monitoring and customer updates during transit.'
  },
  {
    icon: CheckCircle2,
    title: 'Timely Delivery',
    description: 'Safe arrival at destination and completion of fulfillment.'
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-orange-600"></span>
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">How We Work</h2>
            <span className="w-8 h-0.5 bg-orange-600"></span>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Coordination Process</h3>
          <p className="text-slate-600 text-lg">
            A streamlined, transparent workflow designed to bridge the gap between your business needs and reliable transportation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-orange-600 z-10 relative">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div className="text-6xl font-black text-slate-200 absolute -top-6 -left-4 select-none pointer-events-none z-0">
                    0{index + 1}
                  </div>
                  {/* Connector line for desktop - hidden on last item of row */}
                  {(index + 1) % 3 !== 0 && index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 right-0 w-[calc(100%-4rem)] h-[2px] border-t-2 border-dashed border-slate-300"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
