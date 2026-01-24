

import React from 'react';

const PhotoGallery = () => {
  const galleryItems = [
    { id: 1, title: "Main Building", subtitle: "Exterior View", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Emergency Wing", subtitle: "24/7 Support", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Advanced ICU", subtitle: "Critical Care Unit", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Operation Theater", subtitle: "Surgical Excellence", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "MRI Center", subtitle: "Precision Diagnostics", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Research Lab", subtitle: "Innovating Health", img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Pharmacy", subtitle: "Fully Stocked", img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Recovery Ward", subtitle: "Patient Comfort", img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header Section */}
        {/* <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
            Photo <span className="text-blue-600">Gallery</span>
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-6 mx-auto md:mx-0"></div>
          <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
            
          </p>
        </div> */}

         <div className="text-center my-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Photo <span className="text-blue-600">&</span> Gallery
          </h1>
            <div className="my-6 flex justify-center">
            <div className="h-1.5 w-100 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-slate-500 text-lg max-auto mx-auto">
          Explore our state-of-the-art facilities and dedicated medical environments at JPNATC.
          </p>
        
        </div>

        {/* Interactive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay (Gradual) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content Overlay (Centered/Modern) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                
                {/* Modern Glass Card that pops up on hover */}
                <div className="translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full">
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest">
                    {item.subtitle}
                  </p>
                  
                  {/* Decorative line inside the glass */}
                  <div className="mt-4 h-1 w-12 bg-blue-500 mx-auto rounded-full"></div>
                </div>

              </div>

              {/* Always visible identifier (Optional) */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">0{item.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PhotoGallery;