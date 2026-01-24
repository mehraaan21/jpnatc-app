export default function History() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Our <span className="text-[#0AA6C6] font-bold">History</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Jai Prakash Narayan Apex Trauma Center (JPNATC) was established with the vision 
                        to provide world-class trauma care services to the patients.
                    </p>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Since its inception, the center has been at the forefront of providing 
                        emergency medical services, trauma surgery, and rehabilitation.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our journey began with a commitment to serve the community and save lives 
                        through excellence in healthcare delivery.
                    </p>
                </div>
            </div>
        </div>
    );
}

