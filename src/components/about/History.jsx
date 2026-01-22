export default function History() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-8">Our History</h1>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Jaya Prakash Narayan Apex Trauma Center (JPNATC) was established with a vision to provide 
                        comprehensive trauma care services to the community. Since its inception, we have been 
                        committed to delivering exceptional healthcare with compassion and excellence.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Over the years, JPNATC has grown to become a renowned medical institution, known for its 
                        state-of-the-art facilities, expert medical professionals, and dedication to patient care.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Milestones</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-[#0B5DBB] rounded-full mt-2 flex-shrink-0"></span>
                                <span>Established in 2011 with initial capacity of 200 beds</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-[#0B5DBB] rounded-full mt-2 flex-shrink-0"></span>
                                <span>Expanded to 500 beds in 2015</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-[#0B5DBB] rounded-full mt-2 flex-shrink-0"></span>
                                <span>Introduced advanced trauma care unit in 2018</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-[#0B5DBB] rounded-full mt-2 flex-shrink-0"></span>
                                <span>Recognized as Center of Excellence in 2020</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

