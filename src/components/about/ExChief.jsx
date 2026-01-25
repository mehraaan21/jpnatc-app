import { useLayoutEffect, useRef } from "react";
import { User, Award, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExChief = () => {
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
          stagger: 0.1,
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

  const exChiefs = [
    {
      name: "Dr. Name 1",
      tenure: "Director (2015-2020)",
      description: "Led the institution during a period of significant growth and development.",
      color: "bg-blue-50"
    },
    {
      name: "Dr. Name 2",
      tenure: "Director (2010-2015)",
      description: "Established key departments and infrastructure.",
      color: "bg-cyan-50"
    },
    {
      name: "Dr. Name 3",
      tenure: "Director (2005-2010)",
      description: "Foundation director who shaped the vision of the institution.",
      color: "bg-teal-50"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-800">
            Ex <span className="text-[#0AA6C6] font-bold">Chiefs</span>
          </h2>
          <div 
            ref={dividerRef}
            className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"
          ></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            We honor our former chiefs who have contributed significantly to the development 
            of this institution and shaped its vision for excellence in trauma care.
          </p>
        </div>
      </div>

      {/* Chiefs Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exChiefs.map((chief, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-8 group"
            >
              {/* Profile Image */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className={`w-24 h-24 ${chief.color} rounded-full flex items-center justify-center group-hover:bg-[#0AA6C6] transition-colors duration-300`}>
                    <User className="w-10 h-10 text-[#0AA6C6] group-hover:text-white transition-colors" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#0AA6C6] rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2 group-hover:text-[#0AA6C6] transition-colors">
                {chief.name}
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-[#0AA6C6]" />
                <p className="text-[#0AA6C6] font-medium text-sm">{chief.tenure}</p>
              </div>

              <div className="h-px bg-gray-100 mb-4"></div>

              <p className="text-gray-600 text-center leading-relaxed">
                {chief.description}
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

export default ExChief;

