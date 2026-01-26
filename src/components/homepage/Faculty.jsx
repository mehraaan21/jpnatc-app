import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Faculty() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const facultyRefs = useRef([]);

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

      // Animate faculty cards one by one with stagger
      gsap.fromTo(
        facultyRefs.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const faculty = [
    {
      name: "Prof. Kamran Farooque",
      role: "Chief, JPNATC & Head, Orthopaedic",
      img: "/src/assets/fac1.jpg",
    },
    {
      name: "Prof. Vijay Sharma",
      role: "Professor",
      img: "/src/assets/fac2.jpg",
    },
    {
      name: "Prof. Vivek Trikha",
      role: "Professor",
      img: "/src/assets/fac3.jpg",
    },
    {
      name: "Prof. Buddhadev Chowdhury",
      role: "Professor",
      img: "/src/assets/fac4.jpg",
    },
  ];

  return (
    <section ref={containerRef} className="bg-[#eef7fa] py-20">
      {/* ===== Heading ===== */}
      <div ref={headingRef} className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-800">
          Let&apos;s Meet our{" "}
          <span className="text-[#0AA6C6] font-bold">Faculties</span>
        </h2>
        <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
      </div>
      



      

      {/* ===== Faculty Grid ===== */}
      <div className="max-w-7xl mx-auto  px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {faculty.map((item, index) => (
          <div
            key={index}
            ref={(el) => (facultyRefs.current[index] = el)}
            className="text-center"
          >
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-sm mb-6">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[360px] object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500 mt-1">
              {item.role}
            </p>
          </div>
        ))}
      </div>

      {/* ===== View More Button ===== */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-[#0AA6C6] text-white cursor-pointer font-semibold rounded-full hover:bg-[#0885a8] transition-colors duration-300 shadow-md hover:shadow-lg">
          View More
        </button>
      </div>
    </section>
  );
}
