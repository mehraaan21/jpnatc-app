export default function Facilities() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Facilities</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Emergency</h3>
                            <p className="text-gray-700">24/7 emergency services with advanced life support</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">ICU</h3>
                            <p className="text-gray-700">State-of-the-art Intensive Care Units</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">OT</h3>
                            <p className="text-gray-700">Modern operation theaters with advanced equipment</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Diagnostic</h3>
                            <p className="text-gray-700">Advanced diagnostic and imaging services</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Laboratory</h3>
                            <p className="text-gray-700">Fully equipped pathology and clinical labs</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Pharmacy</h3>
                            <p className="text-gray-700">24/7 pharmacy services for all patient needs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

