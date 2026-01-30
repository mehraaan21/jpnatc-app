import { useLayoutEffect, useRef, Link } from "react";
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
        { opacity: 0, y: -10 },
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
      icon: <Building2 />,
      link : "/staff/departments",
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
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <FileText />,
      link : "/contact/right-to-information",
    },
    {
      title: "Courses",
      desc:
        "Conducted Training and specialized trauma courses for doctors and nursing staff nationwide.",
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <GraduationCap />,
      link : "/education/postgraduate",
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
      color: "border-b-[#0AA6C6]",
      linkColor: "text-[#0AA6C6]",
      iconBg: "bg-cyan-50",
      iconColor: "text-[#0AA6C6]",
      icon: <PhoneCall />,
      link : "/contact",
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
      <div ref={cardsContainerRef} className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={` border border-[#0AA6C6] rounded-2xl p-8  border-b-4 ${item.color} shadow-sm hover:shadow-md transition`}
          >
            {/* ICON */}
            <div
              className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-6`}
            >
              <div className={item.iconColor}>{item.icon}</div>
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>

            {/* LINK */}
            <a
              href={item.link }
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