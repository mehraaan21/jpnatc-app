import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const contentRef = useRef(null);

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
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#eef7fa]">
      {/* Header Image Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600" 
          alt="JPNATC Hospital Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5DBB]/70 to-[#0AA6C6]/50"></div>
        
        {/* Page Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-[#0AA6C6]">History</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Divider */}
        <div ref={dividerRef} className="h-1 bg-[#0AA6C6] rounded-full mb-8"></div>

        {/* Established Section */}
        <div ref={contentRef} className="mb-12">
          <h2 className="text-3xl font-bold text-[#0B5DBB] mb-6">
            Established 1984
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              The <span className="font-semibold text-gray-900">Jai Prakash Narayan Apex Trauma Centre (JPNATC)</span> has a chequered and long history of planning and control. First conceived in 1984 by the Delhi Government, land was acquired at Raj Nagar on the Ring Road about two kilometers from AIIMS. For 20 odd years nothing really happened on the ground. However, as the vision was to provide the best possible trauma services, Delhi government decided to hand over the project to All India Institute of Medical Sciences' (AIIMS) to run. Finally India's first full-fledged trauma centre to treat victims of road accidents became a reality in the year 2006. While the dry run began on 27 November 2006, the centre became fully functional on 26 November, 2007 when the casualty (emergency department) was thrown open to general public.
            </p>

            <p>
              The total cost of constructing the centre was Rs 132 crores, and it is spread over an area of 20,600 sq metres and seven storeys that consist of five operation theatres, 152 inpatient and 30 casualty beds, including 26 ICU beds to provide both pre-hospital and emergency care. The centre also acts as a referral hospital, where patients sent by zonal public hospitals and satellite trauma centers will be observed and treated.
            </p>

            <p>
              957 staff, including doctors, resident doctors, nurses and technical staff from specialties like neurosurgery, orthopedics, cardio-thoracic and vascular surgery, general surgery and plastic surgery were initially recruited to make the trauma centre functional.
            </p>

            <p>
              A helipad is also planned on top of the building for transporting critically ill patients.
            </p>

            <p>
              The centre will be a boon for India, where road accidents have assumed epidemic proportions, with a death caused by road accident being reported every two minutes. According to the Health Ministry India accounts for almost 10% of total road accident fatalities in the world because of the large number of vehicles on Indian roads and the absence of any pre-hospital trauma care system which is most crucial when every minute impacts the patient's chances of survival. At least 40% deaths occur on the roadside due to delay in treatment.
            </p>

            <p>
              We can proudly say that JPNATC is currently the best integrated level I trauma centre in India and continues to set benchmarks in patient care not only nationally but also internationally.
            </p>
          </div>
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

export default History;

