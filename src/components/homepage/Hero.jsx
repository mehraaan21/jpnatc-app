import { ArrowRight, Phone, Calendar } from "lucide-react";
import fac1 from "../../assets/fac1.jpg";

export default function Hero() {
  return (
    <section className="relative bg-[#eef7fa] w-full font-sans">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[800px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1920&q=80"
          alt="JPNATC Hospital"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5DBB]/80 via-[#0B5DBB]/60 to-[#0AA6C6]/60"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#0AA6C6] rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">Apex Center of Excellence</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Excellence in{" "}
              <span className="text-[#00d5ff]">Trauma Care</span> &{" "}
              <span className="text-[#00d5ff]">Recovery</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Dedicated to providing high-quality, professional multidisciplinary
              care and rehabilitation to enable optimal recovery of independent function.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#00d5ff] hover:bg-[#0891b2] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0AA6C6]/30">
                Book Appointment
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                <Phone size={20} />
                011-26731237
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Three Info Cards - Overlapping Section */}
      <div className="relative -mt-40 z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Notices Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-b-4 border border-[#0AA6C6] hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#0AA6C6] font-semibold text-lg flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                📢 Notices & Circulars
              </h3>
              <span className="text-[#0AA6C6] text-sm font-medium cursor-pointer hover:underline hover:text-[#0891b2] transition-colors">
                View All
              </span>
            </div>
            <div className="space-y-4">
              <div className="pb-3 border-b border-gray-100 group-hover:border-gray-200 transition-colors">
                <p className="font-medium text-gray-800 text-sm hover:text-[#0AA6C6] cursor-pointer transition-colors group-hover:text-[#0AA6C6]">
                  Precautions against Fire incidents at AIIMS – ADVISORY
                </p>
                <span className="text-gray-400 text-xs">Oct 12, 2023</span>
              </div>
              <div className="pb-3 border-b border-gray-100 group-hover:border-gray-200 transition-colors">
                <p className="font-medium text-gray-800 text-sm hover:text-[#0AA6C6] cursor-pointer transition-colors group-hover:text-[#0AA6C6]">
                  Update on New Patient Registration Portal Guidelines
                </p>
                <span className="text-gray-400 text-xs">Oct 10, 2023</span>
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm hover:text-[#0AA6C6] cursor-pointer transition-colors group-hover:text-[#0AA6C6]">
                  National Trauma Center Annual Report 2023 Released
                </p>
                <span className="text-gray-400 text-xs">Oct 05, 2023</span>
              </div>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="bg-gradient-to-br from-[#0B5DBB] to-[#0AA6C6] rounded-2xl shadow-xl p-8 text-white text-center hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
              <Calendar size={32} className="group-hover:rotate-3 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">Book Appointment</h3>
            <p className="text-white/80 text-sm mb-4 group-hover:text-white transition-colors">अपॉइंटमेंट के लिए कॉल करें</p>
            <p className="text-3xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">011-26731237</p>
            <button className="w-full bg-white text-[#0AA6C6] font-semibold py-3 rounded-lg hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 group-hover:shadow-lg">
              Online Registration
            </button>
          </div>

          {/* Head Message Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-b-4 border border-[#0AA6C6] hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col items-center">
              <img
                src={fac1}
                alt="Prof. Kamran Farooque"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#0AA6C6] mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
              />
              <div>
                <span className="text-[#0AA6C6] text-xs font-semibold uppercase tracking-wide group-hover:scale-105 transition-transform duration-300">
                  Head of JPNATC
                </span>
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-[#0AA6C6] transition-colors duration-300">
                  Prof. Kamran Farooque
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2 group-hover:text-gray-700 transition-colors">
                  Vision: An India where anybody who suffers from Trauma or its
                  consequences is provided high quality care...
                </p>
                <button className="text-[#0AA6C6] text-sm font-medium mt-2 hover:underline hover:text-[#0891b2] transition-colors group-hover:gap-2 inline-flex items-center gap-1">
                  Read Message <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

