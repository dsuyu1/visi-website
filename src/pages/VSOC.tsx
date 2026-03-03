import { motion } from 'motion/react';
import { Activity, ShieldAlert, Crosshair, Server } from 'lucide-react';

export default function VSOC() {
  const features = [
    {
      title: "Simulated Organic Traffic",
      description: "Our environment continuously generates realistic user activity, making it challenging to differentiate between normal behavior and malicious anomalies.",
      icon: <Activity className="h-6 w-6 text-[#D95D39]" />
    },
    {
      title: "Real-Life Events",
      description: "We inject actual threat scenarios and vulnerabilities into the network, providing hands-on experience with the latest attack vectors.",
      icon: <ShieldAlert className="h-6 w-6 text-[#D95D39]" />
    },
    {
      title: "Threat Hunting & Analysis",
      description: "Members utilize enterprise-grade SIEMs and EDRs like Wazuh to actively search for indicators of compromise and analyze advanced persistent threats.",
      icon: <Crosshair className="h-6 w-6 text-[#D95D39]" />
    },
    {
      title: "Incident Response",
      description: "Practice the full incident response lifecycle, from detection and containment to eradication and recovery, in a safe, controlled environment.",
      icon: <Server className="h-6 w-6 text-[#D95D39]" />
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#D95D39]/5 opacity-80"></div>
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-display">
              Virtual <span className="text-[#D95D39]">SOC</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A state-of-the-art simulation environment designed to replicate the operations, challenges, and tools of a real-world Security Operations Center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VSOC Description */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">The Platform</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Training the next generation of cyber warriors
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                The Virtual SOC (VSOC) is the core of VISI's hands-on training methodology. It is a comprehensive, simulated network environment that mirrors the complexity and scale of modern enterprise infrastructures.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We use the VSOC for threat hunting, incident response, threat analysis, intelligence gathering, and real-life threat modeling. It serves as a crucial practice ground for our client engagements, allowing our members to experience what a real SOC does on a daily basis before they enter the workforce.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D95D39]/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/seed/vsoc/800/600?blur=1" 
                alt="Virtual SOC Environment" 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Capabilities</h2>
            <h3 className="text-3xl font-bold text-gray-900 font-display">What happens in the VSOC</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#D95D39]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
