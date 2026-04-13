import { CheckCircle, ArrowRight } from 'lucide-react';

const PLANS = [
  {
    name: 'Basic',
    price: '৳8,000',
    usd: '~$75',
    description: 'Perfect for small businesses, freelancers, and personal brands getting started online.',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form',
      'Basic SEO setup',
      'Google Maps integration',
      '1 month free support',
    ],
    notIncluded: ['E-commerce features', 'Advanced SEO', 'Custom animations'],
    cta: 'Get Basic Plan',
    highlight: false,
    badge: null,
  },
  {
    name: 'Standard',
    price: '৳18,000',
    usd: '~$165',
    description: 'Ideal for growing businesses that need a feature-rich website to stand out from competitors.',
    features: [
      'Up to 10 pages',
      'Mobile responsive design',
      'Blog / News section',
      'Advanced SEO setup',
      'Social media integration',
      'WhatsApp chat widget',
      'Speed optimization',
      '3 months free support',
    ],
    notIncluded: ['Online payment gateway', 'Product catalog'],
    cta: 'Get Standard Plan',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '৳35,000',
    usd: '~$320',
    description: 'Full-featured solution for businesses ready to sell online and dominate their market.',
    features: [
      'Unlimited pages',
      'E-commerce store',
      'Online payment (bKash / Card)',
      'Product catalog & inventory',
      'Order management system',
      'Advanced SEO + Analytics',
      'Speed & performance optimization',
      '6 months free support',
    ],
    notIncluded: [],
    cta: 'Get Premium Plan',
    highlight: false,
    badge: 'Best Value',
  },
];

export default function Pricing() {
  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Clear Prices. No Hidden Fees.
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the package that fits your business. All prices include design, development, and launch. Pay once.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? 'border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                  : 'border-gray-200 bg-white hover:border-blue-200'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full ${
                  plan.highlight ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                    {plan.usd}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-blue-200' : 'text-blue-600'}`}
                    />
                    <span className={`text-sm ${plan.highlight ? 'text-blue-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleScroll}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <p className="text-gray-600 text-sm">
            Need a custom solution? Have a specific budget?{' '}
            <button
              onClick={handleScroll}
              className="text-blue-600 font-semibold hover:underline"
            >
              Contact us for a custom quote
            </button>{' '}
            — we always find the best option for you.
          </p>
        </div>
      </div>
    </section>
  );
}
