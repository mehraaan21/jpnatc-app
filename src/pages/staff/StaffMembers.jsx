import { useLayoutEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Stethoscope, Shield } from "lucide-react";
import { staffMembers } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

/**
 * Constants
 */
const INITIAL_ITEMS_PER_PAGE = 9;

/**
 * Staffs Component
 * Displays hospital staff members with search and department filter
 */
const Staffs = () => {
  /** Refs for GSAP animations */
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);

  /** State for pagination, search, and department filter */
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_PER_PAGE);
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");


  /**
   * Generate unique departments for filter dropdown
   */
  const departments = useMemo(() => {
    return ["All", ...new Set(staffMembers.map((member) => member.dept))];
  }, [staffMembers]);

  /**
   * Filter staff based on search query and selected department
   * Memoized for performance
   */
  const filteredStaff = useMemo(() => {
    return staffMembers.filter((member) => {
      const matchesDept = selectedDept === "All" || member.dept === selectedDept;
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.dept.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesDept && matchesSearch;
    });
  }, [staffMembers, selectedDept, searchQuery]);

  /**
   * GSAP animations for heading, divider, and staff cards
   */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      // Animate divider under heading
      gsap.fromTo(
        dividerRef.current,
        { width: 0, opacity: 0 },
        { width: "5rem", opacity: 1, duration: 0.6, delay: 0.3 }
      );

      // Animate staff cards on scroll
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /** Handle 'View More' button click */
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + INITIAL_ITEMS_PER_PAGE);
  };

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      
      {/* ===== Heading Section ===== */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 ref={headingRef} className="text-6xl font-semibold text-gray-800">
          Our <span className="text-[#0AA6C6] font-bold">Staff</span>
        </h2>
        <div ref={dividerRef} className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4" />
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          A dedicated team of faculty, clinicians, administrators, and support professionals
          driving excellence in trauma care and academics.
        </p>
      </div>

      {/* ===== Search & Department Filter ===== */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-6 px-6 mb-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Search Input */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search by name, role or department..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(INITIAL_ITEMS_PER_PAGE); // Reset pagination
              }}
              className="w-full pl-12 pr-4 py-4 bg-slate-100 border-2 border-transparent rounded-2xl
                         focus:bg-white focus:border-[#0AA6C6] focus:ring-4 focus:ring-cyan-500/10
                         transition-all outline-none font-medium text-slate-700"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400
                             group-focus-within:text-[#0AA6C6] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </span>
          </div>

          {/* Department Dropdown */}
          <div className="relative">
            <select
              value={selectedDept}
              onChange={(e) => {
                setSelectedDept(e.target.value);
                setVisibleCount(INITIAL_ITEMS_PER_PAGE); // Reset pagination
              }}
              className="w-full appearance-none bg-slate-100 border-2 border-transparent
                         py-4 px-6 pr-12 rounded-2xl focus:bg-white focus:border-[#0AA6C6]
                         focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none
                         font-semibold text-slate-700 cursor-pointer"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0AA6C6]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                      d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* ===== Staff Cards Grid ===== */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.slice(0, visibleCount).map((staff, index) => (
            <div
              key={staff.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition
                         border border-[#60b4c5] border-b-4 hover:border-b-[#0AA6C6] overflow-hidden"
            >
              {/* Staff Image */}
              <img
                src={staff.img}
                alt={staff.name}
                className="w-full h-56 object-cover"
              />

              {/* Staff Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-[#0AA6C6]">
                  {staff.type === "Faculty" && <Stethoscope />}
                  {staff.type === "Staff" && <Users />}
                  {staff.type === "Ex-Chief" && <Shield />}
                  <span className="text-sm font-semibold">{staff.type}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800">{staff.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{staff.role}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Department: <span className="font-medium">{staff.dept}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== View More Button ===== */}
        {visibleCount < filteredStaff.length && (
          <div className="text-center mt-16">
            <button
              onClick={handleViewMore}
              className="bg-[#0AA6C6] hover:bg-[#0891b2] text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
            >
              View More
            </button>
          </div>
        )}

        {/* ===== No Results Message ===== */}
        {filteredStaff.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            No staff found matching your criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default Staffs;
