import React, { useState } from 'react';

const DepartmentsPage = () => {
  // Data consolidated from all provided institutional images
  const allData = [
    { id: 1, name: "Dr. Kamran Farooque", role: "Professor & Head of Center", dept: "Orthopaedics", type: "Faculty" },
    { id: 2, name: "Dr. Vivek Trikha", role: "Professor", dept: "Orthopaedics", type: "Faculty" },
    { id: 3, name: "Dr. Vijay Sharma", role: "Professor", dept: "Orthopaedics", type: "Faculty" },
    { id: 4, name: "Dr. Buddhadev Chowdhury", role: "Professor", dept: "Orthopaedics", type: "Faculty" },
    { id: 5, name: "Prof. Sushma Sagar", role: "Professor", dept: "Trauma Surgery", type: "Faculty" },
    { id: 6, name: "Prof. Amit Gupta", role: "Professor", dept: "Trauma Surgery", type: "Faculty" },
    { id: 7, name: "Prof. Subodh Kumar", role: "Professor", dept: "Trauma Surgery", type: "Faculty" },
    { id: 8, name: "Dr. Deepak Agrawal", role: "Professor", dept: "Neurosurgery", type: "Faculty" },
    { id: 9, name: "Dr. Babita Gupta", role: "Professor & Addl M.S.", dept: "Anaesthesia", type: "Faculty" },
    { id: 10, name: "Dr. Shivanand Gamangatti", role: "Professor", dept: "Radiology", type: "Faculty" },
    { id: 11, name: "Dr. Sanjeev Lalwani", role: "Professor", dept: "Emergency Medicine", type: "Faculty" },
    { id: 12, name: "Prof. Rajesh Malhotra", role: "Ex-Chief (2017-2023)", dept: "Orthopaedics", type: "Ex-Chief" },
    { id: 13, name: "Prof. M. C. Misra", role: "Ex-Chief (2006-2017)", dept: "Surgery", type: "Ex-Chief" },
    { id: 14, name: "IT Department", role: "Innovation Hub", dept: "Computer Facility", type: "Staff" },
    { id: 15, name: "Blood Bank", role: "Clinical Support", dept: "Transfusion Medicine", type: "Staff" }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", "Orthopaedics", "Trauma Surgery", "Neurosurgery", "Anaesthesia", "Radiology", "Emergency Medicine", "Computer Facility"];

  // Filter Logic
  const filteredItems = allData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || item.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans mb-16 selection:bg-blue-100">
      {/* 1. Header Section */}
      <header className="bg-linear-to-r from-[#0f172a] to-[#1e293b] text-white py-16 px-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[30px_30px]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 animate-fade-in">
            Departments <span className="text-blue-500">&</span> Faculty
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Jai Prakash Narayan Apex Trauma Centre (JPNATC), AIIMS. <br />
            Explore our world-class medical expertise and innovative clinical facilities.
          </p>
        </div>
      </header>

      {/* 2. Advanced Search & Filter Bar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Search Input */}
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-100 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
          </div>

          {/* Department Dropdown */}
          <div className="relative">
            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full appearance-none bg-slate-100 border-2 border-transparent py-4 px-6 pr-12 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-bold text-slate-700 cursor-pointer"
            >
              {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Results Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
            {selectedDept} <span className="text-blue-600">Directory</span>
          </h2>
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-black shadow-lg shadow-blue-500/30">
            {filteredItems.length} Found
          </span>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              {/* Profile Placeholder / Icon */}
              <div className="relative w-full aspect-square mb-6 rounded-3xl overflow-hidden bg-slate-100 ring-4 ring-slate-50 transition-all group-hover:ring-blue-100">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                  👤
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    item.type === 'Ex-Chief' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="text-center px-2">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                  {item.dept}
                </p>
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                  {item.role}
                </p>
              </div>

              {/* Interactive Footer */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex justify-center">
                <button className="text-blue-600 font-black text-[10px] uppercase tracking-widest hover:tracking-[0.3em] transition-all">
                  View Profile →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-32 text-center">
            <div className="text-8xl mb-6 animate-bounce">🔍</div>
            <h3 className="text-3xl font-black text-slate-300 uppercase tracking-tighter">No results matched your search</h3>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedDept("All");}}
              className="mt-6 text-blue-600 font-bold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </main>

    </div>
  );
};

export default DepartmentsPage;