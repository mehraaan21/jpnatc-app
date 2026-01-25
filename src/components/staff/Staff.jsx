import { useLayoutEffect, useRef } from "react";
import { Building2, Users, Stethoscope, Activity } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Staff = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
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

      // Animate divider
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

      // Animate cards stagger
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const departments = [
    { 
      icon: <Building2 className="w-6 h-6" />, 
      title: "Emergency Medicine", 
      desc: "24/7 critical care services with specialized trauma response team",
      link: "More Info",
      count: "45 Staff"
    },
    { 
      icon: <Stethoscope className="w-6 h-6" />, 
      title: "Hospital Administration", 
      desc: "Management of hospital operations and patient services",
      link: "More Info",
      count: "32 Staff"
    },
    { 
      icon: <Activity className="w-6 h-6" />, 
      title: "ICU Complex (TC3)", 
      desc: "Specialized care for multi-trauma and critical patients",
      link: "More Info",
      count: "68 Staff"
    },
    { 
      icon: <Building2 className="w-6 h-6" />, 
      title: "Neurosurgery", 
      desc: "Expert management of brain and spinal cord injuries",
      link: "More Info",
      count: "28 Staff"
    },
    { 
      icon: <Building2 className="w-6 h-6" />, 
      title: "Radiology including MRI", 
      desc: "Advanced imaging services CT, MRI and interventional radiology",
      link: "More Info",
      count: "35 Staff"
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Information Technology", 
      desc: "Digital hospital information systems and patient records",
      link: "More Info",
      count: "18 Staff"
    },
    { 
      icon: <Building2 className="w-6 h-6" />, 
      title: "Orthopaedic Surgery", 
      desc: "Complex fracture management and trauma reconstruction",
      link: "More Info",
      count: "42 Staff"
    },
    { 
      icon: <Activity className="w-6 h-6" />, 
      title: "Blood Bank Emergency", 
      desc: "24/7 blood transfusion and emergency blood services",
      link: "More Info",
      count: "22 Staff"
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "MSSS Office", 
      desc: "Medical Social Service and patient counseling support",
      link: "More Info",
      count: "15 Staff"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-800">
            Our <span className="text-[#0AA6C6] font-bold">Departments</span>
          </h2>
          <div 
            ref={dividerRef}
            className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"
          ></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            JPNATC comprises specialized departments dedicated to providing 
            comprehensive trauma care and rehabilitation services.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#0B5DBB] to-[#0AA6C6] rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">24+</div>
              <div className="text-white/80">Specialties</div>
            </div>
            <div className="p-4 border-y md:border-y-0 md:border-x border-white/20">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Staff Members</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Patients/Day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Departments Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-6 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 text-[#0AA6C6] group-hover:bg-[#0AA6C6] group-hover:text-white transition-colors duration-300">
                {dept.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#0AA6C6] transition-colors">
                {dept.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {dept.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500 font-medium">{dept.count}</span>
                <button className="text-[#0AA6C6] text-sm font-semibold hover:underline flex items-center gap-1">
                  {dept.link}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#0AA6C6] hover:bg-[#0891b2] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            View All Departments →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Staff;

