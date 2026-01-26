import React, { useState } from 'react';

const FacultyPage = () => {
  // Data extracted from the images
  const doctors = [
    // Orthopaedics
    { id: 1, name: "Dr. Kamran Farooque", role: "Professor & Head of Center", dept: "Orthopaedics", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Dr. Vivek Trikha", role: "Professor", dept: "Orthopaedics", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Dr. Vijay Sharma", role: "Professor", dept: "Orthopaedics", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Dr. Buddhadev Chowdhury", role: "Professor", dept: "Orthopaedics", img: "https://via.placeholder.com/200" },
    // Trauma Surgery
    { id: 5, name: "Prof. Sushma Sagar", role: "Professor", dept: "Trauma Surgery", img: "https://via.placeholder.com/200" },
    { id: 6, name: "Prof. Amit Gupta", role: "Professor", dept: "Trauma Surgery", img: "https://via.placeholder.com/200" },
    { id: 7, name: "Prof. Subodh Kumar", role: "Professor", dept: "Trauma Surgery", img: "https://via.placeholder.com/200" },
    // Neurosurgery
    { id: 8, name: "Dr. Deepak Agrawal", role: "Professor", dept: "Neurosurgery", img: "https://via.placeholder.com/200" },
    { id: 9, name: "Dr. Deepak Gupta", role: "Professor", dept: "Neurosurgery", img: "https://via.placeholder.com/200" },
    // Anaesthesia
    { id: 10, name: "Dr. Babita Gupta", role: "Professor & Addl M.S.", dept: "Anaesthesia", img: "https://via.placeholder.com/200" },
    { id: 11, name: "Dr. Richa Aggarwal", role: "Professor", dept: "Anaesthesia", img: "https://via.placeholder.com/200" },
  ];

  const [filter, setFilter] = useState("All");

  const departments = ["All", "Orthopaedics", "Trauma Surgery", "Neurosurgery", "Anaesthesia", "Radiology", "Emergency Medicine"];

  const filteredDoctors = filter === "All" 
    ? doctors 
    : doctors.filter(doc => doc.dept === filter);

  return (
    <div className="min-h-screen bg-slate-50  font-sans">
      {/* Header Section */}
     <div className="text-center my-16">
          <h1 className="text-4xl md:text-6xl my-8 font-extrabold text-slate-900 tracking-tight mb-4">
            Photo <span className="text-blue-600">&</span> Gallery
          </h1>
            <div className="my-6 flex justify-center">
            <div className="h-1.5 w-100 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-slate-500 text-lg max-auto mx-auto">
          Explore our state-of-the-art facilities and dedicated medical environments at JPNATC.
          </p>
        
        </div>

      {/* Filter Section */}
      <div className="sticky top-0 z-40  shadow-sm border-b border-slate-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <label className="text-slate-700 font-bold uppercase text-sm tracking-widest">
            Filter By Department:
          </label>
          
          <div className="relative w-full md:w-72">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full appearance-none bg-slate-100 border-2 border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:border-blue-500 transition-all font-medium cursor-pointer"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-600">
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
            {filter} Personnel
          </h2>
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-slate-400 font-bold text-sm bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
            {filteredDoctors.length} Results
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDoctors.map((doc) => (
            <div 
              key={doc.id} 
              className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <button className="w-full bg-blue-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors">
                     VIEW PROFILE
                   </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 text-center">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                  {doc.dept}
                </p>
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                  {doc.name}
                </h3>
                <p className="text-slate-500 text-sm font-medium">
                  {doc.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-400">No doctors found in this department</h3>
          </div>
        )}
      </main>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
          © 2026 JPN Apex Trauma Centre | AIIMS
        </p>
      </footer>
    </div>
  );
};

export default FacultyPage;