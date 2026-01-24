export default function PatientDashboard() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Patient <span className="text-[#0AA6C6] font-bold">Dashboard</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                            <span className="text-5xl">🏥</span>
                        </div>
                        <p className="text-gray-600 text-xl text-center max-w-md">
                            Patient dashboard and login information will be displayed here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

