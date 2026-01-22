export default function PhotoGallery() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Photo Gallery</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-gray-600 mb-6">
                        Explore our photo gallery showcasing the hospital facilities, events, and activities.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-gray-500">Image {item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

