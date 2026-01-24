export default function ContinuingEducation() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Continuing <span className="text-[#0AA6C6] font-bold">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <p className="text-gray-600 mb-8 text-lg text-center max-w-2xl mx-auto">
                        We provide ongoing learning opportunities for healthcare professionals to 
                        update their skills and knowledge.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    📚
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0AA6C6]">Short-term Courses</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li>• Basic Life Support (BLS)</li>
                                <li>• Advanced Cardiac Life Support (ACLS)</li>
                                <li>• Infection Control Practices</li>
                                <li>• Emergency Medicine Updates</li>
                                <li>• Clinical Skill Enhancement</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    🎯
                                </div>
                                <h3 className="text-2xl font-semibold text-[#0AA6C6]">Workshops & Seminars</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                <li>• Quarterly Medical Conferences</li>
                                <li>• Guest Lecture Series</li>
                                <li>• Case Discussion Sessions</li>
                                <li>• Research Methodology Workshops</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#0AA6C6] to-cyan-600 text-white p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                🎓
                            </div>
                            <h3 className="text-2xl font-semibold">CME Credits</h3>
                        </div>
                        <p className="text-cyan-100 text-lg leading-relaxed">
                            All our continuing education programs are accredited with CME credits 
                            recognized by the Medical Council of India. Participants will receive 
                            certificates upon completion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

