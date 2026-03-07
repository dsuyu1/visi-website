import { motion } from 'motion/react';
import { Calendar, Video, Clock, MapPin, History } from 'lucide-react';

export default function Workshops() {
  const upcomingSchedule = [
    {
      date: "March 13, 2026",
      time: "2:00 PM - 3:00 PM",
      location: "EIEAB 2.204",
      title: "picoCTF Workshop",
      description: "Join VISI and get hands-on with offensive security.",
      presenter: "Damian Villarreal"
    }
  ];

  const pastSchedule = [
    {
      date: "March 6, 2026",
      time: "2:00 PM - 3:00 PM",
      location: "EIEAB 2.204",
      title: "Vulnerability Management Workshop",
      description: "Port scanning, attack methods, and risk assessment using industry-standard tools.",
      presenter: "Mauricio Martinez"
    }
  ];

  const videos: any[] = [];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#D95D39]/5 opacity-80"></div>
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-display">
              Weekly <span className="text-[#D95D39]">Workshops</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us every week for hands-on training sessions covering various cybersecurity topics. Open to all members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Schedule Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="h-8 w-8 text-[#D95D39]" />
            <h2 className="text-3xl font-bold text-gray-900 font-display">Upcoming Schedule</h2>
          </div>
          
          <div className="space-y-6">
            {upcomingSchedule.length > 0 ? upcomingSchedule.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden"
              >
                {/* Left Accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D95D39]"></div>

                <div className="md:w-1/4 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 pr-4 pl-2">
                  <div className="flex items-center gap-2 text-[#D95D39] font-bold">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-3">{event.description}</p>
                  <p className="text-sm font-medium text-gray-500">Presenter: {event.presenter}</p>
                </div>
              </motion.div>
            )) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-gray-500">No upcoming workshops scheduled at the moment. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Workshops Section */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <History className="h-8 w-8 text-gray-400" />
            <h2 className="text-3xl font-bold text-gray-900 font-display">Past Workshops</h2>
          </div>
          
          <div className="space-y-6 opacity-80">
            {pastSchedule.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 md:items-center"
              >
                <div className="md:w-1/4 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 pr-4">
                  <div className="flex items-center gap-2 text-gray-600 font-bold">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{event.title}</h3>
                  <p className="text-gray-500 mb-3">{event.description}</p>
                  <p className="text-sm font-medium text-gray-400">Presenter: {event.presenter}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Videos Section - Regular Light Theme */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Video className="h-8 w-8 text-[#D95D39]" />
            <h2 className="text-3xl font-bold text-gray-900 font-display">Recorded Workshops</h2>
          </div>
          
          {videos.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          <Video className="h-6 w-6 text-[#D95D39]" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#D95D39] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-500">Recorded on {video.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <button className="bg-white border border-gray-200 hover:border-[#D95D39] text-gray-700 hover:text-[#D95D39] font-bold py-3 px-8 rounded-md transition-colors shadow-sm">
                  View All Recordings
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
              <Video className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We haven't recorded any workshops yet, but we will be recording our first one this week! Check back soon for the video.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}