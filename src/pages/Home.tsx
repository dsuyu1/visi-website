import { Link } from 'react-router-dom';
import { Shield, ChevronRight, Terminal, Server, Lock, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40 bg-white">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#D95D39]/5 opacity-80"></div>
        
        {/* Grid with plus signs */}
        <div className="absolute inset-0 grid-bg opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight font-display">
              Training the next generation <br className="hidden md:block" />
              of <span className="text-[#D95D39]">cyber warriors.</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Empowering the next generation of cybersecurity professionals through hands-on lab experience, threat intelligence research, and advanced security operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://lab.vaqueroisi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Member Login <ChevronRight className="h-5 w-5" />
              </a>
              <Link
                to="/docs"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-8 py-4 rounded-md font-bold text-lg transition-all shadow-sm"
              >
                View our Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vaquero Labs Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Vaquero Labs</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Threat intelligence and research
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Improve your security program with emergent threat response, proprietary intelligence, research, and adversary insights - all curated by Vaquero Labs and deployed across our portfolio of solutions and services.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[#D95D39] font-bold hover:text-[#E66A46] transition-colors uppercase tracking-wide text-sm"
              >
                Get Insights <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#D95D39]/30 hover:shadow-md transition-all">
                <Terminal className="h-8 w-8 text-[#D95D39] mb-4" />
                <h4 className="text-gray-900 font-bold mb-2">Offensive Security</h4>
                <p className="text-gray-500 text-sm">Red team operations and penetration testing methodologies.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#D95D39]/30 hover:shadow-md transition-all">
                <Shield className="h-8 w-8 text-[#D95D39] mb-4" />
                <h4 className="text-gray-900 font-bold mb-2">Defensive Ops</h4>
                <p className="text-gray-500 text-sm">Blue team tactics, incident response, and threat hunting.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#D95D39]/30 hover:shadow-md transition-all">
                <Server className="h-8 w-8 text-[#D95D39] mb-4" />
                <h4 className="text-gray-900 font-bold mb-2">Infrastructure</h4>
                <p className="text-gray-500 text-sm">Enterprise-grade lab environment for realistic simulations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#D95D39]/30 hover:shadow-md transition-all">
                <Activity className="h-8 w-8 text-[#D95D39] mb-4" />
                <h4 className="text-gray-900 font-bold mb-2">Threat Intel</h4>
                <p className="text-gray-500 text-sm">Analyzing emerging threats and adversary behaviors.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights / Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Insights</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Stay in the know and ahead of threats
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Analyzing the Latest Ransomware Tactics in 2026",
                category: "Threat Intel",
                date: "March 2, 2026",
                image: "https://picsum.photos/seed/cyber1/800/600?blur=2"
              },
              {
                title: "Building a Zero Trust Architecture in the Lab",
                category: "Infrastructure",
                date: "February 28, 2026",
                image: "https://picsum.photos/seed/network/800/600?blur=2"
              },
              {
                title: "Evasion Techniques: Bypassing Modern EDRs",
                category: "Red Team",
                date: "February 15, 2026",
                image: "https://picsum.photos/seed/hacker/800/600?blur=2"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#D95D39] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#D95D39] transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-[#D95D39] transition-colors"
            >
              View all insights <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Videos Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Training</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 font-display">
                Latest Workshop Recordings
              </h3>
            </div>
            <Link
              to="/workshops"
              className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-[#D95D39] transition-colors whitespace-nowrap"
            >
              View all workshops <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mx-auto mb-4"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We haven't recorded any workshops yet, but we will be recording our first one this week! Check back soon for the video.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#D95D39]/5 opacity-80"></div>
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Get Started</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-display">
              Ready to join <br className="hidden md:block" />
              the <span className="text-[#D95D39]">initiative?</span>
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-sm"
              >
                Let's Talk
              </Link>
              <Link
                to="/blog"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-8 py-4 rounded-md font-bold text-lg transition-all shadow-sm"
              >
                Read blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
