export default function Awareness() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADING */}
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-0.5 bg-cyan-600"></span>
          <h2 className="text-3xl font-semibold text-gray-900">
            Awareness Programme
          </h2>
        </div>

        {/* VIDEO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* CARD 1 */}
          <div>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Mental Hygiene"
                className="w-full h-75 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                  <span className="ml-1 border-l-12 border-l-white border-y-8border-y-transparent"></span>
                </button>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Mental Hygiene in Trauma Patients
            </h3>
            <p className="mt-2 text-gray-600">
              Infection Control Unit JPNATC, AIIMS New Delhi
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Inside JPNATC"
                className="w-full h-75 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                  <span className="ml-1 border-l-12 border-l-white border-y-8 border-y-transparent"></span>
                </button>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Inside JPNATC: World Class Trauma Care
            </h3>
            <p className="mt-2 text-gray-600">
              Jai Prakash Narayan Apex Trauma Center AIIMS Facility Tour
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
