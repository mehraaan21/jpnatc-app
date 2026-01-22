import {
  Building2,
  CalendarDays,
  FileText,
  GraduationCap,
  Award,
  PhoneCall,
} from "lucide-react";

export default function MoreAbout() {
  const cards = [
    {
      title: "Departments",
      desc:
        "Orthopedics, Anesthesia & CC, Emergency Medicine, Neurosurgery, and specialized trauma units.",
      color: "border-b-[#0B5DBB]",
      linkColor: "text-[#0B5DBB]",
      iconBg: "bg-blue-50",
      iconColor: "text-[#0B5DBB]",
      icon: <Building2 />,
    },
    {
      title: "Event & Conference",
      desc:
        "Upcoming Events and Conferences for medical professionals and academic enrichment programs.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <CalendarDays />,
    },
    {
      title: "RTI Online",
      desc:
        "Right to Information Application for any Indian citizen as per the institutional guidelines and policies.",
      color: "border-b-[#FF7A45]",
      linkColor: "text-[#FF7A45]",
      iconBg: "bg-orange-50",
      iconColor: "text-[#FF7A45]",
      icon: <FileText />,
    },
    {
      title: "Courses",
      desc:
        "Conducted Training and specialized trauma courses for doctors and nursing staff nationwide.",
      color: "border-b-[#0B5DBB]",
      linkColor: "text-[#0B5DBB]",
      iconBg: "bg-blue-50",
      iconColor: "text-[#0B5DBB]",
      icon: <GraduationCap />,
    },
    {
      title: "Awards",
      desc:
        "Recognizing excellence in medical practice, research, and contribution to trauma care development.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <Award />,
    },
    {
      title: "Call Centre",
      desc:
        "24/7 reception desk managing enquiries and appointments for patient convenience.",
      color: "border-b-[#FF7A45]",
      linkColor: "text-[#FF7A45]",
      iconBg: "bg-orange-50",
      iconColor: "text-[#FF7A45]",
      icon: <PhoneCall />,
    },
  ];

  return (
    <section className="bg-white
      py-20">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-800">
          More About{" "}
          <span className="text-[#0B5DBB] font-bold">JPNATC</span>
        </h2>
        <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-8  border-b-4 ${item.color} shadow-sm hover:shadow-md transition`}
          >
            {/* ICON */}
            <div
              className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-6`}
            >
              <div className={item.iconColor}>{item.icon}</div>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>

            {/* LINK */}
            <a
              href="#"
              className={`font-medium ${item.linkColor} hover:underline`}
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
