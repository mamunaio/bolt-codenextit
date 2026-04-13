import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Ronghill Resort & Hotel',
    category: 'Hospitality Website',
    description: 'Modern hotel website with real-time booking system and online reservation management.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Design', 'Booking System'],
  },
  {
    title: 'Gadget Star E-commerce',
    category: 'Online Store',
    description: 'Full-featured multi-vendor e-commerce platform for electronics and gadgets.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['E-commerce', 'Multi-vendor'],
  },
  {
    title: 'HostOrient Hosting',
    category: 'Tech Company',
    description: 'Professional hosting service provider website with modern UI/UX design.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Design', 'UI/UX'],
  },
  {
    title: 'PIHSP School Website',
    category: 'Education',
    description: 'Smart school website with student portal, notice board, and online admission system.',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Education', 'Portal'],
  },
  {
    title: 'LawFirm Attorney Website',
    category: 'Legal Services',
    description: 'Professional law firm website to attract clients and showcase legal expertise.',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Professional', 'Services'],
  },
  {
    title: 'Local Restaurant Website',
    category: 'Food & Dining',
    description: 'Beautiful restaurant website with digital menu, gallery, and online table booking.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Restaurant', 'Local Business'],
  },
];

export default function Portfolio() {
  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Real Projects. Real Results.
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some of the websites we have built for businesses just like yours. Every project is crafted with care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <ExternalLink size={14} className="text-gray-700" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Want a website like these for your business?</p>
          <button
            onClick={handleScroll}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
