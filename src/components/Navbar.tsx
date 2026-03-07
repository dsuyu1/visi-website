import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn, MessageSquare, Search, ArrowRight } from 'lucide-react';
import visiLogo from '../assets/VISI_logos/visi-logo-horizontal.png';

// --- SEARCH INDEX ---
// This acts as the database for our search feature.
const searchIndex = [
  {
    title: "Virtual SOC (VSOC)",
    description: "State-of-the-art simulation environment for threat hunting, incident response, and Wazuh SIEM training.",
    path: "/vsoc",
    keywords: ["lab", "wazuh", "siem", "edr", "traffic", "simulation", "platform"]
  },
  {
    title: "UTRGV Cyber Clinic",
    description: "Providing pro bono cybersecurity assistance and risk assessments to critical public infrastructure.",
    path: "/cyber-clinic",
    keywords: ["pro bono", "community", "service", "liability", "pilot", "services", "nonprofit"]
  },
  {
    title: "Documentation & Lab Resources",
    description: "Lab architecture, getting started guides, tool directories, and rules of engagement.",
    path: "/docs",
    keywords: ["docs", "guide", "setup", "architecture", "rules", "tools", "help", "pfsense", "proxmox"]
  },
  {
    title: "Classroom & Curriculum",
    description: "Our 8-week public-interest cybersecurity training program.",
    path: "/classroom",
    keywords: ["learn", "module", "lesson", "phishing", "ransomware", "risk", "assessment", "education"]
  },
  {
    title: "Workshops",
    description: "Weekly hands-on training sessions, past recordings, and picoCTF labs.",
    path: "/workshops",
    keywords: ["video", "recording", "schedule", "picoctf", "vulnerability", "training"]
  },
  {
    title: "About Us & Leadership",
    description: "Meet the team and learn about the mission behind VISI.",
    path: "/about",
    keywords: ["damian", "villarreal", "sergei", "chuprov", "founder", "advisor", "team", "mission"]
  },
  {
    title: "Partners",
    description: "Our industry collaborators and community sponsors like RGV Cyber.",
    path: "/partners",
    keywords: ["rgv cyber", "collaborators", "sponsors"]
  },
  {
    title: "Contact Us",
    description: "Get in touch with the initiative for collaborations or assistance.",
    path: "/contact",
    keywords: ["email", "reach out", "message", "help"]
  },
  {
    title: "Security Blog",
    description: "Research, threat intel, and insights published directly by our students.",
    path: "/blog",
    keywords: ["article", "post", "news", "research", "insights"]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Search State
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchIndex>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle typing in the search bar
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    // Filter the index based on title, description, or keywords
    const results = searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))
    );
    
    setSearchResults(results);
  };

  // Handle clicking a search result
  const handleResultClick = (path: string) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Handle pressing "Enter"
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0].path);
    }
  };

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'} px-4 sm:px-6 lg:px-8`}>
      <nav className={`max-w-7xl mx-auto bg-white rounded-2xl transition-all duration-300 border border-gray-100 relative ${scrolled ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-0.5' : 'shadow-sm py-1'}`}>
        
        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute inset-0 bg-white rounded-2xl z-50 flex items-center px-4 sm:px-6 lg:px-8 shadow-md border border-gray-100">
            <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center gap-3">
              <Search className="h-5 w-5 text-[#D95D39]" />
              <input
                type="text"
                placeholder="Search VISI..."
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className="text-gray-400 hover:text-gray-600 p-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </form>

            {/* Search Results Dropdown */}
            {searchQuery.trim() !== '' && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-h-[70vh] overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50">
                      Results
                    </div>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.path)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group flex items-center justify-between"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#D95D39] transition-colors">{result.title}</h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-1">{result.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#D95D39] transition-colors transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-8 text-center flex flex-col items-center justify-center">
                    <Search className="h-8 w-8 text-gray-200 mb-3" />
                    <p className="text-sm text-gray-500 font-medium">No results found for "{searchQuery}"</p>
                    <p className="text-xs text-gray-400 mt-1">Try searching for keywords like "lab", "wazuh", or "clinic".</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className={`px-4 sm:px-6 lg:px-8 ${searchOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-opacity duration-200`}>
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <img 
                  src={visiLogo} 
                  alt="VISI Logo" 
                  className="h-8 w-auto scale-125 origin-left group-hover:opacity-80 transition-all duration-200" 
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6 items-center">

                {/* Platform Dropdown */}
                <div className="relative group">
                  <button className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display flex items-center gap-1 py-1">
                    Platform <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute left-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 top-full before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                    <Link to="/vsoc" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 hover:text-[#D95D39] hover:bg-gray-50">Virtual SOC</Link>
                  </div>
                </div>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display flex items-center gap-1 py-1">
                    Services <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute left-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 top-full before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                    <Link to="/cyber-clinic" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 hover:text-[#D95D39] hover:bg-gray-50">Cyber Clinic</Link>
                  </div>
                </div>

                {/* Resources Dropdown */}
                <div className="relative group">
                  <button className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display flex items-center gap-1 py-1">
                    Resources <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute left-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 top-full before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                    <Link to="/docs" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 hover:text-[#D95D39] hover:bg-gray-50">Documentation</Link>
                    <Link to="/blog" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 hover:text-[#D95D39] hover:bg-gray-50">Security Blog</Link>
                    <Link to="/workshops" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 hover:text-[#D95D39] hover:bg-gray-50">Workshops</Link>
                    <Link to="/classroom" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 hover:text-[#D95D39] hover:bg-gray-50">Classroom</Link>
                  </div>
                </div>

                <Link to="/partners" className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display py-1">Partners</Link>
                <Link to="/about" className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display py-1">About Us</Link>
              </div>

              <div className="flex items-center space-x-4 border-l border-gray-200 pl-6">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="text-gray-500 hover:text-[#D95D39] transition-colors flex items-center gap-2"
                  title="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-[#D95D39] transition-colors flex items-center gap-2"
                  title="Contact Us"
                >
                  <MessageSquare className="h-4 w-4" />
                </Link>
                <a
                  href="https://lab.vaqueroisi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D95D39] hover:text-[#E66A46] transition-colors flex items-center gap-2"
                  title="Member Login"
                >
                  <LogIn className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 rounded-b-2xl">
            <div className="px-4 pt-2 pb-4 space-y-1">

              {/* Mobile Platform */}
              <div>
                <button
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex justify-between w-full px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 hover:text-[#D95D39] hover:bg-gray-50 rounded-md"
                >
                  Platform <ChevronDown className={`h-4 w-4 transform transition-transform ${mobilePlatformOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobilePlatformOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link onClick={() => setIsOpen(false)} to="/vsoc" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">Virtual SOC</Link>
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between w-full px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 hover:text-[#D95D39] hover:bg-gray-50 rounded-md"
                >
                  Services <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link onClick={() => setIsOpen(false)} to="/cyber-clinic" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">Cyber Clinic</Link>
                  </div>
                )}
              </div>

              {/* Mobile Resources */}
              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex justify-between w-full px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 hover:text-[#D95D39] hover:bg-gray-50 rounded-md"
                >
                  Resources <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link onClick={() => setIsOpen(false)} to="/docs" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">Documentation</Link>
                    <Link onClick={() => setIsOpen(false)} to="/blog" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">Security Blog</Link>
                    <Link onClick={() => setIsOpen(false)} to="/workshops" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">Workshops</Link>
                    <Link onClick={() => setIsOpen(false)} to="/classroom" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">Classroom</Link>
                  </div>
                )}
              </div>

              <Link onClick={() => setIsOpen(false)} to="/partners" className="block px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">Partners</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="block px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 hover:text-[#D95D39] hover:bg-gray-50 rounded-md">About Us</Link>

              <div className="border-t border-gray-100 mt-4 pt-4 flex justify-around">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex flex-col items-center text-gray-600 hover:text-[#D95D39]"
                >
                  <Search className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-display">Search</span>
                </button>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/contact"
                  className="flex flex-col items-center text-gray-600 hover:text-[#D95D39]"
                >
                  <MessageSquare className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-display">Contact</span>
                </Link>
                <a
                  href="https://lab.vaqueroisi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-[#D95D39] hover:text-[#E66A46]"
                >
                  <LogIn className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-display">Login</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}