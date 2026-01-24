export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0B5DBB] mb-4">Contact Us</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#0B5DBB] text-xl">☎</span>
                                    <p className="text-gray-700">011-26731237</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#0B5DBB] text-xl">✉</span>
                                    <p className="text-gray-700">jpnatcaiims2011@gmail.com</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#0B5DBB] text-xl">📍</span>
                                    <p className="text-gray-700">
                                        Jai Prakash Narayan Apex Trauma Center<br />
                                        AIIMS Campus, Ansari Nagar<br />
                                        New Delhi - 110029
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                            <form className="space-y-4">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B5DBB]"
                                />
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B5DBB]"
                                />
                                <textarea 
                                    placeholder="Your Message" 
                                    rows="4"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B5DBB]"
                                ></textarea>
                                <button className="bg-[#0B5DBB] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}