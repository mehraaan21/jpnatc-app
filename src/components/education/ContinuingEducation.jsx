export default function ContinuingEducation() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Continuing Education</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-600 mb-6">
                        We provide ongoing learning opportunities for healthcare professionals to 
                        update their skills and knowledge.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-teal-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-teal-800 mb-3">Short-term Courses</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Basic Life Support (BLS)</li>
                                <li>• Advanced Cardiac Life Support (ACLS)</li>
                                <li>• Infection Control Practices</li>
                                <li>• Emergency Medicine Updates</li>
                                <li>• Clinical Skill Enhancement</li>
                            </ul>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-teal-800 mb-3">Workshops & Seminars</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Quarterly Medical Conferences</li>
                                <li>• Guest Lecture Series</li>
                                <li>• Case Discussion Sessions</li>
                                <li>• Research Methodology Workshops</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 bg-orange-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-orange-800 mb-3">CME Credits</h3>
                        <p className="text-gray-700">
                            All our continuing education programs are accredited with CME credits 
                            recognized by the Medical Council of India. Participants will receive 
                            certificates upon completion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

