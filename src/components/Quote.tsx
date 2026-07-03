import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

type QuoteFormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  pickupCity: string;
  deliveryCity: string;
  goodsCategory: string;
  approximateWeight: string;
  preferredTransport: string;
  pickupDate: string;
  notes: string;
};

const initialFormState: QuoteFormState = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  pickupCity: '',
  deliveryCity: '',
  goodsCategory: 'Industrial Equipment',
  approximateWeight: '',
  preferredTransport: 'Full Truck Load (FTL)',
  pickupDate: '',
  notes: '',
};

export default function Quote() {
  const [form, setForm] = useState<QuoteFormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof QuoteFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const requiredFields: Array<[keyof QuoteFormState, string]> = [
      ['fullName', 'Full name'],
      ['companyName', 'Company name'],
      ['phone', 'Phone number'],
      ['email', 'Email address'],
      ['pickupCity', 'Pickup city'],
      ['deliveryCity', 'Delivery city'],
      ['pickupDate', 'Pickup date'],
    ];

    const missingField = requiredFields.find(([field]) => !form[field].trim());
    if (missingField) {
      setIsSubmitted(false);
      setError(`Please enter your ${missingField[1].toLowerCase()} before submitting.`);
      return;
    }

    setIsSubmitted(true);
    setForm(initialFormState);
    window.setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="quote" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')] opacity-5 bg-cover bg-center mix-blend-luminosity"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Request a Quote</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Need Freight Coordination?
          </h3>
          <p className="text-slate-400 text-lg">
            Provide your shipment details below and our logistics team will get back to you with a competitive estimate.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-16 flex flex-col items-center">
              <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted Successfully</h4>
              <p className="text-slate-600">Our logistics team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.fullName}
                    onChange={handleChange('fullName')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company Name *</label>
                  <input
                    required
                    type="text"
                    value={form.companyName}
                    onChange={handleChange('companyName')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="ABC Industries Ltd."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="+91 89391 21010"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="vgomovers@gmail.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Pickup City *</label>
                  <input
                    required
                    type="text"
                    value={form.pickupCity}
                    onChange={handleChange('pickupCity')}
                    className="w-full bg-white border border-slate-200 rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-orange-500 transition-all"
                    placeholder="Chennai"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Delivery City *</label>
                  <input
                    required
                    type="text"
                    value={form.deliveryCity}
                    onChange={handleChange('deliveryCity')}
                    className="w-full bg-white border border-slate-200 rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-orange-500 transition-all"
                    placeholder="Bengaluru"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Goods Category</label>
                  <select
                    value={form.goodsCategory}
                    onChange={handleChange('goodsCategory')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 transition-all"
                  >
                    <option>Industrial Equipment</option>
                    <option>FMCG</option>
                    <option>Raw Materials</option>
                    <option>Fertilizers</option>
                    <option>Other Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Approx. Weight (Tons)</label>
                  <input
                    type="number"
                    value={form.approximateWeight}
                    onChange={handleChange('approximateWeight')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 transition-all"
                    placeholder="e.g. 15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Transport</label>
                  <select
                    value={form.preferredTransport}
                    onChange={handleChange('preferredTransport')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 transition-all"
                  >
                    <option>Full Truck Load (FTL)</option>
                    <option>Not Sure - Please Advise</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Pickup Date *</label>
                  <input
                    required
                    type="date"
                    value={form.pickupDate}
                    onChange={handleChange('pickupDate')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Transport Snapshot</label>
                  <div className="rounded-sm border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    {form.preferredTransport}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={handleChange('notes')}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  placeholder="Any specific requirements regarding the shipment..."
                />
              </div>

              <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-sm font-bold tracking-wide hover:bg-slate-900 transition-colors shadow-lg shadow-orange-600/20 flex justify-center items-center gap-2">
                <Send className="w-5 h-5" />
                SUBMIT QUOTE REQUEST
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
