import { useLayoutEffect, useRef } from "react";
import { Heart, GraduationCap, FlaskConical, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AimsAndObjective = () => {
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
        { opacity: 0, y: 40 },
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

  const objectives = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient Care",
      desc: "Provide excellent healthcare services to all patients with cutting-edge technology and compassionate care.",
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-50"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Medical Education",
      desc: "Train future healthcare professionals through rigorous academic and clinical programs.",
      color: "from-cyan-500 to-cyan-700",
      bg: "bg-cyan-50"
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Research",
      desc: "Conduct advanced research to push the boundaries of medical knowledge and practice.",
      color: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-50"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Service",
      desc: "Serve the community through proactive outreach and sustainable health initiatives.",
      color: "from-teal-500 to-teal-700",
      bg: "bg-teal-50"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-800">
            Aims <span className="text-[#0AA6C6] font-bold">&</span> Objectives
          </h2>
          <div 
            ref={dividerRef}
            className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"
          ></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Our core pillars define our commitment to excellence in the medical field and 
            our service to humanity. Through continuous learning and advanced healthcare 
            solutions, we strive to improve lives every day.
          </p>
        </div>
      </div>

      {/* Objectives Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((item, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-8 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 text-[#0AA6C6] group-hover:bg-[#0AA6C6] group-hover:text-white transition-colors duration-300`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#0AA6C6] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
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

export default AimsAndObjective;

