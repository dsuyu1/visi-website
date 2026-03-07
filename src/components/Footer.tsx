import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import visiLogo from '../assets/VISI_logos/visi-logo-horizontal.png';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            
            {/* Replaced Shield and Text with Logo Image */}
            <Link to="/" className="flex items-center group mb-6">
              <img 
                src={visiLogo} 
                alt="VISI Logo" 
                className="h-8 w-auto scale-125 origin-left group-hover:opacity-80 transition-all duration-200" 
              />
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed">
              Vaquero Information Security Initiative. Empowering students with hands-on cybersecurity experience and threat intelligence research.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/dsuyu1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#D95D39] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/dsuyu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#D95D39] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 uppercase text-sm tracking-wider">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-gray-600 hover:text-[#D95D39] text-sm transition-colors">Documentation</Link></li>
              <li><a href="https://lab.vaqueroisi.org" className="text-gray-600 hover:text-[#D95D39] text-sm transition-colors">Lab Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 uppercase text-sm tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-[#D95D39] text-sm transition-colors">Security Blog</Link></li>
              <li><Link to="/workshops" className="text-gray-600 hover:text-[#D95D39] text-sm transition-colors">Workshops</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 uppercase text-sm tracking-wider">About Us</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-[#D95D39] text-sm transition-colors">Our Mission</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-[#D95D39] text-sm transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#D95D39] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vaquero Information Security Initiative. A non-profit student organization.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-500 hover:text-[#D95D39] text-sm transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-gray-500 hover:text-[#D95D39] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}