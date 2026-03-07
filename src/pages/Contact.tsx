import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  // State to hold form data so we can generate the email
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    phone: '',
    email: '',
    country: '',
    reason: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the email subject and body
    const subject = `VISI Contact Form: ${formData.reason} inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Job Title: ${formData.jobTitle}
Organization: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}

Message:
${formData.message}
`;

    // Open the user's default mail client with the pre-filled information
    window.location.href = `mailto:damian.villarreal01@utrgv.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight font-display">
              Get in Touch with <span className="text-[#D95D39]">VISI</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Have a question about our solutions, need assistance, or have a general inquiry? Fill out the form and we will get back to you.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[#D95D39] pl-4">
                <h3 className="text-gray-900 font-bold text-lg">General Inquiries & Lab Support</h3>
                <a href="mailto:damian.villarreal01@utrgv.edu" className="text-[#D95D39] hover:underline font-medium">
                  damian.villarreal01@utrgv.edu
                </a>
              </div>
              
              <div className="pt-6">
                <h3 className="text-gray-900 font-bold text-lg mb-2">Join our Community</h3>
                <p className="text-gray-600 mb-4">
                  We highly recommend sending inquiries, questions, and comments through our Discord server for the fastest response!
                </p>
                <a 
                  href="https://discord.gg/GzJXDbJrCt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-md font-bold transition-colors shadow-sm"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                  Join our Discord
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input type="text" id="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company / Organization</label>
                  <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Work Phone</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors" required />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                <select id="country" value={formData.country} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors appearance-none" required>
                  <option value="">Select a country...</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Reason for Contact *</label>
                <select id="reason" value={formData.reason} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors appearance-none" required>
                  <option value="">Select a reason...</option>
                  <option value="Community Support / Services">Community Support / Services</option>
                  <option value="Lab Support">Lab Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-colors resize-none" required></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="consultant" type="checkbox" className="w-4 h-4 bg-white border-gray-300 rounded text-[#D95D39] focus:ring-[#D95D39] focus:ring-offset-white" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consultant" className="text-gray-600">I am a student, consultant, partner or organization</label>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#D95D39] hover:bg-[#E66A46] text-white font-bold py-4 px-8 rounded-md transition-colors mt-4">
                Draft Email to VISI
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}