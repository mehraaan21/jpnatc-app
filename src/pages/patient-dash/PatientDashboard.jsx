/**
 * Patient Dashboard – Coming Soon Page
 * Clean, creative & trust-focused UI
 * Matches hospital & department theme
 */

import { Activity, ShieldCheck, Clock, HeartPulse } from "lucide-react";

const PatientDashboard = () => {
  return (
    <section className="min-h-screen bg-[#eef7fa] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">

        {/* =========================
            Main Card
        ========================== */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#60b4c5] border-b-4 border-b-[#0AA6C6] overflow-hidden">


          {/* Content */}
          <div className="p-10 text-center space-y-10">

            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#0AA6C6]/10 flex items-center justify-center">
                <HeartPulse className="w-12 h-12 text-[#0AA6C6]" />
              </div>
            </div>

            {/* Main Message */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                This Feature is Coming Soon
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We are working on a secure and patient-friendly dashboard that
                will allow you to access your medical information, appointments,
                reports, and hospital services — all in one place.
              </p>
            </div>

            {/* Feature Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Feature
                icon={<Activity />}
                title="Medical Records"
                desc="View and manage your reports, prescriptions and treatment history."
              />
              <Feature
                icon={<Clock />}
                title="Appointments"
                desc="Track OPD visits, follow-ups and upcoming consultations."
              />
              <Feature
                icon={<ShieldCheck />}
                title="Secure Access"
                desc="Your data will be protected with industry-grade security."
              />
            </div>

            {/* Footer Message */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-500">
                Thank you for your patience. We’ll notify you once the dashboard
                is live.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Reusable Feature Card
 */
const Feature = ({ icon, title, desc }) => {
  return (
    <div className="bg-[#eef7fa] rounded-2xl p-6 border border-[#60b4c5]/40 hover:shadow-md transition">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0AA6C6] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
};

export default PatientDashboard;
