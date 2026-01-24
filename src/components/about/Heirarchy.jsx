export default function Heirarchy() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Our <span className="text-[#0AA6C6] font-bold">Heirarchy</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="space-y-6">
                        {[
                            { role: "Director", color: "bg-[#0AA6C6]", desc: "Head of the institution" },
                            { role: "Medical Supdt.", color: "bg-[#0AA6C6]", desc: "In-charge of medical services" },
                            { role: "HODs", color: "bg-[#0AA6C6]", desc: "Lead various medical departments" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-6 p-6 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl hover:shadow-lg transition-shadow">
                                <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                    {item.role}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{item.role}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

