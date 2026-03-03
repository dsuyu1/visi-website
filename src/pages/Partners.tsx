import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

export default function Partners() {
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
              About our <span className="text-[#D95D39]">Partners</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders and organizations to provide our members with the best resources, networking opportunities, and real-world experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Statement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Our Partner</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
                RGV Cyber
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                RGV Cyber is a premier cybersecurity organization dedicated to fostering talent and building a strong security community in the Rio Grande Valley. Their expertise and support have been instrumental in the growth of VISI.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Through our partnership, we are able to offer our members exclusive access to workshops, guest speakers, and collaborative projects that bridge the gap between academic learning and industry practice.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#D95D39]/10 p-2 rounded-lg">
                    <Handshake className="h-6 w-6 text-[#D95D39]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Collaboration</h4>
                    <p className="text-sm text-gray-500 mt-1">Joint events and shared resources.</p>
                  </div>
                </div>
              </div>
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
                src="https://picsum.photos/seed/rgvcyber/800/600?blur=1" 
                alt="RGV Cyber Partnership" 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
