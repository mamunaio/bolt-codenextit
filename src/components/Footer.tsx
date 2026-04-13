import { Phone, Mail, MapPin, MessageCircle, Facebook, Linkedin } from 'lucide-react';

const SERVICES_LINKS = [
  'Website Design',
  'E-commerce Website',
  'SEO Services',
  'Website Maintenance',
  'UI/UX Design',
  'Graphics Design',
];

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">CN</span>
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-black text-white tracking-tight">CODE NEXT</span>
                <span className="block text-xs font-semibold text-blue-400 tracking-widest uppercase">IT Solution</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Affordable website design and digital services for businesses in Bangladesh. We help you grow online.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+8801234567890" className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                +880 1234-567890
              </a>
              <a
                href="https://wa.me/8801234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm hover:text-green-400 transition-colors"
              >
                <MessageCircle size={14} className="text-green-400 flex-shrink-0" />
                WhatsApp Chat
              </a>
              <a href="mailto:info@codenextit.com" className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                info@codenextit.com
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Get Started</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Ready to build your website? Contact us today for a free consultation.
            </p>
            <a
              href="https://wa.me/8801234567890?text=Hi%2C%20I%20need%20a%20website%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors mb-3 w-full"
            >
              <MessageCircle size={15} />
              WhatsApp Free Consultation
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Send a Message
            </button>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Code Next IT Solution. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Dhaka, Bangladesh &nbsp;|&nbsp; বাংলাদেশের নির্ভরযোগ্য আইটি সমাধান
          </p>
        </div>
      </div>
    </footer>
  );
}
