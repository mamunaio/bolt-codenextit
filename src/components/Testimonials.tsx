import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Rakibul Islam',
    role: 'Owner, Dhaka Electronics',
    text: 'Code Next IT made my shop website in just 10 days. Very professional work and they explained everything clearly in Bangla. My online sales have increased since launch.',
    rating: 5,
    avatar: 'R',
    color: '#2563EB',
  },
  {
    name: 'Farida Begum',
    role: 'Principal, Sunrise Academy',
    text: 'They built our school website beautifully. Parents can now check notices and admission forms online. The team was very patient and responsive throughout the project.',
    rating: 5,
    avatar: 'F',
    color: '#059669',
  },
  {
    name: 'Sohel Rana',
    role: 'Founder, TechMart BD',
    text: 'I wanted an e-commerce website with bKash payment. They delivered exactly what I asked within budget. The after-sales support is excellent — they respond on WhatsApp quickly.',
    rating: 5,
    avatar: 'S',
    color: '#D97706',
  },
];

const TRUST_STATS = [
  { value: '20+', label: 'Businesses Served' },
  { value: '3+', label: 'Years in Bangladesh' },
  { value: '100%', label: 'Would Recommend Us' },
  { value: '7–14', label: 'Days Average Delivery' },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
            Client Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Trusted by 20+ Businesses in Bangladesh
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Here is what our clients say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote size={28} className="text-blue-100 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex -space-x-2">
              {['#2563EB', '#059669', '#D97706', '#DC2626', '#7C3AED'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {['R', 'F', 'S', 'A', 'M'][i]}
                </div>
              ))}
            </div>
            <span className="text-gray-600 text-sm font-medium">
              Join <strong>20+ happy businesses</strong> who trust Code Next IT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
