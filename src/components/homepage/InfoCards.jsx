import { useLayoutEffect, useRef } from "react";
import {
  Building2,
  CalendarDays,
  FileText,
  GraduationCap,
  Award,
  PhoneCall,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MoreAbout() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // First animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Then animate divider line
      gsap.fromTo(
        dividerRef.current,
        { width: 0, opacity: 0 },
        {
          width: "5rem",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      // Then animate cards one by one
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  const cards = [
    {
      title: "Departments",
      desc:
        "Orthopedics, Anesthesia & CC, Emergency Medicine, Neurosurgery, and specialized trauma units.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Event & Conference",
      desc:
        "Upcoming Events and Conferences for medical professionals and academic enrichment programs.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <CalendarDays className="w-6 h-6" />,
    },
    {
      title: "RTI Online",
      desc:
        "Right to Information Application for any Indian citizen as per the institutional guidelines and policies.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Courses",
      desc:
        "Conducted Training and specialized trauma courses for doctors and nursing staff nationwide.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Awards",
      desc:
        "Recognizing excellence in medical practice, research, and contribution to trauma care development.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Call Centre",
      desc:
        "24/7 reception desk managing enquiries and appointments for patient convenience.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <PhoneCall className="w-6 h-6" />,
    },
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* ================= HEADING ================= */}
      <div ref={headingRef} className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-800">
          More About{" "}
          <span className="text-[#0AA6C6] font-bold">JPNATC</span>
        </h2>
        <div
          ref={dividerRef}
          className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"
        ></div>
      </div>

      {/* ================= GRID ================= */}
      <div ref={cardsContainerRef} className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#60b4c5] border-b-4 hover:border-b-[#0AA6C6] p-6 group"
          >
            {/* ICON */}
            <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-4 ${item.iconColor} group-hover:bg-[#0AA6C6] group-hover:text-white transition-colors duration-300`}>
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#0AA6C6] transition-colors">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* LINK */}
            <div className="pt-4 border-t border-gray-100">
              <button className={`${item.linkColor} text-sm font-semibold hover:underline flex items-center gap-1`}>
                Read more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
