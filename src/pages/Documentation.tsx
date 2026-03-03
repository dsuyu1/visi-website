import { motion } from 'motion/react';
import { BookOpen, Server, Shield, Terminal, Network, Key } from 'lucide-react';

export default function Documentation() {
  const sections = [
    {
      title: "Lab Architecture",
      icon: <Network className="h-6 w-6 text-[#D95D39]" />,
      description: "Overview of the VISI lab network topology, including DMZ, internal networks, and segmentation strategies.",
      link: "#architecture"
    },
    {
      title: "Getting Started",
      icon: <Terminal className="h-6 w-6 text-[#D95D39]" />,
      description: "How to connect to the lab environment using VPN, setting up your Kali Linux VM, and accessing target machines.",
      link: "#getting-started"
    },
    {
      title: "Authentication",
      icon: <Key className="h-6 w-6 text-[#D95D39]" />,
      description: "Details on Keycloak integration, SSO setup, and managing your VISI credentials.",
      link: "#authentication"
    },
    {
      title: "Offensive Security Tools",
      icon: <Shield className="h-6 w-6 text-[#D95D39]" />,
      description: "Documentation on the pre-installed tools available in the lab, including Metasploit, Nmap, and Burp Suite.",
      link: "#offensive-tools"
    },
    {
      title: "Defensive Monitoring",
      icon: <Server className="h-6 w-6 text-[#D95D39]" />,
      description: "How to access and query the SIEM, view IDS/IPS alerts, and monitor network traffic within the lab.",
      link: "#defensive-monitoring"
    },
    {
      title: "Rules of Engagement",
      icon: <BookOpen className="h-6 w-6 text-[#D95D39]" />,
      description: "Important guidelines and acceptable use policies for operating within the VISI lab environment.",
      link: "#rules"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Documentation</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-display">
            Lab Resources
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about navigating, utilizing, and learning within the VISI lab environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#D95D39]/30 transition-all group cursor-pointer"
            >
              <div className="bg-gray-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 border border-gray-100 group-hover:border-[#D95D39]/50 transition-colors">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#D95D39] transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {section.description}
              </p>
              <a
                href={section.link}
                className="text-[#D95D39] font-bold text-sm uppercase tracking-wide hover:text-[#E66A46] transition-colors"
              >
                Read Docs &rarr;
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] bg-[#D95D39] opacity-5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">Ready to jump in?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Access the lab environment using your VISI credentials. Ensure you are connected to the campus network or VPN before attempting to log in.
          </p>
          <a
            href="https://lab.vaqueroisi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-sm"
          >
            Login to Lab
          </a>
        </div>
      </div>
    </div>
  );
}
