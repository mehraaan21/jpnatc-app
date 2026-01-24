export default function Facilities() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Our <span className="text-[#0AA6C6] font-bold">Facilities</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🚨", title: "Emergency", desc: "24/7 emergency services with advanced life support" },
                            { icon: "🏥", title: "ICU", desc: "State-of-the-art Intensive Care Units" },
                            { icon: "🔬", title: "OT", desc: "Modern operation theaters with advanced equipment" },
                            { icon: "🔍", title: "Diagnostic", desc: "Advanced diagnostic and imaging services" },
                            { icon: "🧪", title: "Laboratory", desc: "Fully equipped pathology and clinical labs" },
                            { icon: "💊", title: "Pharmacy", desc: "24/7 pharmacy services for all patient needs" },
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="w-14 h-14 bg-[#0AA6C6] rounded-xl flex items-center justify-center text-2xl mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#0AA6C6] mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

