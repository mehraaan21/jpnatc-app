export default function Research() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Research Programs</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-600 mb-6">
                        Our institution is committed to advancing medical knowledge through cutting-edge 
                        research programs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-800 mb-3">Clinical Research</h3>
                            <p className="text-gray-700">
                                Opportunities to participate in clinical trials and patient-centered 
                                research studies.
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-800 mb-3">Basic Sciences</h3>
                            <p className="text-gray-700">
                                Research in molecular biology, genetics, and pathophysiology of diseases.
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-800 mb-3">Public Health</h3>
                            <p className="text-gray-700">
                                Epidemiological studies and community health intervention programs.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-yellow-800 mb-3">PhD Programs</h3>
                        <p className="text-gray-700">
                            We offer PhD programs in various disciplines under the guidance of renowned 
                            faculty members. Candidates with a Master's degree in relevant fields are 
                            eligible to apply.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

