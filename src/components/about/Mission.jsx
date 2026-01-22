export default function Mission() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Mission</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Our Vision</h3>
                            <p className="text-gray-700">
                                To be a center of excellence in trauma care, medical education, 
                                and research at the national and international level.
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-800 mb-3">Our Mission</h3>
                            <p className="text-gray-700">
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

