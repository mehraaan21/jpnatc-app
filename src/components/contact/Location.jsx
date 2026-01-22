export default function Location() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Location</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Address</h2>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <p className="text-gray-700 text-lg">
                                    <strong>Jai Prakash Narayan Apex Trauma Center (JPNATC)</strong>
                                </p>
                                <p className="text-gray-600 mt-2">
                                    AIIMS Campus, Ansari Nagar<br />
                                    New Delhi - 110029<br />
                                    India
                                </p>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold mb-3">How to Reach</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#0B5DBB]">✈️</span>
                                        <p className="text-gray-700">Indira Gandhi International Airport - 20 km</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#0B5DBB]">🚂</span>
                                        <p className="text-gray-700">New Delhi Railway Station - 12 km</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#0B5DBBB]">🚌</span>
                                        <p className="text-gray-700">Metro Station (AIIMS) - 1 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                            <p className="text-gray-500">Map Integration Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

