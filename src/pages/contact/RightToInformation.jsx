export default function RightToInformation() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Right To <span className="text-[#0AA6C6] font-bold">Information</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-[#0AA6C6] rounded-xl flex items-center justify-center text-white text-2xl">
                                📋
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800">About RTI</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            The Right to Information Act, 2005 empowers citizens to seek information 
                            from public authorities. JPNATC is committed to transparency and accountability.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-linear-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    👤
                                </div>
                                <h3 className="text-xl font-semibold text-[#0AA6C6]">Appellate Authority</h3>
                            </div>
                            <p className="text-gray-700">
                                Dr. Name<br />
                                Designation<br />
                                Phone: 011-XXXXXXX
                            </p>
                        </div>
                        <div className="bg-linear-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                    👤
                                </div>
                                <h3 className="text-xl font-semibold text-[#0AA6C6]">Public Information Officer</h3>
                            </div>
                            <p className="text-gray-700">
                                Mr. Name<br />
                                Designation<br />
                                Phone: 011-XXXXXXX
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#0AA6C6] rounded-lg flex items-center justify-center text-white">
                                ✓
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800">Required Information</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            For seeking information under RTI Act, please submit your application 
                            along with the required documents to the Public Information Officer.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg bg-cyan-50 p-6 rounded-xl">
                            <li>Name and address of the applicant</li>
                            <li>Particulars of information sought</li>
                            <li>Whether the information is required by post or email</li>
                            <li>Any other relevant details</li>
                        </ul>
                        <div className="bg-linear-to-br from-[#0AA6C6] to-cyan-600 text-white p-6 rounded-xl">
                            <p className="font-semibold text-lg">
                                <span className="mr-2">💰</span>RTI Application Fee: Rs. 10/- (by demand draft or money order)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}