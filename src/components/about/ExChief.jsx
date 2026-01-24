import React from 'react';

const ExChiefs = () => {
  const exChiefsData = [
    {
      name: "Prof. Rajesh Malhotra",
      designation: "Professor",
      department: "Orthopaedic",
      location: "JPNATC, AIIMS",
      tenure: "2017-2023",
      image: "https://via.placeholder.com/150", // Replace with actual image path
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-50"
    },
    {
      name: "Dr. Anurag Srivastava",
      designation: "Professor",
      department: "Surgery",
      location: "JPNATC, AIIMS",
      tenure: "Feb, 2017 - Apr, 2017",
      image: "https://via.placeholder.com/150", // Replace with actual image path
      color: "from-cyan-500 to-cyan-700",
      bg: "bg-cyan-50"
    },
    {
      name: "Prof. M. C. Misra",
      designation: "Professor",
      department: "Surgery",
      location: "JPNATC, AIIMS",
      tenure: "2006-2017",
      image: "https://via.placeholder.com/150", // Replace with actual image path
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our <span className="text-blue-600">Ex-Chiefs</span>
          </h1>
          <div className="my-6 flex justify-center">
            <div className="h-1.5 w-40 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto">
            Honoring the visionary leaders who have guided the Jai Prakash Narayan Apex Trauma Centre 
            with excellence, dedication, and clinical expertise throughout its history.
          </p>
        </div>

        {/* Chiefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exChiefsData.map((chief, idx) => (
            <div 
              key={idx}
              className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 
                         transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated Background Blob */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 
                              transition-transform duration-500 group-hover:scale-[3] ${chief.bg}`}></div>
              
              <div className="relative z-10">
                {/* Image Section */}
                <div className="flex justify-center mb-6">
                  <div className={`p-1 rounded-2xl bg-gradient-to-br ${chief.color} shadow-lg`}>
                    <img 
                      src={chief.image} 
                      alt={chief.name}
                      className="w-32 h-32 object-cover rounded-xl border-2 border-white grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    {chief.name}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                    {chief.designation}
                  </div>
                  
                  <div className="pt-4 space-y-1 text-slate-600">
                    <p className="flex justify-between text-sm border-b border-slate-50 pb-1">
                      <span className="font-semibold">Department:</span> 
                      <span>{chief.department}</span>
                    </p>
                    <p className="flex justify-between text-sm border-b border-slate-50 pb-1">
                      <span className="font-semibold">Location:</span> 
                      <span>{chief.location}</span>
                    </p>
                    <p className="flex justify-between text-sm pt-1 text-blue-700 font-bold">
                      <span>Tenure:</span> 
                      <span>{chief.tenure}</span>
                    </p>
                  </div>
                </div>

                {/* Modern Hover Effect Button */}
                <div className="mt-6 flex items-center justify-center text-blue-600 font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExChiefs;