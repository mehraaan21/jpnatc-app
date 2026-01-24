export default function Research() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Research <span className="text-[#0AA6C6] font-bold">Programs</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed text-center max-w-2xl mx-auto">
                        Our institution is committed to advancing medical knowledge through cutting-edge 
                        research programs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            { icon: "🔬", title: "Clinical Research", desc: "Opportunities to participate in clinical trials and patient-centered research studies." },
                            { icon: "🧬", title: "Basic Sciences", desc: "Research in molecular biology, genetics, and pathophysiology of diseases." },
                            { icon: "🌍", title: "Public Health", desc: "Epidemiological studies and community health intervention programs." },
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="w-14 h-14 bg-[#0AA6C6] rounded-xl flex items-center justify-center text-2xl mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#0AA6C6] mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gradient-to-br from-[#0AA6C6] to-cyan-600 text-white p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                🎓
                            </div>
                            <h3 className="text-2xl font-semibold">PhD Programs</h3>
                        </div>
                        <p className="text-cyan-100 text-lg leading-relaxed">
                            We offer PhD programs in various disciplines under the guidance of renowned 
                            faculty members. Candidates with a Master's degree in relevant fields are 
                            eligible to apply.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

