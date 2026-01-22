export default function Facilities() {
    const facilities = [
        {
            title: "Emergency Department",
            description: "24/7 emergency services with advanced life support systems and rapid response teams",
            icon: "🚑"
        },
        {
            title: "ICU & Critical Care",
            description: "State-of-the-art Intensive Care Units equipped with modern monitoring systems",
            icon: "🫀"
        },
        {
            title: "Operation Theaters",
            description: "Modular operation theaters with advanced surgical equipment",
            icon: "🏥"
        },
        {
            title: "Diagnostic Services",
            description: "Advanced imaging including MRI, CT scan, X-ray, and laboratory services",
            icon: "🔬"
        },
        {
            title: "Pharmacy",
            description: "24/7 in-house pharmacy with all essential medications",
            icon: "💊"
        },
        {
            title: "Rehabilitation Center",
            description: "Comprehensive rehabilitation services including physiotherapy and occupational therapy",
            icon: "💪"
        },
        {
            title: "Blood Bank",
            description: "Round-the-clock blood bank services with all blood groups available",
            icon: "🩸"
        },
        {
            title: "Ambulance Services",
            description: "Fully equipped ambulances with trained paramedics for emergency transport",
            icon: "🚐"
        },
        {
            title: "Patient Rooms",
            description: "Comfortable rooms ranging from general wards to deluxe suites",
            icon: "🛏"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-8">Our Facilities</h1>
                
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                        Jaya Prakash Narayan Apex Trauma Center is equipped with world-class facilities to provide 
                        comprehensive healthcare services. Our infrastructure is designed to meet international standards 
                        and ensure the best possible care for our patients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-4xl mb-4">{facility.icon}</div>
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-2">{facility.title}</h3>
                            <p className="text-gray-600">{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

