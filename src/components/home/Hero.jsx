import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  /* ================= HERO SLIDES ================= */
  const heroSlides = [
    "/images/trauma-building.jpg",
    "/images/trauma-care.jpg",
    "/images/rehab.jpg",
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setHeroIndex((p) => (p + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(i);
  }, []);

  /* ================= NOTICES ================= */
  const notices = [
    {
      title: "Precautions against Fire incidents at AIIMS – Advisory",
      date: "Oct 12, 2023",
    },
    {
      title: "Update on New Patient Registration Portal Guidelines",
      date: "Oct 10, 2023",
    },
    {
      title: "New Trauma ICU Protocol Released",
      date: "Sep 29, 2023",
    },
  ];

  const [noticeIndex, setNoticeIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setNoticeIndex((p) => (p + 1) % notices.length),
      3500
    );
    return () => clearInterval(i);
  }, []);

  /* ================= HEAD MESSAGES ================= */
  const messages = [
    {
      name: "Prof. Kamran Farooque",
      role: "Head of JPNATC",
      image: "/images/profile-placeholder.png",
      text:
        "An India where anybody who suffers from trauma receives timely, high-quality multidisciplinary care.",
    },
    {
      name: "Dr. XYZ",
      role: "Director",
      image: "/images/profile-placeholder.png",
      text:
        "Committed to advancing trauma education, research, and patient-centered excellence.",
    },
  ];

  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setMsgIndex((p) => (p + 1) % messages.length),
      6000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section
      role="banner"
      aria-label="Trauma Care Hero Section"
      className="
        relative overflow-hidden bg-slate-900
        min-h-[75vh] md:min-h-[90vh]
        pt-32 pb-56
      "
    >
      {/* ================= HERO BACKGROUND CAROUSEL ================= */}
      {heroSlides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Trauma care facility"
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000
            ${i === heroIndex ? "opacity-100" : "opacity-0"}
          `}
          fetchpriority={i === 0 ? "high" : "auto"}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <span className="inline-block bg-cyan-500 text-xs font-semibold px-4 py-1 rounded-full mb-4">
          APEX CENTER OF EXCELLENCE
        </span>

        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-2xl">
          Excellence in <br />
          <span className="text-cyan-400 italic">Trauma Care</span> & Recovery
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/90 font-sans">
          Dedicated to providing high-quality, professional multidisciplinary
          care and rehabilitation to enable optimal recovery of independent
          function.
        </p>

        <Link
          to="/appointments"
          className="
            inline-flex items-center mt-8
            bg-white text-blue-600 font-semibold
            px-7 py-3 rounded-full
            hover:bg-gray-100 transition
            focus-visible:outline
          "
        >
          Book Appointment <span aria-hidden className="ml-2">→</span>
        </Link>
      </div>

      {/* ================= BOTTOM CARDS ================= */}
      <div
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
          w-full max-w-7xl px-6
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ===== NOTICES CAROUSEL ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-black">
            <div className="flex justify-between mb-4">
              <h2 className="text-blue-600 font-semibold">
                Notices & Circulars
              </h2>
              <Link to="/notices" className="text-sm text-blue-500">
                View All
              </Link>
            </div>

            <div className="relative h-20 overflow-hidden">
              {notices.map((n, i) => (
                <div
                  key={n.title}
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${i === noticeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"}
                  `}
                >
                  <p className="font-medium">{n.title}</p>
                  <span className="text-gray-400 text-sm">{n.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ===== APPOINTMENT (STATIC) ===== */}
          <div className="bg-cyan-500 text-white rounded-2xl shadow-xl p-8 text-center">
            <span aria-hidden className="text-3xl mb-3 block">📅</span>

            <h2 className="text-2xl font-semibold">Book Appointment</h2>

            <p className="text-sm mt-1">
              अपॉइंटमेंट के लिए कॉल करें
            </p>

            <a
              href="tel:+911126731237"
              className="block text-3xl font-bold my-5"
            >
              +91 11 2673 1237
            </a>

            <Link
              to="/appointments"
              className="inline-block bg-white text-cyan-600 font-semibold
              px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Online Registration
            </Link>
          </div>

          {/* ===== HEAD MESSAGE CAROUSEL ===== */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-black">
            {messages.map((m, i) => (
              <div
                key={m.name}
                className={`
                  flex gap-4 transition-opacity duration-500
                  ${i === msgIndex ? "opacity-100" : "opacity-0 hidden"}
                `}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <span className="text-xs text-cyan-500 font-semibold">
                    {m.role}
                  </span>
                  <h3 className="font-semibold text-lg">{m.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
