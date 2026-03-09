import { motion } from 'motion/react';
import { Activity, ShieldAlert, Crosshair, Server, ChevronRight, Users, ShieldCheck, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import vsocImage from '../assets/vsoc/kevin-horvat-Pyjp2zmxuLk-unsplash.jpg';
import imgHeroStudents from '../assets/vsoc/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import imgClassroom from '../assets/vsoc/kenny-eliason-1-aA2Fadydc-unsplash.jpg';

export default function VSOC() {
  const features = [
    {
      title: "Simulated Organic Traffic",
      description: "Our environment continuously generates realistic user activity, making it challenging to differentiate between normal behavior and malicious anomalies.",
      icon: <Activity className="h-6 w-6 text-[#D95D39]" />
    },
    {
      title: "Realistic Simulations",
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
      
      {/* Hero Section with Photo Background */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHeroStudents} 
            alt="Students collaborating with laptops" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-widest mb-6">
              <Users className="h-4 w-4 text-[#D95D39]" />
              In-House, Student-Led
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-display drop-shadow-lg">
              Virtual <span className="text-[#D95D39]">SOC</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
              A state-of-the-art simulation environment designed to replicate the operations, challenges, and tools of a real-world Security Operations Center.
            </p>
            
            {/* Link to Lab Environment */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://lab.vaqueroisi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(217,93,57,0.4)] hover:shadow-[0_0_30px_rgba(217,93,57,0.6)] border border-[#D95D39]"
              >
                Access Lab Dashboard <ChevronRight className="h-5 w-5" />
              </a>
              <Link
                to="/docs"
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Read the Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VSOC Description */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">What is it?</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Training the future of cyber defense, together.
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
                src={vsocImage} 
                alt="Virtual SOC Environment" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border border-gray-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid - Dark Mode for Vibrant Contrast */}
      <section className="py-24 bg-gray-900 border-y border-gray-800 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D95D39] opacity-10 blur-[100px] rounded-full translate-x-[-20%] translate-y-[-20%] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D95D39] opacity-10 blur-[100px] rounded-full translate-x-[20%] translate-y-[20%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white font-display">What happens in the VSOC</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#D95D39]/50 shadow-lg hover:shadow-[#D95D39]/10 transition-all group"
              >
                <div className="bg-[#D95D39]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 border border-[#D95D39]/20 group-hover:bg-[#D95D39]/20 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">The Tech Stack</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 font-display">Industry-Standard Tools</h3>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Our lab is built on the same open-source technologies utilized by enterprise security teams worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Wazuh Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#D95D39]/10 rounded-full blur-2xl group-hover:bg-[#D95D39]/20 transition-colors pointer-events-none"></div>
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 relative z-10">
                <ShieldCheck className="h-8 w-8 text-[#D95D39]" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 font-display relative z-10">Wazuh SIEM</h4>
              <p className="text-gray-600 leading-relaxed relative z-10">
                The backbone of our endpoint security. We use Wazuh for log aggregation, File Integrity Monitoring (FIM), vulnerability detection, and real-time threat hunting across our simulated networks.
              </p>
            </motion.div>

            {/* TheHive Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#D95D39]/10 rounded-full blur-2xl group-hover:bg-[#D95D39]/20 transition-colors pointer-events-none"></div>
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 relative z-10">
                <Hexagon className="h-8 w-8 text-[#D95D39]" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 font-display relative z-10">TheHive</h4>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Our central Security Incident Response Platform (SIRP). Analysts use TheHive to ingest alerts from Wazuh, collaborate on investigations, manage casework workflows, and track observables.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classroom CTA - Split layout with vibrant brand color */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-[#D95D39]"
          >
            {/* Photo Side */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[450px]">
              <img 
                src={imgClassroom} 
                alt="Students learning in a classroom" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Text Side (Vibrant Orange) */}
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center text-left relative overflow-hidden">
              {/* Decorative accent graphic */}
              <div className="absolute -right-20 -top-20 w-64 h-64 border-[40px] border-white/10 rounded-full pointer-events-none"></div>

              <h2 className="text-white/80 font-bold tracking-wider uppercase text-sm mb-3">The Community</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display relative z-10">
                From the Cloud to the Classroom
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed relative z-10 font-medium">
                While the VSOC lives in the cloud, our club thrives in person. We pair our virtual infrastructure with weekly workshops and collaborative classroom sessions, ensuring you never have to tackle complex security challenges alone.
              </p>
              <div className="relative z-10">
                <Link 
                  to="/workshops" 
                  className="inline-flex items-center gap-2 bg-white text-[#D95D39] hover:bg-gray-50 px-6 py-3 rounded-md font-bold transition-colors shadow-sm"
                >
                  View Workshop Schedule <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}