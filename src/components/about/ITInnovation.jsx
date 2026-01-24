<<<<<<< HEAD
// export default function ITInnovation() {
//     return (
//         <div className="min-h-screen bg-gray-50 py-12">
//             <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">IT Innovation</h1>
//                 <div className="bg-white rounded-lg shadow-md p-8">
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div className="bg-purple-50 p-6 rounded-lg">
//                             <h3 className="text-xl font-semibold text-purple-800 mb-3">Digital Records</h3>
//                             <p className="text-gray-700">
//                                 Electronic Health Records (EHR) system for seamless patient data management
//                             </p>
//                         </div>
//                         <div className="bg-purple-50 p-6 rounded-lg">
//                             <h3 className="text-xl font-semibold text-purple-800 mb-3">Online Portal</h3>
//                             <p className="text-gray-700">
//                                 Patient portal for appointment booking and test results
//                             </p>
//                         </div>
//                         <div className="bg-purple-50 p-6 rounded-lg">
//                             <h3 className="text-xl font-semibold text-purple-800 mb-3">Telemedicine</h3>
//                             <p className="text-gray-700">
//                                 Remote consultation services for patients
//                             </p>
//                         </div>
//                         <div className="bg-purple-50 p-6 rounded-lg">
//                             <h3 className="text-xl font-semibold text-purple-800 mb-3">AI Diagnostics</h3>
//                             <p className="text-gray-700">
//                                 AI-powered diagnostic tools for accurate diagnosis
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
=======
export default function ITInnovation() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        IT <span className="text-[#0AA6C6] font-bold">Innovation</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "💾", title: "Digital Records", desc: "Electronic Health Records (EHR) system for seamless patient data management" },
                            { icon: "🌐", title: "Online Portal", desc: "Patient portal for appointment booking and test results" },
                            { icon: "📹", title: "Telemedicine", desc: "Remote consultation services for patients" },
                            { icon: "🤖", title: "AI Diagnostics", desc: "AI-powered diagnostic tools for accurate diagnosis" },
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-[#0AA6C6] rounded-xl flex items-center justify-center text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#0AA6C6] mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
>>>>>>> 1b794d580e0bab16d9471cbefc9021f613e020fb



import React from 'react';

const ITInnovation = () => {
  const innovations = [
    {
      title: "RFID Lift Control",
      desc: "World's first patient stretcher lift access system using RFID technology to prioritize critical patient transfers[cite: 172, 182].",
      icon: "🛗",
      color: "from-purple-500 to-indigo-600",
      bg: "bg-purple-50"
    },
    {
      title: "Integrated Call Center",
      desc: "A first-of-its-kind 24/7 hub managing backend administration, patient appointments, and inquiries via 30 dedicated lines[cite: 11, 52, 87].",
      icon: "📞",
      color: "from-blue-500 to-cyan-600",
      bg: "bg-blue-50"
    },
    {
      title: "e-MLC System",
      desc: "A tamper-proof, computerized Medico-Legal Case sheet system that includes real-time digital injury images[cite: 12, 316, 317].",
      icon: "⚖️",
      color: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50"
    },
    {
      title: "OPD Tablet System",
      desc: "Clinicians utilize stylus-based tablets (mCura) for digital prescriptions, record retrieval, and photo/video documentation[cite: 588, 1272].",
      icon: "📱",
      color: "from-orange-500 to-red-600",
      bg: "bg-orange-50"
    },
    {
      title: "Real-Time PDS",
      desc: "Emergency Patient Display System showing live status updates and wait times for CT, X-Ray, and suturing[cite: 133, 224, 225].",
      icon: "🖥️",
      color: "from-pink-500 to-rose-600",
      bg: "bg-pink-50"
    },
    {
      title: "Pneumatic Tube System",
      desc: "A complex automated network delivering blood samples and medications across wards at 25 feet per second[cite: 25, 656, 659].",
      icon: "🚀",
      color: "from-indigo-500 to-blue-700",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            IT <span className="text-blue-600">Innovations</span>
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-2 w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
{/* 
          <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
          Institutional <span className="text-blue-600">Hierarchy</span>
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div> */}


          <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            JPNATC leads the world in healthcare technology, implementing indigenous solutions 
            to ensure transparency, accountability, and clinical excellence[cite: 27, 1039].
          </p>
        </div>

        {/* Innovations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {innovations.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 
                         transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden"
            >
              {/* Decorative Background Glow */}
              <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-0 
                              transition-opacity duration-500 group-hover:opacity-10 ${item.bg}`}></div>
              
              <div className="relative z-10">
                {/* 3D-Style Icon Container */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} 
                                 flex items-center justify-center text-4xl shadow-xl mb-8 
                                 transform transition-transform duration-500 `}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>

                {/* Modern Bottom Detail */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-100 group-hover:bg-purple-100 transition-colors"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-purple-400">
                    Innovation {idx + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ITInnovation;