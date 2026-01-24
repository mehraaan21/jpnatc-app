export default function Mission() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Our <span className="text-[#0AA6C6] font-bold">Mission</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-[#0AA6C6] mb-4">Our Vision</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To be a center of excellence in trauma care, medical education, 
                                and research at the national and international level.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-[#0AA6C6] mb-4">Our Mission</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To provide accessible, affordable, and quality healthcare to all 
                                patients with compassion and dedication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

