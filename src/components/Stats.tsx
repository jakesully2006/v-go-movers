import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { id: 1, value: '10,000+', label: 'Shipments Coordinated' },
  { id: 2, value: '500+', label: 'Business Clients' },
  { id: 3, value: '150+', label: 'Cities Connected' },
  { id: 4, value: '99%', label: 'On-Time Coordination' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white pb-20 pt-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center ${index !== 0 ? 'pl-8 lg:pl-12' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-orange-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
