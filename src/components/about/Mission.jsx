import { useLayoutEffect, useRef } from "react";
import { Eye, Target, Heart, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionPage = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const imageRef = useRef(null);
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
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.4 }
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

  const values = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision",
      desc: "To be a center of excellence in trauma care, medical education, and research at the national and international level.",
      color: "text-[#0B5DBB]",
      bg: "bg-blue-50"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      desc: "To provide accessible, affordable, and quality healthcare to all patients with compassion and dedication.",
      color: "text-[#0AA6C6]",
      bg: "bg-cyan-50"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Our Values",
      desc: "Compassion, integrity, excellence, and commitment to patient care guide everything we do.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Our Commitment",
      desc: "Continuous improvement in clinical outcomes through innovation, research, and training.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa]">
      {/* Header Image Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600" 
          alt="JPNATC Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5DBB]/70 to-[#0AA6C6]/50"></div>
        
        {/* Page Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-[#0AA6C6]">Mission</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Divider */}
        <div ref={dividerRef} className="h-1 bg-[#0AA6C6] rounded-full mb-12"></div>

        {/* Image Card */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
              alt="JPNATC Facility"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B5DBB]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-xl font-semibold">Excellence in Trauma Care</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#0AA6C6]/20 border-b-4 hover:border-b-[#0AA6C6] p-8 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:bg-[#0AA6C6] group-hover:text-white transition-colors duration-300`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#0AA6C6] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#0AA6C6]/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#0AA6C6]"></div>
          <div className="h-px flex-1 bg-[#0AA6C6]/30"></div>
        </div>
      </div>
    </section>
  );
};

export default MissionPage;

