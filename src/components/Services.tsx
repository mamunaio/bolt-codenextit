import { Globe, ShoppingCart, Search, Settings, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Professional business websites that look great on all devices. Perfect for shops, restaurants, clinics, and more.',
    features: ['Mobile responsive', 'Fast loading', 'SEO ready'],
    color: 'blue',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Website',
    description: 'Sell your products online with a full-featured store. Accept payments, manage orders, and grow your sales.',
    features: ['Product management', 'Secure payments', 'Order tracking'],
    color: 'emerald',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Get found on Google by your local customers. We optimize your website to rank higher in search results.',
    features: ['Keyword research', 'On-page SEO', 'Monthly reports'],
    color: 'orange',
  },
  {
    icon: Settings,
    title: 'Website Maintenance',
    description: 'Keep your website fast, secure, and up-to-date. We handle updates, backups, and technical issues for you.',
    features: ['Regular updates', 'Security checks', '24/7 support'],
    color: 'rose',
  },
];

const COLOR_MAP: Record<string, { bg: string; icon: string; badge: string; feature: string }> = {
  blue: {
    bg: 'bg-blue-50 border-blue-100 hover:border-blue-300',
    icon: 'bg-blue-600 text-white',
    badge: 'text-blue-600',
    feature: 'text-blue-700 bg-blue-50',
  },
  emerald: {
    bg: 'bg-emerald-50 border-emerald-100 hover:border-emerald-300',
    icon: 'bg-emerald-600 text-white',
    badge: 'text-emerald-600',
    feature: 'text-emerald-700 bg-emerald-50',
  },
  orange: {
    bg: 'bg-orange-50 border-orange-100 hover:border-orange-300',
    icon: 'bg-orange-500 text-white',
    badge: 'text-orange-600',
    feature: 'text-orange-700 bg-orange-50',
  },
  rose: {
    bg: 'bg-rose-50 border-rose-100 hover:border-rose-300',
    icon: 'bg-rose-500 text-white',
    badge: 'text-rose-600',
    feature: 'text-rose-700 bg-rose-50',
  },
};

export default function Services() {
  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Services Built for Bangladesh Businesses
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Simple, affordable IT solutions designed to help local businesses get online and grow faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const colors = COLOR_MAP[service.color];
            return (
              <div
                key={service.title}
                className={`group border-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${colors.bg}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.icon}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className={`text-xs font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mr-1 mb-1 ${colors.feature}`}>
                      <span className="w-1 h-1 rounded-full bg-current" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleScroll}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
