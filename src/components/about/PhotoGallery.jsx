export default function PhotoGallery() {
    return (
        <div className="min-h-screen bg-[#eef7fa] py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Photo <span className="text-[#0AA6C6] font-bold">Gallery</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border-b-4 border-[#0AA6C6]">
                    <p className="text-gray-600 mb-8 text-lg text-center max-w-2xl mx-auto">
                        Explore our photo gallery showcasing the hospital facilities, events, and activities.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="aspect-square bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow group-hover:scale-110 transition-transform">
                                        <span className="text-3xl">📷</span>
                                    </div>
                                    <span className="text-gray-500">Image {item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

