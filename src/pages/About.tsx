import { motion } from 'motion/react';
import { Target, Users, Shield, Award } from 'lucide-react';

export default function About() {
  const leaders = [
    {
      name: "Alex Rivera",
      role: "President & Founder",
      bio: "Cybersecurity enthusiast with a focus on offensive security and red teaming. Leading the initiative to build a robust virtual SOC.",
      image: "https://picsum.photos/seed/leader1/400/400?blur=2"
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      bio: "Specializes in threat intelligence and incident response. Passionate about mentoring new students in blue team tactics.",
      image: "https://picsum.photos/seed/leader2/400/400?blur=2"
    },
    {
      name: "Marcus Johnson",
      role: "Director of Operations",
      bio: "Infrastructure architect managing Vaquero Labs. Ensures our environments are secure, scalable, and realistic.",
      image: "https://picsum.photos/seed/leader3/400/400?blur=2"
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Researcher",
      bio: "Focuses on vulnerability research and exploit development. Regularly publishes findings on our security blog.",
      image: "https://picsum.photos/seed/leader4/400/400?blur=2"
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
              About <span className="text-[#D95D39]">VISI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a student-led organization dedicated to advancing cybersecurity education through hands-on experience and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Our Mission</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Empowering the next generation of cyber defenders
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                The Vaquero Information Security Initiative (ISI) was founded with a singular goal: to bridge the gap between theoretical knowledge and practical cybersecurity skills. We believe that the best way to learn security is by doing it.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Through our student-run Virtual SOC (Vaquero Labs), we provide members with enterprise-grade tools and realistic environments to practice offensive and defensive operations, conduct threat intelligence research, and prepare for careers in the rapidly evolving cyber landscape.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#D95D39]/10 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-[#D95D39]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Hands-on Learning</h4>
                    <p className="text-sm text-gray-500 mt-1">Real-world scenarios and labs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#D95D39]/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-[#D95D39]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Community</h4>
                    <p className="text-sm text-gray-500 mt-1">Collaborative research and networking.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D95D39]/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/seed/cybersecurity/800/1000?blur=2" 
                alt="Students collaborating in a lab" 
                className="relative rounded-2xl shadow-lg object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet our Leaders */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Leadership</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Meet our Leaders
            </h3>
            <p className="text-gray-600 text-lg">
              The dedicated students driving the Vaquero Information Security Initiative forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-[#D95D39]/30 transition-all group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                  <p className="text-[#D95D39] text-sm font-bold uppercase tracking-wider mb-4">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
