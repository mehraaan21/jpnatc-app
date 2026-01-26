import { Download, FileText } from "lucide-react";

const notices = [
  {
    tag: "ACADEMIC",
    tagColor: "bg-blue-100 text-blue-700",
    date: "Aug 11, 2025",
    title: "79th Independence Day Celebrations-15th August 2025 Invitation",
    desc: "All staff and faculty are cordially invited to the flag hoisting ceremony at the main administrative block.",
    ref: "Ref: JPNATC/EST/2025/79"
  },
  {
    tag: "GENERAL",
    tagColor: "bg-green-100 text-green-700",
    date: "Jul 03, 2025",
    title: "Constitution of TSEC for Digitalisation of Hospital for AIIMS, New Delhi",
    desc: "Official formation of the Technical Specification Evaluation Committee (TSEC) for ongoing digital initiatives.",
    ref: "Ref: AIIMS/HOSP/DIG/06"
  },
  {
    tag: "IMPORTANT",
    tagColor: "bg-yellow-100 text-yellow-700",
    date: "May 09, 2025",
    title: "Office Order No Z28015/19/2019-Estt. regarding Leave Restrictions",
    desc: "Notice regarding temporary leave restrictions for essential service staff and medical officers.",
    ref: "Ref: Z28015/19/2019"
  },
  {
    tag: "SAFETY",
    tagColor: "bg-red-100 text-red-700",
    date: "Nov 29, 2024",
    title: "Precautions against Fire incidents at AIIMS - ADVISORY",
    desc: "Comprehensive safety guidelines and fire prevention protocols for all ward and clinical departments.",
    ref: "Ref: FIRE/ADV/2024/04"
  }
];

export default function NoticesPage() {
  return (
    <div className="bg-[#eef7fa] py-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800">
            Notices & <span className="text-[#0AA6C6] font-bold">Circulars</span>
          </h2>
          <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Access the latest updates, administrative circulars, academic notices,
            and general announcements from the JPN Apex Trauma Center.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-6 group"
            >
              {/* TAG + DATE */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${notice.tagColor}`}>
                  {notice.tag}
                </span>
                <span className="text-sm text-gray-400">{notice.date}</span>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-xl text-gray-800 mb-3 leading-snug group-hover:text-[#0AA6C6] transition-colors">
                {notice.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm mb-4">
                {notice.desc}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">{notice.ref}</span>
                <button className="flex items-center gap-2 text-sm text-[#0AA6C6] font-semibold hover:underline group-hover:gap-2 transition-all">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

