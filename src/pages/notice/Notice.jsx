import { useState, useEffect } from "react";
import { Download, Search, BellRing, Filter, Loader2, ArrowRight } from "lucide-react";

export default function NoticesPage() {
  const [notices, setNotices] = useState([]); // For API
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulation of API Fetch
  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      try {
        //  axios.get('/api/notices') 
        const mockData = [
          {
            id: 1,
            tag: "ACADEMIC",
            date: "Aug 11, 2025",
            title: "79th Independence Day Celebrations - 15th August 2025 Invitation",
            desc: "All staff and faculty are cordially invited to the flag hoisting ceremony at the main administrative block.",
            ref: "Ref: JPNATC/EST/2025/79"
          },
          {
            id: 2,
            tag: "SAFETY",
            date: "Nov 29, 2024",
            title: "Precautions against Fire incidents at AIIMS - ADVISORY",
            desc: "Comprehensive safety guidelines and fire prevention protocols for all departments.",
            ref: "Ref: FIRE/ADV/2024/04"
          },
          {
            id: 3,
            tag: "IMPORTANT",
            date: "May 09, 2025",
            title: "Office Order No Z28015/19/2019-Estt. regarding Leave Restrictions",
            desc: "Notice regarding temporary leave restrictions for essential service staff and medical officers.",
            ref: "Ref: Z28015/19/2019"
          },
          {
            id: 4,
            tag: "SAFETY",
            date: "Nov 29, 2024",
            title: "Precautions against Fire incidents at AIIMS - ADVISORY",
            desc: "Comprehensive safety guidelines and fire prevention protocols for all ward and clinical departments.",
            ref: "Ref: FIRE/ADV/2024/04"
          }
        ];
        setNotices(mockData);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  // Filter Logic (API-friendly)
  const filteredNotices = notices.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.ref.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* ===== HEADER & SEARCH ===== */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-cyan-50 text-[#0AA6C6] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6">
              <BellRing size={14} className="animate-pulse" /> OFFICIAL UPDATES
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-800">
              Notices & <span className="text-[#0AA6C6] font-bold">Circulars</span>
            </h1>
            <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4" />
          </div>

          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search notices..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-[#0AA6C6]/20 focus:border-[#0AA6C6] transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <Filter size={18} /> Filters
            </button>
          </div>
        </div>
      </div>

      {/* ===== NOTICES LIST ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        {loading ? (
          <div className="flex flex-col items-center py-20 text-slate-400">
            <Loader2 className="animate-spin mb-4" size={40} />
            <p className="font-medium">Fetching latest circulars...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotices.map((notice) => (
              <NoticeItem key={notice.id} notice={notice} />
            ))}

            {filteredNotices.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                <p className="text-slate-400 font-medium">No results found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="text-slate-400 font-bold hover:text-[#0AA6C6] transition-all flex items-center gap-2 mx-auto">
            View Archives <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Separate Component for better performance (Optimization)
function NoticeItem({ notice }) {
  // Dynamic tag colors based on content
  const getTagStyle = (tag) => {
    const styles = {
      ACADEMIC: "text-blue-600 bg-blue-50 border-blue-100",
      SAFETY: "text-red-600 bg-red-50 border-red-100",
      IMPORTANT: "text-amber-600 bg-amber-50 border-amber-100",
      GENERAL: "text-emerald-600 bg-emerald-50 border-emerald-100",
    };
    return styles[tag] || "text-slate-600 bg-slate-50 border-slate-100";
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
      {/* Date Icon */}
      <div className="flex flex-col items-center justify-center bg-slate-50 rounded-xl px-4 py-2 min-w-[90px] border border-slate-100">
        <span className="text-[10px] font-black text-slate-400 uppercase">{notice.date.split(' ')[0]}</span>
        <span className="text-xl font-black text-slate-800 leading-none my-1">{notice.date.split(' ')[1].replace(',', '')}</span>
        <span className="text-[10px] font-bold text-[#0AA6C6]">{notice.date.split(',')[1]}</span>
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[9px] font-black px-2 py-0.5 rounded border uppercase tracking-widest ${getTagStyle(notice.tag)}`}>
            {notice.tag}
          </span>
          <span className="text-[10px] font-bold text-slate-400 italic">{notice.ref}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#0AA6C6] transition-colors">
          {notice.title}
        </h3>
        <p className="text-slate-500 text-sm mt-1 line-clamp-1">{notice.desc}</p>
      </div>

      <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#0AA6C6] transition-all active:scale-95 shadow-lg">
        <Download size={16} /> PDF
      </button>
    </div>
  );
}