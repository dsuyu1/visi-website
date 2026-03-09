import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';
import About from './pages/About';
import Partners from './pages/Partners';
import VSOC from './pages/VSOC';
import Workshops from './pages/Workshops';
import CyberClinic from './pages/CyberClinic';
import Classroom from './pages/Classroom';
import ScrollToTop from './components/sneaky';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/vsoc" element={<VSOC />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/cyber-clinic" element={<CyberClinic />} />
            <Route path="/classroom" element={<Classroom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
