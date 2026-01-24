export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden font-serif">
      {/* Background Image */}
      <img
        src="/images/trauma-building.jpg"
        alt="Hospital"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 text-white">
        <span className="inline-block bg-cyan-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
          APEX CENTER OF EXCELLENCE
        </span>

        <h1 className="text-5xl md:text-6xl leading-tight">
          Excellence in <br />
          <span className="text-cyan-400 italic">Trauma Care</span> & <br />
          Recovery
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/90">
          Dedicated to providing high-quality, professional multidisciplinary
          care and rehabilitation to enable optimal recovery of independent
          function.
        </p>

        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">
          Book Appointment →
        </button>
      </div>

      {/* Bottom Cards */}
      <div className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Notices */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-black">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-600 font-semibold">
                🔔 Notices & Circulars
              </h3>
              <span className="text-sm text-blue-500 cursor-pointer">
                View All
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">
                  Precautions against Fire incidents at AIIMS – ADVISORY
                </p>
                <span className="text-gray-400">Oct 12, 2023</span>
              </div>

              <div>
                <p className="font-medium">
                  Update on New Patient Registration Portal Guidelines
                </p>
                <span className="text-gray-400">Oct 10, 2023</span>
              </div>
            </div>
          </div>

          {/* Appointment */}
          <div className="bg-cyan-500 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <div className="bg-white/20 rounded-full p-4 mb-4 text-2xl">
              📅
            </div>

            <h3 className="text-2xl font-semibold mb-1">
              Book Appointment
            </h3>

            <p className="text-sm mb-4">
              अपॉइंटमेंट के लिए कॉल करें
            </p>

            <p className="text-3xl font-bold mb-6">
              011-26731237
            </p>

            <button className="bg-white text-cyan-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">
              Online Registration
            </button>
          </div>

          {/* Head Message */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 text-black">
            <img
              src="/images/profile-placeholder.png"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <span className="text-xs text-cyan-500 font-semibold">
                HEAD OF JPNATC
              </span>

              <h3 className="font-semibold text-lg">
                Prof. Kamran Farooque
              </h3>

              <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                Vision: An India where anybody who suffers from Trauma or its
                consequences is provided high quality care...
              </p>

              <button className="text-blue-600 text-sm font-medium mt-2">
                Read Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
