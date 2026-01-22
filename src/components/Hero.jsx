


// "use client";

// import React from "react";


// export default function Hero() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="relative w-full h-screen  bg-white overflow-hidden">
     

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
//           <span className="inline-block bg-cyan-500 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
//             APEX CENTER OF EXCELLENCE
//           </span>

//           <h1 className="text-white text-4xl font-extrabold  text-[clamp(36px,5vw,64px)] max-w-4xl">
//             Excellence in{" "}
//             <span className="text-cyan-400 italic">Trauma Care</span> <br />
//             & Recovery
//           </h1>

//           <p className="mt-6 text-gray-200 max-w-xl text-sm leading-relaxed">
//             Dedicated to providing high-quality, professional multidisciplinary
//             care and rehabilitation to enable optimal recovery of independent
//             function.
//           </p>

//           <button className="mt-8 inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-sky-100 transition">
//             Book Appointment →
//           </button>
//         </div>

//         {/* OVERLAPPING CARDS */}
//         <div className="absolute left-0 right-0 mt-10 z-20">
//           <div className=" mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
//               {/* Notices */}
//               <div className="bg-white rounded-2xl  shadow-lg p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="font-bold text-sky-700 text-lg">
//                     Notices & Circulars
//                   </h3>
//                   <span className="text-sm text-sky-600 cursor-pointer">
//                     View All
//                   </span>
//                 </div>

//                 <div className="space-y-4 text-sm">
//                   <div>
//                     <p className="font-medium">
//                       Precautions against Fire incidents at AIIMS – ADVISORY
//                     </p>
//                     <span className="text-gray-400 text-xs">Oct 12, 2023</span>
//                   </div>

//                   <div>
//                     <p className="font-medium">
//                       Update on New Patient Registration Portal Guidelines
//                     </p>
//                     <span className="text-gray-400 text-xs">Oct 10, 2023</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Appointment */}
//               <div className="bg-cyan-500 text-white rounded-2xl shadow-xl p-8 text-center">
//                 <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
//                   📅
//                 </div>

//                 <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
//                 <p className="text-sm mb-4">अपॉइंटमेंट के लिए कॉल करें</p>

//                 <p className="text-2xl font-bold mb-6">011-26731237</p>

//                 <button className="bg-white text-sky-700 font-semibold px-6 py-3 rounded-full hover:bg-sky-100 transition">
//                   Online Registration
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>


//     </>
//   );
// }


"use client";

import React from "react";
import Lottie from "lottie-react"; 
import animationData from "../assets/Doctor.json"; 

export default function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen bg-gradient-to-br from-sky-100 to-cyan-200 overflow-hidden">
        {/* Hero Content - Flex Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 flex items-center justify-between h-full">
          {/* Left Side: Text Content */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block bg-cyan-500 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
              APEX CENTER OF EXCELLENCE
            </span>

            <h1 className="text-gray-800 text-4xl font-extrabold text-[clamp(36px,5vw,64px)] max-w-4xl">
              Excellence in{" "}
              <span className="text-cyan-400 italic">Trauma Care</span> <br />
              & Recovery
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl text-sm leading-relaxed">
              Dedicated to providing high-quality, professional multidisciplinary
              care and rehabilitation to enable optimal recovery of independent
              function.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-sky-100 transition">
              Book Appointment →
            </button>
          </div>

          {/* Right Side: Lottie Animation */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-md">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </div>
        </div>

        {/* OVERLAPPING CARDS */}
        <div className="absolute left-0 right-0 mt-10 z-20">
          <div className="mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Notices */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-sky-700 text-lg">
                    Notices & Circulars
                  </h3>
                  <span className="text-sm text-sky-600 cursor-pointer">
                    View All
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium">
                      Precautions against Fire incidents at AIIMS – ADVISORY
                    </p>
                    <span className="text-gray-400 text-xs">Oct 12, 2023</span>
                  </div>

                  <div>
                    <p className="font-medium">
                      Update on New Patient Registration Portal Guidelines
                    </p>
                    <span className="text-gray-400 text-xs">Oct 10, 2023</span>
                  </div>
                </div>
              </div>

              {/* Appointment */}
              <div className="bg-cyan-500 text-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  📅
                </div>

                <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
                <p className="text-sm mb-4">अपॉइंटमेंट के लिए कॉल करें</p>

                <p className="text-2xl font-bold mb-6">011-26731237</p>

                <button className="bg-white text-sky-700 font-semibold px-6 py-3 rounded-full hover:bg-sky-100 transition">
                  Online Registration
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}