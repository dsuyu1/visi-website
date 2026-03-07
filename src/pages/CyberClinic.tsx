import { motion } from 'motion/react';
import { Shield, Users, BookOpen, Target, CheckCircle2, ArrowRight, Briefcase, Lock, Rocket, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CyberClinic() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-36 lg:pb-28 bg-white transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#D95D39]/5 opacity-80"></div>
        <div className="absolute inset-0 grid-bg opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight font-display">
              UTRGV <span className="text-[#D95D39]">Cyber Clinic</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Providing pro bono cybersecurity assistance to critical public infrastructure and community organizations. In partnership with the Vaquero Information Security Initiative (VISI), we shift the focus of cybersecurity from protecting assets to protecting people, attracting diverse talent from all backgrounds to gain hands-on practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              What We Do
            </h3>
            <p className="text-gray-600 text-lg">
              We bridge the gap between student education and community needs by providing essential cybersecurity services to those who need them most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-[#D95D39]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-[#D95D39]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Peer-Led Instruction</h4>
              <p className="text-gray-600">
                Operating as a year-round internship (typically 1–6 hours per week), our clinic utilizes a decentralized, mentor-supported, peer-led model driven by experienced student leaders under faculty guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-[#D95D39]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-[#D95D39]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Hands-on Practice</h4>
              <p className="text-gray-600">
                Students are prepared with practical, hands-on experience through our Virtual Security Operations Center (VSOC), simulated assignments, and VISI workshops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-[#D95D39]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7 text-[#D95D39]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community Service</h4>
              <p className="text-gray-600">
                We connect trained students to local businesses, non-profits, and organizations to provide free, critical cybersecurity services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Identifying a Niche</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Who We Serve
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our focus is on enhancing the critical infrastructure security of under-resourced stakeholders across the Rio Grande Valley (RGV). We aim to help those who cannot afford an in-house or outsourced cyber team.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Local municipalities and government agencies",
                  "School corporations and educational institutions",
                  "Small businesses in the RGV",
                  "Non-profits and community organizations",
                  "Hospitals and healthcare facilities",
                  "Local libraries and public services"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#D95D39] shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://picsum.photos/seed/community/800/600" 
                  alt="Community Support" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <Target className="h-8 w-8 text-[#D95D39]" />
                  <h4 className="font-bold text-gray-900">Pro Bono Assistance</h4>
                </div>
                <p className="text-sm text-gray-600">Providing critical public infrastructure with the defense they deserve.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Partners Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Leadership & Partners
            </h3>
            <p className="text-gray-600 text-lg">
              The Cyber Clinic is backed by dedicated faculty and strong local partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sergei Chuprov",
                role: "Lead Faculty Advisor",
                desc: "Assistant Professor in CS. Research focuses on ML Applications Robustness & Security, Data Quality, and Cyber-Physical Systems.",
                icon: Award
              },
              {
                name: "Dr. Lucas Hall",
                role: "Faculty Advisor",
                desc: "Supporting faculty member bringing academic rigor and mentorship to the clinic's operations.",
                icon: Award
              },
              {
                name: "RGV Cyber",
                role: "Local Partner",
                desc: "Partnering with current professionals to ensure our students receive industry-relevant guidance.",
                icon: Briefcase
              },
              {
                name: "VISI",
                role: "Recruitment & Support",
                desc: "The Vaquero Information Security Initiative serves as our recruitment pipeline and provides interdisciplinary support.",
                icon: Users
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
              >
                <div className="bg-[#D95D39]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-[#D95D39]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h4>
                <p className="text-[#D95D39] text-sm font-bold mb-3 uppercase tracking-wider">{item.role}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Education</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Student Curriculum & Training
            </h3>
            <p className="text-gray-400 text-lg">
              We tailor our curriculum to our services and target organizations, drawing inspiration from leading public-interest cybersecurity programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-[#D95D39]" />
                Training Structure
              </h4>
              <div className="space-y-6 text-gray-300">
                <p>
                  <strong>VISI's Virtual Security Operations Center (VSOC):</strong> Provides hands-on technical practice before real engagements.
                </p>
                <p>
                  <strong>VISI Workshops:</strong> Weekly technical deep-dives and labs (e.g., setting up a SOC environment, interpreting EDR logs, and vulnerability scanning with OpenVAS). Workshops are mandatory for student participants, but flexible for club members.
                </p>
                <p>
                  <strong>Exclusive Clinic Sessions:</strong> We host workshops and client meetings that are exclusive to participants of the clinic to ensure confidentiality and focused learning.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-[#D95D39]" />
                8-Week Curriculum
              </h4>
              <div className="space-y-4">
                {[
                  { week: "Week 1", title: "Intro to Public-Interest Cybersecurity" },
                  { week: "Week 2", title: "Threats to Civil Society" },
                  { week: "Week 3", title: "Meet the Client & OSINT" },
                  { week: "Week 4", title: "Risk Assessments & Scoring" },
                  { week: "Week 5", title: "Info Gathering & Log Analysis" },
                  { week: "Week 6", title: "Phishing & Human Controls" },
                  { week: "Week 7", title: "Ransomware Response (IR)" },
                  { week: "Week 8", title: "Client Deliverable & Reporting" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <span className="bg-[#D95D39] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                      {item.week}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-800">
            <h4 className="text-xl font-bold mb-6 text-center">Additional Topics Covered</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Ethics and Code of Conduct",
                "Basic Controls (Old School INFOSEC)",
                "Digital Surveillance Threat Landscape",
                "Threat Modeling",
                "Open Source Research Methods & Tools",
                "Adversary Persona Development",
                "Threat Scenario Development",
                "Social Engineering and Phishing",
                "Designing Security Training",
                "Fictional Case Studies",
                "MIT Critical Urban Infrastructure Course",
                "Policy & Cybersecurity Frameworks (NIST CSF, CIS Controls)",
                "Business Administration & Project Management",
                "Legal Studies & Psychological Resilience"
              ].map((topic, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liability & Protection Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Security First</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Liability & Protection
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We understand that our students' actions have real effects on clients. We take rigorous steps to shield both students and host institutions from liability, and to handle client engagements with the utmost integrity.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                    <Briefcase className="h-6 w-6 text-[#D95D39]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Setting Expectations</h4>
                    <p className="text-gray-600 text-sm mt-1">We utilize clear Memorandums of Understanding (MOUs) to establish boundaries and expectations with all clients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                    <Users className="h-6 w-6 text-[#D95D39]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Protecting Student Identities</h4>
                    <p className="text-gray-600 text-sm mt-1">Students may use pseudonyms when working with sensitive clients. We also conduct background checks to vouch for student integrity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                    <Lock className="h-6 w-6 text-[#D95D39]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Secure Communication</h4>
                    <p className="text-gray-600 text-sm mt-1">We enforce strict encryption, data scrubbing (removing client names from final reports), and never publicly release information about a client's vulnerabilities.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6 font-display flex items-center gap-3">
                <Rocket className="h-6 w-6 text-[#D95D39]" />
                The Pilot Program
              </h4>
              <p className="text-gray-600 mb-6">
                Before our official launch, we are running a controlled pilot program to refine our curriculum and engagement model.
              </p>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {[
                  { title: "Recruit a Small Cohort", desc: "Select 4-7 dedicated students from VISI for close faculty mentorship." },
                  { title: "Target Limited Clients", desc: "Engage with 1-2 small local non-profits to limit liability exposure." },
                  { title: "Execute Focused Training", desc: "First 6 weeks dedicated to core training (NIST CSF, engagement frameworks)." },
                  { title: "Simulate Full Engagement", desc: "Perform a limited-scope risk/vulnerability assessment." },
                  { title: "Collect Feedback", desc: "Structured debriefing to rapidly iterate and refine the clinic model." }
                ].map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#D95D39] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                      {index + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                      <h5 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h5>
                      <p className="text-xs text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assignments Section */}
      <section className="py-20 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 transition-colors duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Practical Experience</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                  Project-Based Assignments
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  We take a project and team-based approach to assignments. These deliverables give students practical, hands-on practice prior to real client engagements and mirror real-world SOC workflows.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-[#D95D39]" />
                    </div>
                    <span className="text-gray-700 font-medium">Threat Actor Mapping & Kill Chain Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-[#D95D39]" />
                    </div>
                    <span className="text-gray-700 font-medium">Simulated Risk & Vulnerability Assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-[#D95D39]" />
                    </div>
                    <span className="text-gray-700 font-medium">SIEM Log Triage & Incident Response Tabletop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-[#D95D39]" />
                    </div>
                    <span className="text-gray-700 font-medium">Client-Facing Executive Reporting</span>
                  </li>
                </ul>

                <h4 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mt-10 mb-3">Tools & Frameworks</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-[#D95D39]" />
                    </div>
                    <span className="text-gray-700 font-medium"><strong>Frameworks:</strong> NIST Cybersecurity Framework (CSF) and CIS Critical Security Controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-[#D95D39]" />
                    </div>
                    <span className="text-gray-700 font-medium"><strong>Software:</strong> Vulnerability scanners, EDR, SIEM, and Risk Management tools</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Ready to get involved?</h4>
                  <p className="text-gray-600 text-center mb-8">
                    Whether you're a student looking to gain experience or an organization in need of assistance.
                  </p>
                  <div className="space-y-4">
                    <Link
                      to="/contact"
                      className="flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-6 py-3 rounded-md font-bold transition-all w-full"
                    >
                      Contact Us <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="https://lab.vaqueroisi.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 px-6 py-3 rounded-md font-bold transition-all w-full"
                    >
                      Student Login
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}