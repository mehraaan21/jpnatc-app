export default function Undergraduate() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Undergraduate Programs</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-600 mb-6">
                        Our undergraduate programs provide comprehensive education in various medical 
                        and allied health sciences disciplines.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Available Programs</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Bachelor of Medicine and Surgery (MBBS)</li>
                                <li>• Bachelor of Nursing (B.Sc Nursing)</li>
                                <li>• Bachelor of Physiotherapy (BPT)</li>
                                <li>• Bachelor of Pharmacy (B.Pharm)</li>
                                <li>• Bachelor of Medical Laboratory Technology</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Eligibility Criteria</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• 10+2 with Physics, Chemistry, Biology</li>
                                <li>• Minimum 50% aggregate marks</li>
                                <li>• Must qualify entrance examination</li>
                                <li>• Age limit: 17-25 years</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

