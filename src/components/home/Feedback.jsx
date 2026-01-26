import { ShieldCheck, UserCheck, Headphones } from "lucide-react";

import Lottie from "lottie-react";
import Faqsani from "../../assets/Doctor.json";

export default function Feedback() {
  return (
    <section className="bg-[#eef7fa] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          
        <div className="mt-20">                 <Lottie
              animationData={Faqsani}
              loop={true}
              className="h-full w-full"
            /></div>


        </div>

        {/* RIGHT FORM CARD */}
        <div className="border-b-4  border-[#0AA6C6] rounded-3xl shadow-xl p-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-gray-800">
              Submit <span className="text-[#0AA6C6] font-bold">Feedback</span>
            </h3>
            <div className="w-16 h-1 bg-[#0AA6C6] rounded-full mx-auto mt-3"></div>
          </div>

          <form className="space-y-6 text-gray-800">
            {/* NAME & EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#0AA6C6] px-5 py-4 outline-none focus:ring-2 focus:ring-sky-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-[#0AA6C6] px-5 py-4 outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-[#0AA6C6] px-5 py-4 outline-none focus:ring-2 focus:ring-sky-400"
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-xl border border-[#0AA6C6] px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-sky-400"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="block px-24 mt-4 mx-auto py-3 bg-linear-to-r border-b-2 cursor-pointer border-gray-600 from-cyan-200 to-[#0AA6C6] text-gray-800 text-center rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}