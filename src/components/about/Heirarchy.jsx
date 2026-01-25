import React from 'react';

const Hierarchy = () => {
  const hierarchyData = [
    {
      id: 1,
      title: "Director",
      description: "Head of the institution responsible for overall strategic vision and policy making.",
      side: "left",
      icon: "🏢",
    },
    {
      id: 2,
      title: "Medical Superintendent",
      description: "In-charge of clinical operations and maintaining the highest standards of patient care.",
      side: "right",
      icon: "🩺",
    },
    {
      id: 3,
      title: "Heads of Departments",
      description: "Senior experts leading specialized medical wings like Surgery, Trauma, and Anaesthesia.",
      side: "left",
      icon: "👨‍⚕️",
    },
    {
      id: 4,
      title: "Senior Residents",
      description: "Specialized medical professionals managing ward operations and emergency responses.",
      side: "right",
      icon: "🏥",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 font-sans">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
          Institutional <span className="text-blue-600">Hierarchy</span>
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-6">
      <div className="relative group w-full max-w-lg p-5 mb-24">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-25 transition-opacity duration-500"></div>
          
          <div className="relative bg-white p-10 rounded-3xl shadow-2xl border-2 border-blue-100 transition-all duration-300 group-hover:-translate-y-2 text-center">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
              🏢
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Director</h2>
            <p className="text-blue-600 font-bold mb-4">Head of the Institution</p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Leading JPNATC with a vision for excellence in trauma care, innovation, and medical education at a global scale.
            </p>
            <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>
        </div>
        </div>
        

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        
        
        {/* The Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent hidden md:block"></div>

        <div className="space-y-12 md:space-y-0">
          {hierarchyData.map((item, idx) => (
            <div key={item.id} className={`relative flex items-center justify-between w-full mb-8 md:mb-12 ${
              item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}>
              
              {/* Spacer for desktop */}
              <div className="hidden md:block w-5/12"></div>

              {/* Central Number Circle */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 shadow-xl ring-8 ring-slate-50">
                  {item.id}
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0 transition-all duration-1000 transform`}>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                  <div className="text-4xl mb-4 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  {/* Decorative modern bar */}
                  <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${
                    item.side === 'left' ? 'from-blue-600 to-cyan-400' : 'from-cyan-400 to-blue-600'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hierarchy;

