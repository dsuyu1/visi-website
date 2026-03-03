import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "Analyzing the Latest Ransomware Tactics in 2026",
      category: "Threat Intel",
      date: "March 2, 2026",
      image: "https://picsum.photos/seed/cyber1/800/600?blur=2",
      excerpt: "A deep dive into the evolving strategies used by ransomware operators, focusing on double extortion and novel encryption methods."
    },
    {
      title: "Building a Zero Trust Architecture in the Lab",
      category: "Infrastructure",
      date: "February 28, 2026",
      image: "https://picsum.photos/seed/network/800/600?blur=2",
      excerpt: "Step-by-step guide on how we implemented a zero-trust model within the VISI lab environment using open-source tools."
    },
    {
      title: "Evasion Techniques: Bypassing Modern EDRs",
      category: "Red Team",
      date: "February 15, 2026",
      image: "https://picsum.photos/seed/hacker/800/600?blur=2",
      excerpt: "Exploring advanced techniques for bypassing Endpoint Detection and Response systems, including API unhooking and direct syscalls."
    },
    {
      title: "Incident Response: A Practical Walkthrough",
      category: "Blue Team",
      date: "January 30, 2026",
      image: "https://picsum.photos/seed/server/800/600?blur=2",
      excerpt: "Walking through a simulated incident response scenario in our lab, from detection and containment to eradication and recovery."
    },
    {
      title: "The Rise of AI-Powered Phishing Campaigns",
      category: "Threat Intel",
      date: "January 12, 2026",
      image: "https://picsum.photos/seed/ai/800/600?blur=2",
      excerpt: "Analyzing how adversaries are leveraging generative AI to create highly convincing and targeted phishing emails."
    },
    {
      title: "Securing Active Directory: Common Misconfigurations",
      category: "Infrastructure",
      date: "December 5, 2025",
      image: "https://picsum.photos/seed/ad/800/600?blur=2",
      excerpt: "Identifying and remediating common Active Directory misconfigurations that attackers frequently exploit for privilege escalation."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Security Blog</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-display">
            Insights & Research
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay in the know and ahead of threats with research, analysis, and tutorials from the VISI team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-[#D95D39]/30 transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
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
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-gray-500 text-sm mb-3">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D95D39] transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 text-[#D95D39] font-bold text-sm uppercase tracking-wide group-hover:text-[#E66A46] transition-colors">
                  Read Article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
