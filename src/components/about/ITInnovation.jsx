export default function ITInnovation() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        IT <span className="text-[#0AA6C6] font-bold">Innovation</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "💾", title: "Digital Records", desc: "Electronic Health Records (EHR) system for seamless patient data management" },
                            { icon: "🌐", title: "Online Portal", desc: "Patient portal for appointment booking and test results" },
                            { icon: "📹", title: "Telemedicine", desc: "Remote consultation services for patients" },
                            { icon: "🤖", title: "AI Diagnostics", desc: "AI-powered diagnostic tools for accurate diagnosis" },
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-[#0AA6C6] rounded-xl flex items-center justify-center text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#0AA6C6] mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

