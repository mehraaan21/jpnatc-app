export default function ContactUs() {
  return (
    <section className="w-full bg-gray-100">

      {/* Main Card */}
      <div className="pt-24  pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                24/7 Call Center
              </h2>

              <p className="text-gray-600 mb-8 max-w-lg">
                Our call center is available round the clock, 7 days a week,
                to assist you with medical inquiries, appointments, and
                general assistance.
              </p>

              {/* Phone */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 text-xl">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold mb-1">
                    PHONE NUMBERS
                  </p>
                  <p className="font-medium">
                    011-26731237, 26731283
                  </p>
                  <p className="font-medium">
                    011-26731000-26731003
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold mb-1">
                    EMAIL SUPPORT
                  </p>
                  <p className="font-medium">
                    jpnatcaiims2011@gmail.com
                  </p>
                </div>
              </div>

              {/* Fax */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 text-xl">
                  📠
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold mb-1">
                    FAX
                  </p>
                  <p className="font-medium">
                    +91-11-26106826
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Send an Inquiry
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    SUBJECT
                  </label>
                  <select className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Appointment Inquiry</option>
                    <option>Medical Assistance</option>
                    <option>General Query</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    placeholder="How can we help you today?"
                    className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-lg hover:bg-cyan-700 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}