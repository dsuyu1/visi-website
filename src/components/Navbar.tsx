import { Link } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, LogIn, MessageSquare, Search, Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would route to a search results page
      console.log('Searching for:', searchQuery);
      alert(`Search feature coming soon! You searched for: ${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'} px-4 sm:px-6 lg:px-8`}>
      <nav className={`max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 relative ${scrolled ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] py-0.5' : 'shadow-sm py-1'}`}>
        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl z-50 flex items-center px-4 sm:px-6 lg:px-8 shadow-md border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSearch} className="flex-1 flex items-center gap-3">
              <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search VISI..."
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </form>
          </div>
        )}

        <div className={`px-4 sm:px-6 lg:px-8 ${searchOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-opacity duration-200`}>
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <Shield className="h-6 w-6 text-[#D95D39] group-hover:text-[#E66A46] transition-colors" />
                <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white font-display uppercase">
                  VISI
                </span>
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
                  <div className="absolute left-0 mt-3 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 top-full before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                    <Link to="/vsoc" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800">Virtual SOC</Link>
                  </div>
                </div>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display flex items-center gap-1 py-1">
                    Services <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute left-0 mt-3 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 top-full before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                    <Link to="/cyber-clinic" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800">Cyber Clinic</Link>
                  </div>
                </div>

                {/* Resources Dropdown */}
                <div className="relative group">
                  <button className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display flex items-center gap-1 py-1">
                    Resources <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute left-0 mt-3 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 top-full before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                    <Link to="/blog" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800">Security Blog</Link>
                    <Link to="/workshops" className="block px-4 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-600 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800">Workshops</Link>
                  </div>
                </div>

                <Link to="/partners" className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display py-1">Partners</Link>
                <Link to="/about" className="nav-link-animated text-xs font-bold uppercase tracking-widest font-display py-1">About Us</Link>
              </div>
              
              <div className="flex items-center space-x-4 border-l border-gray-200 dark:border-gray-800 pl-6">
                <button
                  onClick={toggleTheme}
                  className="text-gray-500 hover:text-[#D95D39] dark:text-gray-400 dark:hover:text-[#D95D39] transition-colors flex items-center gap-2"
                  title="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setSearchOpen(true)}
                  className="text-gray-500 hover:text-[#D95D39] dark:text-gray-400 dark:hover:text-[#D95D39] transition-colors flex items-center gap-2"
                  title="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-[#D95D39] dark:text-gray-400 dark:hover:text-[#D95D39] transition-colors flex items-center gap-2"
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
                onClick={toggleTheme}
                className="text-gray-600 dark:text-gray-400 hover:text-[#D95D39] focus:outline-none"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 rounded-b-2xl">
            <div className="px-4 pt-2 pb-4 space-y-1">
              
              {/* Mobile Platform */}
              <div>
                <button 
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex justify-between w-full px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 dark:text-gray-300 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  Platform <ChevronDown className={`h-4 w-4 transform transition-transform ${mobilePlatformOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobilePlatformOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link to="/vsoc" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Virtual SOC</Link>
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div>
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between w-full px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 dark:text-gray-300 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  Services <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link to="/cyber-clinic" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Cyber Clinic</Link>
                  </div>
                )}
              </div>

              {/* Mobile Resources */}
              <div>
                <button 
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex justify-between w-full px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 dark:text-gray-300 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  Resources <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <Link to="/blog" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Security Blog</Link>
                    <Link to="/workshops" className="block px-3 py-2 text-xs font-bold uppercase tracking-wider font-display text-gray-500 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Workshops</Link>
                  </div>
                )}
              </div>

              <Link to="/partners" className="block px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 dark:text-gray-300 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Partners</Link>
              <Link to="/about" className="block px-3 py-2 text-xs font-bold uppercase tracking-widest font-display text-gray-700 dark:text-gray-300 hover:text-[#D95D39] dark:hover:text-[#D95D39] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">About Us</Link>
              
              <div className="border-t border-gray-100 dark:border-gray-800 mt-4 pt-4 flex justify-around">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39]"
                >
                  <Search className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-display">Search</span>
                </button>
                <Link
                  to="/contact"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-[#D95D39] dark:hover:text-[#D95D39]"
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
