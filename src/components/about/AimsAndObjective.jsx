export default function AimsAndObjective() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Aims & <span className="text-[#0AA6C6] font-bold">Objectives</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient Care</h3>
                            <p className="text-gray-600">Provide excellent healthcare services to all patients</p>
                        </div>
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Education</h3>
                            <p className="text-gray-600">Train future healthcare professionals through various programs</p>
                        </div>
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Research</h3>
                            <p className="text-gray-600">Conduct research to advance medical knowledge and practices</p>
                        </div>
                        <div className="border-l-4 border-[#0AA6C6] pl-6 py-4 bg-cyan-50 rounded-r-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Service</h3>
                            <p className="text-gray-600">Serve the community through outreach programs and health initiatives</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

