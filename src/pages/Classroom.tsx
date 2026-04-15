import { Link } from 'react-router-dom';
import { BookOpen, Wrench, ArrowLeft } from 'lucide-react';

export default function Classroom() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center bg-[#D95D39]/10 p-4 rounded-2xl mb-8">
          <Wrench className="h-10 w-10 text-[#D95D39]" />
        </div>

        <h2 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">
          Classroom
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-display">
          Work in Progress
        </h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Our classroom curriculum is still being built. Check back soon — we're
          putting together a hands-on, public-interest cybersecurity program we're
          excited to share.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex justify-center items-center gap-2 bg-[#D95D39] hover:bg-[#E66A46] text-white px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wide transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <Link
            to="/workshops"
            className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wide transition-colors"
          >
            <BookOpen className="h-4 w-4" /> Browse Workshops
          </Link>
        </div>
      </div>
    </div>
  );
}
