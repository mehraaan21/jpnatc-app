export default function Location() {
    return (
        <div className="bg-[#eef7fa] py-20">
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 mb-14">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Our <span className="text-[#0AA6C6] font-bold">Location</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Find your way to JPNATC easily with our location details and 
                        transportation options from various points in Delhi.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Address</h2>
                            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#0AA6C6] rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-semibold text-lg mb-2">
                                            Jai Praksh Narayan Apex Trauma Center (JPNATC)
                                        </p>
                                        <p className="text-gray-600">
                                            AIIMS Campus, Ansari Nagar<br />
                                            New Delhi - 110029<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Reach</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-cyan-50 p-4 rounded-xl">
                                        <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                            ✈️
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">By Air</p>
                                            <p className="text-gray-800 font-medium">Indira Gandhi Airport - 20 km</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-cyan-50 p-4 rounded-xl">
                                        <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                            🚂
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">By Train</p>
                                            <p className="text-gray-800 font-medium">New Delhi Railway Station - 12 km</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-cyan-50 p-4 rounded-xl">
                                        <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                            🚇
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">By Metro</p>
                                            <p className="text-gray-800 font-medium">AIIMS Metro Station - 1 km</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-4xl">🗺️</span>
                                </div>
                                <p className="text-gray-600 font-medium">Map Integration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

