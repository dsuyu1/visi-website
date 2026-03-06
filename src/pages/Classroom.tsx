import React, { useState } from 'react';
import { BookOpen, ChevronRight, FileText } from 'lucide-react';

// Sample data structure for your modules and lessons
const courseData = [
  {
    id: 'module-1',
    title: 'Module 1: Intro to Cybersecurity',
    lessons: [
      { id: 'm1-l1', title: 'What is InfoSec?', content: 'Introduction to information security principles, CIA triad, and basic terminology.' },
      { id: 'm1-l2', title: 'Threat Actors', content: 'Understanding different types of threat actors: script kiddies, hacktivists, organized crime, and APTs.' },
    ]
  },
  {
    id: 'module-2',
    title: 'Module 2: Networking Basics',
    lessons: [
      { id: 'm2-l1', title: 'OSI Model', content: 'Deep dive into the 7 layers of the OSI model and how data moves through a network.' },
      { id: 'm2-l2', title: 'TCP/IP Protocol Suite', content: 'Understanding IPv4/IPv6, TCP vs UDP, and common ports.' },
    ]
  },
  {
    id: 'module-3',
    title: 'Module 3: Command Line Basics',
    lessons: [
      { id: 'm3-l1', title: 'Linux Navigation', content: 'Essential Linux commands: ls, cd, pwd, grep, and file permissions.' },
      { id: 'm3-l2', title: 'Windows PowerShell', content: 'Basic PowerShell cmdlets for system administration and enumeration.' },
    ]
  }
];

export default function Classroom() {
  const [activeLesson, setActiveLesson] = useState(courseData[0].lessons[0]);
  const [openModules, setOpenModules] = useState<string[]>([courseData[0].id]);

  // Toggle accordion for modules
  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // --- NAVIGATION LOGIC ---
  
  // 1. Create a flat array of all lessons to easily find previous/next index
  const flatLessons = courseData.flatMap(module => 
    module.lessons.map(lesson => ({ ...lesson, moduleId: module.id }))
  );

  // 2. Find where we currently are
  const currentIndex = flatLessons.findIndex(l => l.id === activeLesson.id);
  
  // 3. Determine if there is a previous or next lesson available
  const prevLesson = currentIndex > 0 ? flatLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : null;

  // 4. Handle button clicks
  const navigateToLesson = (targetLesson: typeof flatLessons[0]) => {
    // Set the new lesson text/content
    setActiveLesson(targetLesson);
    
    // Ensure the module for this lesson is expanded in the sidebar
    if (!openModules.includes(targetLesson.moduleId)) {
      setOpenModules(prev => [...prev, targetLesson.moduleId]);
    }

    // Scroll back to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 flex-shrink-0 border-r border-gray-200 pr-6">
        <div className="sticky top-28">
          <div className="flex items-center gap-2 mb-6 px-2">
            <BookOpen className="h-5 w-5 text-[#D95D39]" />
            <h2 className="text-lg font-bold text-gray-900 font-display uppercase tracking-tight">Classroom</h2>
          </div>
          
          <nav className="space-y-4">
            {courseData.map((module) => (
              <div key={module.id} className="space-y-1">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-bold text-gray-900 hover:text-[#D95D39] transition-colors rounded-md hover:bg-gray-50"
                >
                  <span className="text-left">{module.title}</span>
                  <ChevronRight 
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${openModules.includes(module.id) ? 'rotate-90' : ''}`} 
                  />
                </button>
                
                {/* Lesson Links */}
                {openModules.includes(module.id) && (
                  <div className="pl-4 space-y-1 mt-1">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson)}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
                          activeLesson.id === lesson.id
                            ? 'bg-[#D95D39]/10 text-[#D95D39] font-semibold'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <FileText className="h-3 w-3 flex-shrink-0" />
                        <span className="text-left">{lesson.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 pb-20">
        <div className="prose prose-blue max-w-none">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 font-display">
              {activeLesson.title}
            </h1>
          </div>
          
          <div className="text-gray-700 leading-relaxed space-y-6 min-h-[40vh]">
            <p className="text-lg">
              {activeLesson.content}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lesson Notes</h3>
              <p className="text-sm text-gray-600">
                This area can be expanded to include code snippets, video embeds, or markdown content for the specific lesson.
              </p>
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            {prevLesson ? (
              <button 
                onClick={() => navigateToLesson(prevLesson)}
                className="text-sm font-bold text-gray-500 hover:text-[#D95D39] transition-colors flex items-center gap-1 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> 
                {prevLesson.title}
              </button>
            ) : (
              <div></div> /* Empty div to keep flex-between alignment if there is no previous lesson */
            )}

            {nextLesson ? (
              <button 
                onClick={() => navigateToLesson(nextLesson)}
                className="text-sm font-bold text-[#D95D39] hover:text-[#E66A46] transition-colors flex items-center gap-1 group"
              >
                {nextLesson.title} 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            ) : (
              <span className="text-sm font-bold text-gray-400">Course Complete 🎉</span>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}