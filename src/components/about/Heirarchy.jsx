import { useLayoutEffect, useRef } from "react";
import { Building2, Stethoscope, Users, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hierarchy = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        dividerRef.current,
        { width: 0, opacity: 0 },
        { width: "5rem", opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.3 }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const hierarchyData = [
    {
      id: 1,
      icon: <Building2 className="w-8 h-8" />,
      title: "Director",
      subtitle: "Head of the Institution",
      description: "Head of the institution responsible for overall strategic vision and policy making.",
      color: "bg-blue-50 text-[#0B5DBB]"
    },
    {
      id: 2,
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical Superintendent",
      subtitle: "Clinical Operations",
      description: "In-charge of clinical operations and maintaining the highest standards of patient care.",
      color: "bg-cyan-50 text-[#0AA6C6]"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Heads of Departments",
      subtitle: "Senior Experts",
      description: "Senior experts leading specialized medical wings like Surgery, Trauma, and Anaesthesia.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      id: 4,
      icon: <Award className="w-8 h-8" />,
      title: "Senior Residents",
      subtitle: "Ward Operations",
      description: "Specialized medical professionals managing ward operations and emergency responses.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-800">
            Institutional <span className="text-[#0AA6C6] font-bold">Hierarchy</span>
          </h2>
          <div 
            ref={dividerRef}
            className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"
          ></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Our organizational structure ensures efficient management and quality healthcare delivery 
            through a hierarchical system of experienced professionals.
          </p>
        </div>
      </div>

      {/* Hierarchy Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hierarchyData.map((item, index) => (
            <div 
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-8 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0AA6C6] group-hover:text-white transition-colors duration-300`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-[#0AA6C6] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.id}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-[#0AA6C6] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#0AA6C6] font-medium mb-3">{item.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative bar */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#0AA6C6] to-[#0B5DBB] rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#0AA6C6]/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#0AA6C6]"></div>
          <div className="h-px flex-1 bg-[#0AA6C6]/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hierarchy;

