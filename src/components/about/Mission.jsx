import React from 'react';

const MissionPage = ({ imageUrl, title }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
          Our <span className="text-blue-600">Mission</span>
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>
        
        {/* SECTION 1: Modern Hover Image Card */}
        <div className="flex justify-center items-center mb-20">
          
          <div className="group relative w-full max-auto h-[450px] cursor-pointer">
            
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Main Animated Div */}
            <div className="relative z-10 h-full w-full bg-white rounded-3xl overflow-hidden shadow-xl 
                            border border-white transition-all duration-500 ease-out
                            group-hover:z-50 group-hover:-translate-y-6 group-hover:shadow-2xl group-hover:scale-[1.02]">
              
              {/* Image Container */}
              <div className="h-full w-full overflow-hidden">
                <img 
                  src={imageUrl || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-0 w-full p-8 bg-white/40 backdrop-blur-lg border-t border-white/20
                              translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-slate-900">{title || "JPNATC Campus"}</h3>
                <p className="text-slate-700 font-medium">Excellence in Trauma Care</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Mission & Vision Content */}
        <div className="space-y-12">
        

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 text-2xl group-hover:scale-110 transition-transform">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-[#0B5DBB] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be a center of excellence in trauma care, medical education, 
                and research at the national and international level.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide accessible, affordable, and quality healthcare to all 
                patients with compassion and dedication.
              </p>
            </div>

             {/* Mission Card */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide accessible, affordable, and quality healthcare to all 
                patients with compassion and dedication.
              </p>
            </div>

             {/* Mission Card */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide accessible, affordable, and quality healthcare to all 
                patients with compassion and dedication.
              </p>
            </div>


             {/* Mission Card */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide accessible, affordable, and quality healthcare to all 
                patients with compassion and dedication.
              </p>
            </div>
             {/* Mission Card */}
            <div className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide accessible, affordable, and quality healthcare to all 
                patients with compassion and dedication.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionPage;

