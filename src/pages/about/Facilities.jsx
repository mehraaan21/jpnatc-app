const Facilities = () => {
  const facilitiesList = [
    {
      title: "Emergency Services",
      desc: "24/7 emergency care with advanced life support and trauma response teams.",
      icon: "🚑",
      color: "from-red-500 to-red-700",
      bg: "bg-red-50"
    },
    {
      title: "ICU & Critical Care",
      desc: "State-of-the-art Intensive Care Units with continuous monitoring and specialist support.",
      icon: "🫀",
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-50"
    },
    {
      title: "Modern OT",
      desc: "Advanced Operation Theaters equipped with the latest surgical technology and robotic tools.",
      icon: "🔪",
      color: "from-cyan-500 to-cyan-700",
      bg: "bg-cyan-50"
    },
    {
      title: "Diagnostic Imaging",
      desc: "Fully digital diagnostic services including MRI, CT Scan, and high-resolution X-rays.",
      icon: "🩻",
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-50"
    },
    {
      title: "Advanced Laboratory",
      desc: "Automated pathology and clinical labs for rapid and accurate diagnostic testing.",
      icon: "🧪",
      color: "from-teal-500 to-teal-700",
      bg: "bg-teal-50"
    },
    {
      title: "Pharmacy 24/7",
      desc: "In-house pharmacy providing life-saving medicines and surgical supplies round the clock.",
      icon: "💊",
      color: "from-purple-500 to-purple-700",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header Section */}
        <div className="text-center my-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our <span className="text-blue-600">Facilities</span>
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="h-1.5 w-32 bg-blue-600 rounded-full"></div>
          </div>

          <p className="text-slate-500 text-lg max-w-4xl mx-auto leading-relaxed">
            JPNATC provides world-class medical infrastructure and dedicated support services. 
            From 24/7 emergency response to advanced surgical suites, our facilities are designed 
            to offer the highest level of patient safety and clinical excellence.
          </p>
        </div>

        {/* Facilities Grid (3 columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 
                         transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 
                              transition-transform duration-500 group-hover:scale-[3.5] ${item.bg}`}></div>
              
              <div className="relative z-10">
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} 
                                 flex items-center justify-center text-3xl shadow-lg mb-6 
                                 transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Status Indicator */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available 24/7</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Facilities;