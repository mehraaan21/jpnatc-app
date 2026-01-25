import { useLayoutEffect, useRef } from "react";
import { Activity, Heart, Monitor, FlaskConical, Pill, Stethoscope } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
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

  const facilitiesList = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Emergency Services",
      desc: "24/7 emergency care with advanced life support and trauma response teams.",
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "ICU & Critical Care",
      desc: "State-of-the-art Intensive Care Units with continuous monitoring and specialist support.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Modern OT",
      desc: "Advanced Operation Theaters equipped with the latest surgical technology and robotic tools.",
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Diagnostic Imaging",
      desc: "Fully digital diagnostic services including MRI, CT Scan, and high-resolution X-rays.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Advanced Laboratory",
      desc: "Automated pathology and clinical labs for rapid and accurate diagnostic testing.",
      color: "text-teal-500",
      bg: "bg-teal-50"
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Pharmacy 24/7",
      desc: "In-house pharmacy providing life-saving medicines and surgical supplies round the clock.",
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-800">
            Our <span className="text-[#0AA6C6] font-bold">Facilities</span>
          </h2>
          <div 
            ref={dividerRef}
            className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"
          ></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            JPNATC provides world-class medical infrastructure and dedicated support services. 
            From 24/7 emergency response to advanced surgical suites, our facilities are designed 
            to offer the highest level of patient safety and clinical excellence.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesList.map((item, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-6 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 ${item.color} group-hover:bg-[#0AA6C6] group-hover:text-white transition-colors duration-300`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#0AA6C6] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Status Indicator */}
              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Available 24/7</span>
              </div>
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

export default Facilities;

