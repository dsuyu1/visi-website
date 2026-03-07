import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function Blog() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-[#D95D39] font-bold tracking-wider uppercase text-sm mb-3">Security Blog</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight font-display">
            Insights & Research
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay in the know and ahead of threats with research, analysis, and tutorials from the VISI team.
          </p>
        </div>

        {/* Coming Soon Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-12 text-center shadow-sm"
        >
          <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Clock className="h-8 w-8 text-[#D95D39]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Coming Soon</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team is currently working on some exciting new research and tutorials. Check back soon for our first publications!
          </p>
        </motion.div>

      </div>
    </div>
  );
}