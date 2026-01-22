export default function Mission() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-8">Our Mission</h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-[#0B5DBB] mb-4">Mission Statement</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To provide accessible, affordable, and high-quality healthcare services to all sections 
                            of society, with special emphasis on trauma care, emergency services, and medical education. 
                            We strive to be a center of excellence in patient care, research, and innovation.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-[#0B5DBB] mb-4">Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To be a globally recognized healthcare institution that sets benchmarks in trauma care, 
                            medical education, and research, while remaining accessible to the common man and 
                            contributing to the improvement of national health standards.
                        </p>
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-[#0B5DBB] mb-4">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0B5DBB] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">♥</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Compassion</h3>
                            <p className="text-gray-600 text-sm">We care for every patient with empathy and kindness</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0B5DBB] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">★</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
                            <p className="text-gray-600 text-sm">We strive for the highest standards in healthcare</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#0B5DBB] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">⚖</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Integrity</h3>
                            <p className="text-gray-600 text-sm">We maintain the highest ethical standards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

