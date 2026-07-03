import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

type ContactFormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
};

const initialFormState: ContactFormState = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (field: keyof ContactFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName || !form.companyName || !form.phone || !form.email || !form.message) {
      setStatus('error');
      setFeedback('Please complete all required fields before submitting.');
      return;
    }

    setStatus('success');
    setFeedback('Thank you. Our team will review your message and get back to you soon.');
    setForm(initialFormState);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-orange-600"></span>
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Contact Us</h2>
            <span className="w-8 h-0.5 bg-orange-600"></span>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Get In Touch</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Office Address</h4>
                <p className="text-slate-600 leading-relaxed">
                  Plot 103<br />
                  Ring Road Housing Sector<br />
                  Madhavaram<br />
                  Chennai, Greater Chennai<br />
                  Tamil Nadu - 600060
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Phone Numbers</h4>
                <p className="text-slate-600 font-medium">
                  +91 89391 21010<br />
                  +91 76039 67268
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Email Address</h4>
                <a href="mailto:vgomovers@gmail.com" className="text-slate-600 hover:text-orange-600 transition-colors font-medium">
                  vgomovers@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Business Hours</h4>
                <p className="text-slate-600">
                  Open 24x7
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Proprietors</h4>
              <p className="text-slate-600 font-medium">Divaakar.V &amp; Jayakumar.V</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-sm border border-slate-200 shadow-lg bg-white">
              <div className="px-6 py-4 border-b border-slate-100">
                <h4 className="text-lg font-bold text-slate-900">Find Us On The Map</h4>
                <p className="text-sm text-slate-600">Plot 103, Ring Road Housing Sector, Madhavaram, Chennai</p>
              </div>
              <iframe
                title="V-GO Movers office location"
                src="https://www.google.com/maps?q=Plot%20103%2C%20Ring%20Road%20Housing%20Sector%2C%20Madhavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600060&output=embed"
                className="h-[340px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-slate-900 text-white rounded-sm p-8 md:p-10 shadow-2xl">
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-3">Send us a message</h4>
                <p className="text-slate-400">
                  Tell us about your transport requirements and we&apos;ll respond with the right next step.
                </p>
              </div>

              {status !== 'idle' && (
                <div
                  className={`mb-6 flex items-start gap-3 rounded-sm border p-4 text-sm ${
                    status === 'success'
                      ? 'border-green-500/30 bg-green-500/10 text-green-200'
                      : 'border-red-500/30 bg-red-500/10 text-red-200'
                  }`}
                >
                  {status === 'success' ? <CheckCircle2 className="mt-0.5 h-5 w-5" /> : <AlertCircle className="mt-0.5 h-5 w-5" />}
                  <span>{feedback}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.fullName}
                      onChange={handleChange('fullName')}
                      className="w-full bg-slate-800 border border-slate-700 rounded-sm py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-2">Company Name *</label>
                    <input
                      required
                      type="text"
                      value={form.companyName}
                      onChange={handleChange('companyName')}
                      className="w-full bg-slate-800 border border-slate-700 rounded-sm py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="ABC Industries Ltd."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-2">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="w-full bg-slate-800 border border-slate-700 rounded-sm py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      className="w-full bg-slate-800 border border-slate-700 rounded-sm py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="vgomovers@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    className="w-full bg-slate-800 border border-slate-700 rounded-sm py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="Tell us about your shipment, destination, timeline, and any special requirements."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-sm font-bold tracking-wide hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20 flex justify-center items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
