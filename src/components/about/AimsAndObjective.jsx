<<<<<<< HEAD
// export default function AimsAndObjective() {
//     return (
//         <div className="min-h-screen bg-gray-50 py-12">
//             <div className="max-w-7xl mx-auto px-4">
//                 <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Aims And Objective</h1>
//                 <div className="bg-white rounded-lg shadow-md p-8">
//                     <div className="space-y-4">
//                         <div className="border-l-4 border-[#0B5DBB] pl-4">
//                             <h3 className="text-lg font-semibold text-gray-800">Patient Care</h3>
//                             <p className="text-gray-600">Provide excellent healthcare services to all patients</p>
//                         </div>
//                         <div className="border-l-4 border-[#0AA6C6] pl-4">
//                             <h3 className="text-lg font-semibold text-gray-800">Medical Education</h3>
//                             <p className="text-gray-600">Train future healthcare professionals through various programs</p>
//                         </div>
//                         <div className="border-l-4 border-[#0B5DBB] pl-4">
//                             <h3 className="text-lg font-semibold text-gray-800">Research</h3>
//                             <p className="text-gray-600">Conduct research to advance medical knowledge and practices</p>
//                         </div>
//                         <div className="border-l-4 border-[#0AA6C6] pl-4">
//                             <h3 className="text-lg font-semibold text-gray-800">Community Service</h3>
//                             <p className="text-gray-600">Serve the community through outreach programs and health initiatives</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
=======
export default function AimsAndObjective() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Aims & <span className="text-[#0AA6C6] font-bold">Objectives</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient Care</h3>
                            <p className="text-gray-600">Provide excellent healthcare services to all patients</p>
                        </div>
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Education</h3>
                            <p className="text-gray-600">Train future healthcare professionals through various programs</p>
                        </div>
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Research</h3>
                            <p className="text-gray-600">Conduct research to advance medical knowledge and practices</p>
                        </div>
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Service</h3>
                            <p className="text-gray-600">Serve the community through outreach programs and health initiatives</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
>>>>>>> 1b794d580e0bab16d9471cbefc9021f613e020fb



import React from 'react';

const AimsAndObjective = () => {
  const objectives = [
    {
      title: "Patient Care",
      desc: "Provide excellent healthcare services to all patients with cutting-edge technology.",
      icon: "🏥",
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-50"
    },
    {
      title: "Medical Education",
      desc: "Train future healthcare professionals through rigorous academic and clinical programs.",
      icon: "🎓",
      color: "from-cyan-500 to-cyan-700",
      bg: "bg-cyan-50"
    },
    {
      title: "Research",
      desc: "Conduct advanced research to push the boundaries of medical knowledge and practice.",
      icon: "🔬",
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-50"
    },
    {
      title: "Community Service",
      desc: "Serve the community through proactive outreach and sustainable health initiatives.",
      icon: "🤝",
      color: "from-teal-500 to-teal-700",
      bg: "bg-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Aims <span className="text-blue-600">&</span> Objectives
          </h1>
            <div className="my-6 flex justify-center">
            <div className="h-1.5 w-100 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-slate-500 text-lg max-auto mx-auto">
           Our core pillars define our commitment to excellence in the medical field and our service to humanity.
                They guide our dedication to ethical practices, innovation, and compassionate patient care.
                Through continuous learning and advanced healthcare solutions, we strive to improve lives every day.
                Our mission is rooted in trust, integrity, and a deep responsibility toward the communities we serve.
                Together, these values empower us to make a meaningful and lasting impact on global health.
          </p>
        
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 
                         transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated Background Blob */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 
                              transition-transform duration-500 group-hover:scale-[3] ${item.bg}`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} 
                                 flex items-center justify-center text-3xl shadow-lg mb-6 
                                 transform transition-transform group-hover:rotate-12`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.desc}
                </p>

                {/* Modern "Learn More" link effect */}
                <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AimsAndObjective;