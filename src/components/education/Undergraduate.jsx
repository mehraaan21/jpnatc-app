export default function Undergraduate() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Undergraduate <span className="text-[#0AA6C6] font-bold">Programs</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Our undergraduate programs provide comprehensive education in various medical 
                        and allied health sciences disciplines.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    📚
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0AA6C6]">Available Programs</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li>• Bachelor of Medicine and Surgery (MBBS)</li>
                                <li>• Bachelor of Nursing (B.Sc Nursing)</li>
                                <li>• Bachelor of Physiotherapy (BPT)</li>
                                <li>• Bachelor of Pharmacy (B.Pharm)</li>
                                <li>• Bachelor of Medical Laboratory Technology</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0AA6C6]">Eligibility Criteria</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li>• 10+2 with Physics, Chemistry, Biology</li>
                                <li>• Minimum 50% aggregate marks</li>
                                <li>• Must qualify entrance examination</li>
                                <li>• Age limit: 17-25 years</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

