import { ShieldCheck, UserCheck, Headphones } from "lucide-react";

export default function Feedback() {
  return (
    <section className="bg-[#eef7fa] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Your <span className="text-sky-500 font-bold">Feedback</span> Matters
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
            We are committed to continuous improvement. Share your
            thoughts or patient experience with us to help us serve you
            better.
          </p>

          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center gap-4">
              <ShieldCheck className="text-sky-500 w-6 h-6" />
              <span>Completely Anonymous</span>
            </li>

            <li className="flex items-center gap-4">
              <UserCheck className="text-sky-500 w-6 h-6" />
              <span>Direct Review by Hospital Admin</span>
            </li>

            <li className="flex items-center gap-4">
              <Headphones className="text-sky-500 w-6 h-6" />
              <span>Follow-up available if requested</span>
            </li>
          </ul>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Submit Feedback
          </h3>

          <form className="space-y-6 text-gray-800">
            {/* NAME & EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-sky-400"
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-xl bg-gray-100 px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-sky-400"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0b57d0] text-white font-semibold text-lg py-4 rounded-2xl hover:bg-[#094ab5] transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
