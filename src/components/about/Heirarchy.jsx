
// // import React from 'react';
// export default function Heirarchy() {
//     return (
//         <div className="min-h-screen bg-[#eef7fa] py-16">
//             <div className="max-w-7xl mx-auto px-4">
//                 {/* Heading */}
//                 <div className="text-center mb-14">
//                     <h2 className="text-4xl font-semibold text-gray-800">
//                         Our <span className="text-[#0AA6C6] font-bold">Heirarchy</span>
//                     </h2>
//                     <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
//                 </div>

//                 <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
//                     <div className="space-y-6">
//                         {[
//                             { role: "Director", color: "bg-[#0AA6C6]", desc: "Head of the institution" },
//                             { role: "Medical Supdt.", color: "bg-[#0AA6C6]", desc: "In-charge of medical services" },
//                             { role: "HODs", color: "bg-[#0AA6C6]", desc: "Lead various medical departments" },
//                         ].map((item, index) => (
//                             <div key={index} className="flex items-center gap-6 p-6 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl hover:shadow-lg transition-shadow">
//                                 <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
//                                     {item.role}
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl font-semibold text-gray-800">{item.role}</h3>
//                                     <p className="text-gray-600">{item.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const Facilities = () => {
//   const facilitiesList = [
//     {
//       title: "Emergency Services",
//       desc: "24/7 emergency care with advanced life support and trauma response teams.",
//       icon: "🚑",
//       color: "from-red-500 to-red-700",
//       bg: "bg-red-50"
//     },
  
//     {
//       title: "Modern OT",
//       desc: "Advanced Operation Theaters equipped with the latest surgical technology and robotic tools.",
//       icon: "🔪",
//       color: "from-cyan-500 to-cyan-700",
//       bg: "bg-cyan-50"
//     },
//     {
//       title: "Diagnostic Imaging",
//       desc: "Fully digital diagnostic services including MRI, CT Scan, and high-resolution X-rays.",
//       icon: "🩻",
//       color: "from-indigo-500 to-indigo-700",
//       bg: "bg-indigo-50"
//     },
//     {
//       title: "Advanced Laboratory",
//       desc: "Automated pathology and clinical labs for rapid and accurate diagnostic testing.",
//       icon: "🧪",
//       color: "from-teal-500 to-teal-700",
//       bg: "bg-teal-50"
//     },
//     {
//       title: "Pharmacy 24/7",
//       desc: "In-house pharmacy providing life-saving medicines and surgical supplies round the clock.",
//       icon: "💊",
//       color: "from-purple-500 to-purple-700",
//       bg: "bg-purple-50"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Modern Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
//             Our <span className="text-blue-600">Heirachy</span>
//           </h1>
          
//           <div className="flex justify-center mb-8">
//             <div className="h-1.5 w-32 bg-blue-600 rounded-full"></div>
//           </div>

//           <p className="text-slate-500 text-lg max-w-4xl mx-auto leading-relaxed">
//             JPNATC provides world-class medical infrastructure and dedicated support services. 
//             From 24/7 emergency response to advanced surgical suites, our facilities are designed 
//             to offer the highest level of patient safety and clinical excellence.
//           </p>
//         </div>

//         {/* Facilities Grid (3 columns on Desktop, 1 on Mobile) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {facilitiesList.map((item, idx) => (
//             <div 
//               key={idx}
//               className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 
//                          transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
//             >
//               {/* Hover Background Effect */}
//               <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 
//                               transition-transform duration-500 group-hover:scale-[3.5] ${item.bg}`}></div>
              
//               <div className="relative z-10">
//                 {/* Icon Box */}
//                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} 
//                                  flex items-center justify-center text-3xl shadow-lg mb-6 
//                                  transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
//                   {item.icon}
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">
//                   {item.title}
//                 </h3>
                
//                 <p className="text-slate-600 leading-relaxed font-medium">
//                   {item.desc}
//                 </p>

//                 {/* Status Indicator */}
//                 <div className="mt-6 flex items-center gap-2">
//                   <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available 24/7</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Facilities;


import React, { useEffect, useRef } from 'react';

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
      <div className="text-center my-20">
        <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
          Institutional <span className="text-blue-600">Hierarchy</span>
        </h1>
        <div className="w-100 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
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