import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Let's Build Your Website Today
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Contact us via phone, WhatsApp, or fill the form below. We will get back to you within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-blue-600 text-white rounded-2xl p-7">
              <h3 className="text-lg font-bold mb-1">Call Us Directly</h3>
              <p className="text-blue-200 text-sm mb-4">Available 9 AM – 9 PM, Sat – Thu</p>
              <a
                href="tel:+8801234567890"
                className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-semibold text-base">+880 1234-567890</div>
                  <div className="text-blue-200 text-xs">Tap to call</div>
                </div>
              </a>
            </div>

            <div className="bg-green-600 text-white rounded-2xl p-7">
              <h3 className="text-lg font-bold mb-1">WhatsApp Us</h3>
              <p className="text-green-200 text-sm mb-4">Fastest response — we reply within minutes</p>
              <a
                href="https://wa.me/8801234567890?text=Hi%2C%20I%20want%20a%20free%20consultation%20for%20my%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-green-200 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="font-semibold text-base">Chat on WhatsApp</div>
                  <div className="text-green-200 text-xs">Tap to open chat</div>
                </div>
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Email</div>
                  <a href="mailto:info@codenextit.com" className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    info@codenextit.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Location</div>
                  <span className="text-sm font-semibold text-gray-800">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Thank you for contacting us. We will reach out to you within a few hours.
                  </p>
                  <a
                    href="https://wa.me/8801234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                  >
                    <MessageCircle size={16} />
                    Also WhatsApp us for faster reply
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-100 rounded-2xl p-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rakibul Islam"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+880 1234-567890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-gray-600"
                  >
                    <option value="">Select a service...</option>
                    <option>Website Design</option>
                    <option>E-commerce Website</option>
                    <option>SEO Services</option>
                    <option>Website Maintenance</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What kind of website do you need? Any specific requirements?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message — Get Free Consultation
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">
                  Or{' '}
                  <a
                    href="https://wa.me/8801234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    WhatsApp us directly
                  </a>{' '}
                  for an instant reply
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
