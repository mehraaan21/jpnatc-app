// <<<<<<< HEAD
// import React from 'react';
// =======
// export default function History() {
//     return (
//         <div className="min-h-screen bg-[#eef7fa] py-16">
//             <div className="max-w-7xl mx-auto px-4">
//                 {/* Heading */}
//                 <div className="text-center mb-14">
//                     <h2 className="text-4xl font-semibold text-gray-800">
//                         Our <span className="text-[#0AA6C6] font-bold">History</span>
//                     </h2>
//                     <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
//                 </div>

//                 <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
//                     <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//                         Jai Prakash Narayan Apex Trauma Center (JPNATC) was established with the vision 
//                         to provide world-class trauma care services to the patients.
//                     </p>
//                     <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//                         Since its inception, the center has been at the forefront of providing 
//                         emergency medical services, trauma surgery, and rehabilitation.
//                     </p>
//                     <p className="text-gray-600 text-lg leading-relaxed">
//                         Our journey began with a commitment to serve the community and save lives 
//                         through excellence in healthcare delivery.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
// >>>>>>> 1b794d580e0bab16d9471cbefc9021f613e020fb

const History = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* <div className="text-center my-20">
        <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
          Our <span className="text-blue-600">History</span>
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div> */}

      {/* Header Image Section */}
      <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600" 
          alt="JPNATC Hospital Building"
          className="w-full h-full object-cover"
        />
        {/* Modern White Gradient overlay at bottom */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/10"></div> */}
        
       
      </div>

      {/* Main Content Area */}
      <div className="mx-auto px-6 md:px-24 py-12">

         {/* "History" Title - Matching the image style */}
        <div className="py-6 text-start md:bottom-12 md:left-24">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our <span className="text-blue-600">History</span>
          </h1>
        </div>
        
        {/* Established 1984 Blue Line Section */}
        <div className="border-b-2 border-blue-600 mb-8 pb-3">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-700">
            Established 1984
          </h2>
        </div>

        {/* Paragraphs with high-quality spacing */}
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                        The <span className="font-semibold text-slate-900">Jai Prakash Narayan Apex Trauma Centre (JPNATC)</span> has a chequered and long history of planning and control. First conceived in 1984 by the Delhi Government, land was acquired at Raj Nagar on the Ring Road about two kilometers from AIIMS. For 20 odd years nothing really happened on the ground. However, as the vision was to provide the best possible trauma services, Delhi government decided to hand over the project to All India Institute of Medical Sciences' (AIIMS) to run. Finally India's first full-fledged trauma centre to treat victims of road accidents became a reality in the year 2006. While the dry run began on 27 November 2006, the centre became fully functional on 26 November, 2007 when the casualty (emergency department) was thrown open to general public.
          </p>

           <div className="space-y-8">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            The total cost of constructing the centre was Rs 132 crores, and it is spread over an area of 20,600 sq metres and seven storeys that consist of five operation theatres, 152 inpatient and 30 casualty beds, including 26 ICU beds to provide both pre-hospital and emergency care. The centre also acts as a referral hospital, where patients sent by zonal public hospitals and satellite trauma centers will be observed and treated.
           </p>
           </div>

           
           <div className="space-y-8">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
           957 staff, including doctors, resident doctors, nurses and technical staff from specialties like neurosurgery, orthopedics, cardio-thoracic and vascular surgery, general surgery and plastic surgery were initially recruited to make the trauma centre functional.
           </p>
           </div>

           
           <div className="space-y-8">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
           A helipad is also planned on top of the building for transporting critically ill patients.
           </p>
           </div>

           
           <div className="space-y-8">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            The centre will be a boon for India, where road accidents have assumed epidemic proportions, with a death caused by road accident being reported every two minutes. According to the Health Ministry India accounts for almost 10% of total road accident fatalities in the world because of the large number of vehicles on Indian roads and the absence of any pre-hospital trauma care system which is most crucial when every minute impacts the patient's chances of survival. At least 40% deaths occur on the roadside due to delay in treatment.
           </p>
           </div>

           
           <div className="space-y-8">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
           We can proudly say that JPNATC is currently the best integrated level I trauma centre in India and continues to set benchmarks in patient care not only nationally but also internationally.
           </p>
           </div>

        </div>

        {/* Bottom Decorative Element for Modern Look */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200"></div>
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default History;