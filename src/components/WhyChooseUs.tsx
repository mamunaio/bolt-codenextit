import { DollarSign, Zap, Globe as Globe2, Users, Headphones as HeadphonesIcon, Award } from 'lucide-react';

const REASONS = [
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Packages designed for the Bangladesh market. Get a professional website without breaking the bank.',
    highlight: 'Starting from ৳8,000',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Most websites are completed within 7–14 days. We respect your time and your business deadlines.',
    highlight: '7–14 Day Delivery',
  },
  {
    icon: Globe2,
    title: 'বাংলা + English Support',
    description: 'We communicate in both Bangla and English. No language barrier — we understand your needs clearly.',
    highlight: 'Bilingual Support',
  },
  {
    icon: Users,
    title: 'Local Business Experience',
    description: 'We have worked with restaurants, clinics, shops, schools, and service businesses across Bangladesh.',
    highlight: '3+ Years Locally',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Call or WhatsApp us anytime. We are always available to help you with your website needs.',
    highlight: 'Direct Access',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Every website we build is tested, responsive, and optimized before handover. No compromise on quality.',
    highlight: '100% Satisfaction',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wide uppercase border border-blue-500/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Built for Bangladesh. <br className="hidden md:block" />
            <span className="text-blue-400">Trusted by Local Businesses.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We understand the local market, local customers, and what it takes to succeed online in Bangladesh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/8 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-400 mb-1">{reason.highlight}</div>
                    <h3 className="text-base font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-2xl p-8 text-center">
          <p className="text-white text-xl md:text-2xl font-bold mb-2">
            Ready to grow your business online?
          </p>
          <p className="text-slate-400 text-sm mb-6">Get a free consultation — no commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+8801234567890"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Call Us Now: +880 1234-567890
            </a>
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              WhatsApp Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
