export default function Heirarchy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Heirarchy</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                            <div className="w-16 h-16 bg-[#0B5DBB] rounded-full flex items-center justify-center text-white font-bold">
                                Director
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Director</h3>
                                <p className="text-gray-600">Head of the institution</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                            <div className="w-16 h-16 bg-[#0AA6C6] rounded-full flex items-center justify-center text-white font-bold">
                                Medical Supdt.
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Medical Superintendent</h3>
                                <p className="text-gray-600">In-charge of medical services</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                            <div className="w-16 h-16 bg-[#0B5DBB] rounded-full flex items-center justify-center text-white font-bold">
                                HODs
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Heads of Departments</h3>
                                <p className="text-gray-600">Lead various medical departments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

