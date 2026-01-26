import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  Users,
  Stethoscope,
  Activity,
  HeartPulse,
  Brain,
  Microscope,
  Shield,
  Truck,
  Settings,
  FileText,
  Droplets,
  Flame,
  Hotel,
  Laptop,
  ClipboardList,
  Syringe
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const Staff = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(9);
  const ITEMS_PER_PAGE = 9;

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

  const handleViewMore = () => {
    setVisibleCards((prev) => prev + ITEMS_PER_PAGE);
  };

  const departments = [
  { icon: <Users className="w-6 h-6" />, title: "Chief", desc: "Office of the Chief overseeing hospital leadership and governance", link: "More Info" },
  { icon: <Stethoscope className="w-6 h-6" />, title: "Orthopaedic", desc: "Diagnosis and surgical management of bone and joint injuries", link: "More Info" },
  { icon: <Brain className="w-6 h-6" />, title: "Neurosurgery", desc: "Advanced surgical care for brain and spinal disorders", link: "More Info" },
  { icon: <HeartPulse className="w-6 h-6" />, title: "Trauma Surgery & Critical Care", desc: "Comprehensive trauma management and intensive critical care", link: "More Info" },
  { icon: <Laptop className="w-6 h-6" />, title: "Computer Facility", desc: "Hospital computing infrastructure and technical support", link: "More Info" },
  { icon: <Activity className="w-6 h-6" />, title: "Emergency", desc: "24/7 emergency medical and trauma response services", link: "More Info" },
  { icon: <FileText className="w-6 h-6" />, title: "Account Section", desc: "Financial operations, billing, and accounting services", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "Hospital Administration", desc: "Management of hospital operations and patient services", link: "More Info" },
  { icon: <Truck className="w-6 h-6" />, title: "Transport Office", desc: "Patient, staff, and logistics transportation services", link: "More Info" },
  { icon: <ClipboardList className="w-6 h-6" />, title: "Establishment Section", desc: "Human resources, staffing, and personnel administration", link: "More Info" },
  { icon: <Laptop className="w-6 h-6" />, title: "Information Technology", desc: "Hospital IT systems, networks, and digital records", link: "More Info" },
  { icon: <Microscope className="w-6 h-6" />, title: "Lab Medicine", desc: "Clinical laboratory diagnostics and investigations", link: "More Info" },
  { icon: <Activity className="w-6 h-6" />, title: "Radiology", desc: "Diagnostic imaging including X-ray, CT, and MRI", link: "More Info" },
  { icon: <Settings className="w-6 h-6" />, title: "Store Section", desc: "Procurement and inventory management of hospital supplies", link: "More Info" },
  { icon: <Shield className="w-6 h-6" />, title: "Sanitation Office", desc: "Hospital cleanliness, hygiene, and waste management", link: "More Info" },
  { icon: <FileText className="w-6 h-6" />, title: "Medical Record Section", desc: "Maintenance of patient medical records and documentation", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "Nursing", desc: "Patient care services delivered by trained nursing staff", link: "More Info" },

  { icon: <Syringe className="w-6 h-6" />, title: "TC1 OT", desc: "Dedicated trauma operation theatre services", link: "More Info" },
  { icon: <HeartPulse className="w-6 h-6" />, title: "TC2 ICU", desc: "Intensive care unit for trauma patients", link: "More Info" },
  { icon: <HeartPulse className="w-6 h-6" />, title: "TC2A ICU", desc: "Advanced trauma intensive care unit", link: "More Info" },
  { icon: <HeartPulse className="w-6 h-6" />, title: "TC3 ICU", desc: "Critical care for severe trauma cases", link: "More Info" },
  { icon: <HeartPulse className="w-6 h-6" />, title: "TC3A ICU", desc: "Specialized ICU for high-dependency trauma care", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC4 Ward", desc: "Trauma patient inpatient ward services", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC4A Ward", desc: "Extended trauma care inpatient ward", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC5 Ward", desc: "General trauma recovery ward", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC5A Ward", desc: "Post-trauma patient care ward", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC6 Ward", desc: "Inpatient trauma treatment facilities", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC6A Ward", desc: "Supportive trauma inpatient services", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC7 Ward", desc: "Long-stay trauma patient ward", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "TC7A Ward", desc: "Extended care trauma ward", link: "More Info" },
  { icon: <Droplets className="w-6 h-6" />, title: "Blood Bank", desc: "24/7 blood collection, storage, and transfusion services", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "F.OPD", desc: "Follow-up outpatient consultation services", link: "More Info" },
  { icon: <Syringe className="w-6 h-6" />, title: "Operation Theater", desc: "Advanced surgical operation theatre complex", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "H.I.F.C.O.M", desc: "Hospital infection control and monitoring unit", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "N.I.S", desc: "Nursing information and supervision services", link: "More Info" },
  { icon: <Activity className="w-6 h-6" />, title: "Physiotherapy", desc: "Rehabilitation and physical therapy services", link: "More Info" },
  { icon: <Syringe className="w-6 h-6" />, title: "Anaesthesia & CC", desc: "Anaesthesia and critical care management", link: "More Info" },
  { icon: <Shield className="w-6 h-6" />, title: "Forensic Medicine", desc: "Medico-legal examinations and forensic analysis", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "Dietetics", desc: "Clinical nutrition and dietary planning services", link: "More Info" },
  { icon: <Hotel className="w-6 h-6" />, title: "Hostel", desc: "Accommodation facilities for staff and residents", link: "More Info" },
  { icon: <Microscope className="w-6 h-6" />, title: "Lab Medicine (Microbiology)", desc: "Microbiological testing and infection diagnostics", link: "More Info" },
  { icon: <Microscope className="w-6 h-6" />, title: "Histopathology", desc: "Tissue diagnosis and pathological examination", link: "More Info" },
  { icon: <Flame className="w-6 h-6" />, title: "Fire Guard", desc: "Fire safety and emergency response services", link: "More Info" },
  { icon: <Settings className="w-6 h-6" />, title: "Central Linen Facility (CLF)", desc: "Hospital linen processing and management", link: "More Info" },
  { icon: <Microscope className="w-6 h-6" />, title: "Lab Resident", desc: "Resident doctors supporting laboratory services", link: "More Info" },
  { icon: <Settings className="w-6 h-6" />, title: "Electrical Engineering Department", desc: "Electrical systems maintenance and safety", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "Trauma Nurse Coordinator", desc: "Coordination of trauma nursing services", link: "More Info" },
  { icon: <Shield className="w-6 h-6" />, title: "EHS", desc: "Environment, health, and safety management", link: "More Info" },
  { icon: <Settings className="w-6 h-6" />, title: "Medicine Store", desc: "Storage and distribution of medicines", link: "More Info" },
  { icon: <Settings className="w-6 h-6" />, title: "General Store", desc: "General hospital inventory and supplies", link: "More Info" },
  { icon: <Settings className="w-6 h-6" />, title: "Linen Store", desc: "Storage and supply of hospital linen", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "MSSO", desc: "Medical social service office and patient support", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "ORBO", desc: "Operational and administrative coordination unit", link: "More Info" },
  { icon: <Settings className="w-6 h-6" />, title: "E.S.D", desc: "Engineering services department", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "M.S Office", desc: "Medical superintendent office", link: "More Info" },
  { icon: <Users className="w-6 h-6" />, title: "D.N.S Office", desc: "Director of nursing services office", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "Project", desc: "Hospital development and project management unit", link: "More Info" },
  { icon: <Building2 className="w-6 h-6" />, title: "Other", desc: "Additional hospital support services", link: "More Info" },
  { icon: <Activity className="w-6 h-6" />, title: "Emergency Medicine", desc: "Specialized emergency medical care services", link: "More Info" },
  { icon: <Syringe className="w-6 h-6" />, title: "Neuroanesthesia", desc: "Anesthesia services for neurosurgical procedures", link: "More Info" },
  { icon: <Stethoscope className="w-6 h-6" />, title: "Paediatric Surgery", desc: "Surgical care for infants and children", link: "More Info" }
];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] pt-38 py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headingRef} className="text-center mb-14">
          <h2 className="text-6xl font-semibold text-gray-800">
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
          {departments.slice(0, visibleCards).map((dept, index) => (
            <div 
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border  border-[#60b4c5] border-b-4 hover:border-b-[#0AA6C6] p-6 group"
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

        {/* View More CTA */}
        {visibleCards < departments.length && (
          <div className="text-center mt-16">
            <button 
              onClick={handleViewMore}
              className="bg-[#0AA6C6] cursor-pointer hover:bg-[#0891b2] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Staff;

