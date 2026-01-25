import { useLayoutEffect, useRef } from "react";
import { ArrowUpCircle, Phone, FileText, Tablet, Monitor, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITInnovation = () => {
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

  const innovations = [
    {
      icon: <ArrowUpCircle className="w-6 h-6" />,
      title: "RFID Lift Control",
      desc: "World's first patient stretcher lift access system using RFID technology to prioritize critical patient transfers.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Integrated Call Center",
      desc: "A first-of-its-kind 24/7 hub managing backend administration, patient appointments, and inquiries via 30 dedicated lines.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "e-MLC System",
      desc: "A tamper-proof, computerized Medico-Legal Case sheet system that includes real-time digital injury images.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Tablet className="w-6 h-6" />,
      title: "OPD Tablet System",
      desc: "Clinicians utilize stylus-based tablets (mCura) for digital prescriptions, record retrieval, and photo/video documentation.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-Time PDS",
      desc: "Emergency Patient Display System showing live status updates and wait times for CT, X-Ray, and suturing.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Pneumatic Tube System",
      desc: "A complex automated network delivering blood samples and medications across wards at 25 feet per second.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-800">
            IT <span className="text-[#0AA6C6] font-bold">Innovations</span>
          </h2>
          <div 
            ref={dividerRef}
            className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"
          ></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            JPNATC leads the world in healthcare technology, implementing indigenous solutions 
            to ensure transparency, accountability, and clinical excellence.
          </p>
        </div>
      </div>

      {/* Innovations Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-6 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0AA6C6] group-hover:text-white transition-colors duration-300`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#0AA6C6] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Innovation number */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Innovation {index + 1}</span>
                <div className="h-px flex-1 bg-gray-100"></div>
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

export default ITInnovation;

