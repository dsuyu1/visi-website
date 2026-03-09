import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  ShieldAlert, 
  BookOpen, 
  Video, 
  FileText,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

// Import your new stock images
import imgCompagnons from '../assets/home/compagnons-TlFw-WoI8_w-unsplash.jpg';
import imgNasa from '../assets/home/compagnons-Fa9b57hffnM-unsplash.jpg';
import imgShamin from '../assets/home/shamin-haky-Uhx-gHPpCDg-unsplash.jpg';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#D95D39]/5 opacity-80"></div>
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
              Empowering students through hands-on Virtual SOC experience, pro-bono community consulting, and comprehensive security operations training.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://lab.vaqueroisi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-md hover:shadow-lg"
              >
                Member Login <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="#explore"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-8 py-4 rounded-md font-bold text-lg transition-all shadow-sm"
              >
                Explore the Initiative
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="explore"></div>

      {/* The Platform: VSOC Section */}
      <section className="py-24 bg-white border-t border-gray-100">
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
                Virtual Security Operations Center
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Vaquero Labs is our enterprise-grade simulation environment. We provide members with access to industry-standard tools like Wazuh SIEM, TheHive, and active vulnerability management platforms.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Students actively engage in defensive blue-team operations, incident response, threat hunting, and intelligence research to build real-world SecOps experience before they ever enter the workforce.
              </p>
              <Link
                to="/vsoc"
                className="inline-flex items-center gap-2 text-[#D95D39] font-bold hover:text-[#E66A46] transition-colors uppercase tracking-wide text-sm"
              >
                Explore Vaquero Labs <ArrowRight className="h-4 w-4" />
              </Link>
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
                src={imgNasa} 
                alt="Global network and satellite data representation" 
                className="relative rounded-2xl shadow-xl object-cover w-full h-[400px] md:h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services: Cyber Clinic Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image is on the left on desktop, top on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/40 to-transparent rounded-2xl transform -translate-x-4 translate-y-4"></div>
              <img 
                src={imgCompagnons} 
                alt="Students helping the community" 
                className="relative rounded-2xl shadow-xl object-cover w-full h-[400px] md:h-[500px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Community Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
                UTRGV Cyber Clinic
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Security shouldn't be a luxury. Our Cyber Clinic initiative connects our highly-trained student analysts with local non-profits, small businesses, and community organizations.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide pro-bono security assessments, log monitoring, and infrastructure auditing to help secure the Rio Grande Valley while giving students invaluable client-facing consulting experience.
              </p>
              <Link
                to="/cyber-clinic"
                className="inline-flex items-center gap-2 text-[#D95D39] font-bold hover:text-[#E66A46] transition-colors uppercase tracking-wide text-sm"
              >
                View Clinic Services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Learning & Resources Hub */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Education</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Resources
            </h3>
            <p className="text-gray-600 text-lg">
              Whether you are completely new to IT or an experienced security analyst, we provide the documentation, curriculum, and workshops you need to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Classroom Card */}
            <Link to="/classroom" className="group bg-gray-50 border border-gray-100 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:border-[#D95D39]/30 transition-all duration-300 flex flex-col items-start text-left">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-[#D95D39]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Classroom</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Step-by-step curriculum covering Networking, Linux, Cloud, and SOC fundamentals.
              </p>
              <span className="text-[#D95D39] font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                Start Learning <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Documentation Card */}
            <Link to="/docs" className="group bg-gray-50 border border-gray-100 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:border-[#D95D39]/30 transition-all duration-300 flex flex-col items-start text-left">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-[#D95D39]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Documentation</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Technical playbooks, lab setup guides, and standard operating procedures for the VSOC.
              </p>
              <span className="text-[#D95D39] font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Docs <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Workshops Card */}
            <Link to="/workshops" className="group bg-gray-50 border border-gray-100 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:border-[#D95D39]/30 transition-all duration-300 flex flex-col items-start text-left">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                <Video className="h-6 w-6 text-[#D95D39]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Workshops</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Check the schedule for our weekly hands-on training sessions, or watch past recordings.
              </p>
              <span className="text-[#D95D39] font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                View Schedule <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Blog Card */}
            <Link to="/blog" className="group bg-gray-50 border border-gray-100 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:border-[#D95D39]/30 transition-all duration-300 flex flex-col items-start text-left">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                <Activity className="h-6 w-6 text-[#D95D39]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Security Blog</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Insights, threat intelligence reports, and research published directly by our students.
              </p>
              <span className="text-[#D95D39] font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Insights <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Summary Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Built by students, <br/>for students.
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are a passionate community of aspiring analysts, engineers, and researchers dedicated to breaking down the barrier to entry in cybersecurity.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Backed by our strategic partners and faculty advisors, we are creating a hub of security excellence in South Texas. 
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-md hover:bg-[#D95D39] transition-colors"
                >
                  Meet the Team
                </Link>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 font-bold px-6 py-3 rounded-md hover:border-[#D95D39] transition-colors"
                >
                  Our Partners
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300/40 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={imgShamin} 
                alt="Cybersecurity students and technology" 
                className="relative rounded-2xl shadow-xl object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Abstract Background element inside the card */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#D95D39]/20 blur-[80px] pointer-events-none"></div>

            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight font-display relative z-10">
              Ready to join the initiative?
            </h3>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Whether you want to learn, collaborate, or need assistance securing your organization, we are here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}