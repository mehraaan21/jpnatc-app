import React, { useState, useEffect, useMemo } from "react";
import { Search, Filter, Mail, Briefcase, Loader2 } from "lucide-react";
import facultyData from "../../utils/data"; // Mapping ready for API

const FacultyPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulation of API Loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Memoized Departments for performance optimization
  const departments = useMemo(() => {
    return ["All", ...new Set(facultyData.map((d) => d.department))];
  }, []);

  // API-friendly filtering logic
  const filteredData = useMemo(() => {
    return facultyData
      .filter((dep) => filter === "All" || dep.department === filter)
      .map((dep) => ({
        ...dep,
        doctors: dep.doctors.filter((doc) =>
          doc.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((dep) => dep.doctors.length > 0);
  }, [filter, searchTerm]);

  return (
    <section className="bg-slate-50 min-h-screen pb-20">
      {/* ===== 1. Header Section ===== */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-slate-800">
            Our <span className="text-[#0AA6C6] font-bold">Faculty</span>
          </h1>
          <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            World-class medical professionals and specialists at the forefront of trauma care.
          </p>
        </div>
      </div>

      {/* ===== 2. Search & Filter Control (API Optimized) ===== */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search faculty name..."
              className="w-full pl-11 pr-4 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-[#0AA6C6]/20 outline-none font-medium transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Filter size={18} className="text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex-grow md:w-64 bg-slate-100 border-none py-3 px-4 rounded-2xl font-bold text-slate-700 cursor-pointer outline-none"
            >
              {departments.map((dep) => (
                <option key={dep} value={dep}>{dep}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ===== 3. Faculty Listing ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <Loader2 className="animate-spin text-[#0AA6C6]" size={40} />
            <p className="font-bold text-slate-400">Loading Faculty Directory...</p>
          </div>
        ) : filteredData.length > 0 ? (
          <div className="space-y-20">
            {filteredData.map((dep) => (
              <div key={dep.department}>
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-4">
                  <span className="w-1.5 h-8 bg-[#0AA6C6] rounded-full" />
                  {dep.department}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {dep.doctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#0AA6C6]/10 transition-all duration-500"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={doc.img}
                          alt={doc.name}
                          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                           <div className="flex gap-2">
                              <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white"><Mail size={16} /></button>
                              <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white"><Briefcase size={16} /></button>
                           </div>
                        </div>
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#0AA6C6] transition-colors">
                          {doc.name}
                        </h3>
                        <p className="text-sm font-semibold text-slate-500 mt-1">{doc.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <p className="text-xl font-bold text-slate-400">No faculty members found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacultyPage;