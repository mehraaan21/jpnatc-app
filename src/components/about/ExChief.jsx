export default function ExChief() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Ex <span className="text-[#0AA6C6] font-bold">Chiefs</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <p className="text-gray-600 mb-8 text-lg text-center max-w-2xl mx-auto">
                        We honor our former chiefs who have contributed significantly to the development 
                        of this institution.
                    </p>
                    <div className="space-y-6">
                        {[
                            { name: "Dr. Name 1", period: "Director (2015-2020)", desc: "Led the institution during a period of significant growth and development." },
                            { name: "Dr. Name 2", period: "Director (2010-2015)", desc: "Established key departments and infrastructure." },
                            { name: "Dr. Name 3", period: "Director (2005-2010)", desc: "Foundation director who shaped the vision of the institution." },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-6 p-6 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl hover:shadow-lg transition-shadow border-l-4 border-[#0AA6C6]">
                                <div className="w-20 h-20 bg-[#0AA6C6] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    👨‍⚕️
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-[#0AA6C6] font-medium">{item.period}</p>
                                    <p className="text-gray-500 mt-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

