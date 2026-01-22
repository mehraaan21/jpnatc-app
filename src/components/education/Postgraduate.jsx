export default function Postgraduate() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Postgraduate Courses</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-600 mb-6">
                        Our postgraduate courses offer advanced specialization in various medical 
                        and surgical fields.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">MD/MS Programs</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• MD in General Medicine</li>
                                <li>• MD in Pediatrics</li>
                                <li>• MD in Dermatology</li>
                                <li>• MS in General Surgery</li>
                                <li>• MS in Orthopedics</li>
                                <li>• MD in Anesthesiology</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Super Speciality Courses</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• DM in Cardiology</li>
                                <li>• DM in Neurology</li>
                                <li>• MCh in Cardiothoracic Surgery</li>
                                <li>• MCh in Neurosurgery</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 bg-green-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-green-800 mb-3">Admission Process</h3>
                        <p className="text-gray-700">
                            Admissions are conducted through NEET-PG entrance examination. Candidates 
                            must have completed their MBBS with mandatory internship.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

