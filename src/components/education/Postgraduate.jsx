export default function Postgraduate() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Postgraduate <span className="text-[#0AA6C6] font-bold">Courses</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Our postgraduate courses offer advanced specialization in various medical 
                        and surgical fields.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    🎓
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0AA6C6]">MD/MS Programs</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li>• MD in General Medicine</li>
                                <li>• MD in Pediatrics</li>
                                <li>• MD in Dermatology</li>
                                <li>• MS in General Surgery</li>
                                <li>• MS in Orthopedics</li>
                                <li>• MD in Anesthesiology</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    ⭐
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0AA6C6]">Super Speciality</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li>• DM in Cardiology</li>
                                <li>• DM in Neurology</li>
                                <li>• MCh in Cardiothoracic Surgery</li>
                                <li>• MCh in Neurosurgery</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#0AA6C6] to-cyan-600 text-white p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                📋
                            </div>
                            <h3 className="text-2xl font-semibold">Admission Process</h3>
                        </div>
                        <p className="text-cyan-100 text-lg leading-relaxed">
                            Admissions are conducted through NEET-PG entrance examination. Candidates 
                            must have completed their MBBS with mandatory internship.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

