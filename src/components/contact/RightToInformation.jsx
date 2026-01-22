export default function RightToInformation() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Right To Information</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">About RTI</h2>
                        <p className="text-gray-600">
                            The Right to Information Act, 2005 empowers citizens to seek information 
                            from public authorities. JPNATC is committed to transparency and accountability.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-[#0B5DBB] mb-3">Appellate Authority</h3>
                            <p className="text-gray-700">
                                Dr. Name<br />
                                Designation<br />
                                Phone: 011-XXXXXXX
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-800 mb-3">Public Information Officer</h3>
                            <p className="text-gray-700">
                                Mr. Name<br />
                                Designation<br />
                                Phone: 011-XXXXXXX
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold mb-4">Required Information</h2>
                        <p className="text-gray-600 mb-4">
                            For seeking information under RTI Act, please submit your application 
                            along with the required documents to the Public Information Officer.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Name and address of the applicant</li>
                            <li>Particulars of information sought</li>
                            <li>Whether the information is required by post or email</li>
                            <li>Any other relevant details</li>
                        </ul>
                        <div className="mt-6">
                            <p className="text-gray-600">
                                <strong>RTI Application Fee:</strong> Rs. 10/- (by demand draft or money order)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

