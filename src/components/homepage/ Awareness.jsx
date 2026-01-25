import { useState, useEffect, useRef } from "react";

export default function Awareness() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);

  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      title: "Mental Hygiene in Trauma Patients",
      subtitle: "Infection Control Unit JPNATC, AIIMS New Delhi"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      title: "Inside JPNATC: World Class Trauma Care",
      subtitle: "Jai Prakash Narayan Apex Trauma Center AIIMS Facility Tour"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      title: "Emergency Response Training",
      subtitle: "Advanced Trauma Life Support Training Program"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f043844",
      title: "Road Safety Awareness Campaign",
      subtitle: "Community Outreach and Injury Prevention"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc",
      title: "First Aid Basics",
      subtitle: "Essential First Aid Knowledge for Everyone"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7",
      title: "ICU Care Excellence",
      subtitle: "Critical Care Best Practices and Protocols"
    }
  ];

  // Duplicate cards for infinite scroll effect
  const scrollCards = [...cards, ...cards, ...cards, ...cards, ...cards, ...cards];

  // Auto-scroll with continuous animation
  useEffect(() => {
    const scrollSpeed = 1.5; // Increased speed (was 0.5)
    let animationId;
    let lastTime = 0;

    const autoScroll = (currentTime) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPaused && scrollRef.current) {
        // Increment position based on time for consistent speed
        scrollPositionRef.current += (scrollSpeed * deltaTime) / 16;
        
        const maxScroll = scrollRef.current.scrollWidth / (scrollCards.length / cards.length);
        
        // Reset when reaching the end (infinite scroll effect)
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        scrollRef.current.scrollLeft = scrollPositionRef.current;
      }
      
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, cards.length, scrollCards.length]);

  return (
    <section className="bg-[#eef7fa] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">
            Awareness <span className="text-[#0AA6C6] font-bold">Programme</span>
          </h2>
          <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
        </div>

        {/* CONTINUOUS AUTO-SCROLL CAROUSEL */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {scrollCards.map((card, index) => (
              <div 
                key={`${card.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96"
              >
                <div className="group relative rounded-2xl overflow-hidden bg-gray-100 cursor-pointer">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[250px] object-cover"
                  />
                  
                  {/* ALWAYS VISIBLE PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                      <span className="ml-1 border-l-[12px] border-l-white border-y-[8px] border-y-transparent"></span>
                    </div>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-gray-600 text-sm">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

  
      </div>
    </section>
  );
}

