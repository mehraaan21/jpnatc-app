import { ClipboardList, UserCheck, ShieldCheck, Landmark, FileText, BadgeIndianRupee, CheckCircle } from "lucide-react";

export default function RightToInformation() {
  const authorities = [
    {
      role: "Appellate Authority",
      name: "Prof. Kamran Farooque",
      designation: "Chief, JPN Apex Trauma Centre, AIIMS",
      address: "Room No. 401, 4th Floor, Raj Nagar, New Delhi",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      role: "Central Public Information Officer (CPIO)",
      name: "Prof. Sanjeev Lalwani",
      designation: "Professor of Forensic Medicine",
      address: "JPN Apex Trauma Centre, AIIMS, Raj Nagar, New Delhi",
      icon: <Landmark className="w-6 h-6" />,
    },
    {
      role: "Assistant Public Information Officer",
      name: "Mr. Shashi Kant Kharwar",
      designation: "Administrative Officer",
      address: "Room No. 403, 4th Floor, JPNATC, New Delhi",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] pt-24 pb-20 overflow-x-hidden">
      
      {/* ===== Heading (Website Style) ===== */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-semibold text-slate-800">
          Right To <span className="text-[#0AA6C6] font-bold">Information</span>
        </h1>
        <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4" />
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
          JPNATC is committed to transparency and accountability under the RTI Act, 2005.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Main White Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Top Intro Section */}
          <div className="p-8 md:p-12 bg-slate-50 border-b border-slate-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-[#0AA6C6] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-100">
              <ClipboardList size={32} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-800">About RTI</h2>
              <p className="text-slate-600 leading-relaxed mt-1">
                Citizens have the right to seek information from public authorities to ensure transparency.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Authorities Grid - Fixed with standard grid to prevent layout breaking */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {authorities.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0AA6C6] transition-all">
                  <div className="text-[#0AA6C6] mb-4">{item.icon}</div>
                  <p className="text-[10px] font-black text-[#0AA6C6] uppercase tracking-widest mb-1">{item.role}</p>
                  <h4 className="text-lg font-bold text-slate-800 leading-tight">{item.name}</h4>
                  <p className="text-xs font-medium text-slate-500 mt-1 mb-4">{item.designation}</p>
                  <p className="text-xs text-slate-400 border-t pt-4 leading-relaxed">
                    {item.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Application Requirements & Fee */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Requirements List */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} /> Requirements
                </h3>
                <div className="space-y-3">
                  {[
                    "Applicant's Name & Address",
                    "Details of information sought",
                    "Mode of delivery (Post/Email)",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-sm font-semibold text-slate-700">
                      <FileText size={16} className="text-[#0AA6C6]" /> {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee Box - Simplified styling to prevent "fatna" */}
              <div className="bg-[#074d8d] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <BadgeIndianRupee className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10" />
                <h4 className="text-xl font-bold mb-2">RTI Fee</h4>
                <div className="text-4xl font-black mb-4">₹10</div>
                <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                  Submit via Demand Draft or Postal Order in favor of <strong>"Director AIIMS"</strong>.
                </p>
                <a 
                  href="https://rtionline.gov.in/" 
                  target="_blank" 
                  className="inline-block bg-[#0AA6C6] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-[#074d8d] transition-all"
                >
                  Apply Online →
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}