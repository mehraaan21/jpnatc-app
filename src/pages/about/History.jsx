export default function History() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d141c] dark:text-slate-100 min-h-screen">

      <main className="pb-24">

        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full h-[70vh] overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHmHHsU7_h5rHFTzGw6A-QZu3ggculG5ZbR5eLsh7J7otAOyw-XZISeEQMJuuMNWYZFq1ikYcVESTXE8SwEn6HCqZPAvfSrL3Qqi3FNC2PvpPGu0kaIZ1M_-tc3Mc4AZUw2fzKkxYFSz2VWV8S7VUIP0_5fspc_LQ2z_UFXMzRKJEKTj-e_QNbfPUgNNAbErfe349-w94Q828fwtwaSvXUc65ppRRNUykvvaMTOrdzeEZFMw48ArVvoQGo9ZXvTpv2PG38QGyIo7I')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent dark:from-background-dark" />

          {/* Title */}
          <div className="absolute bottom-12 left-0 w-full">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="font-serif text-white text-[64px] sm:text-[72px] font-semibold italic tracking-tight drop-shadow-2xl">
                History
              </h1>
            </div>
          </div>
        </section>

        {/* ================= INTRO CONTENT ================= */}
        <section className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 mt-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary text-blue-500">
              Established 1984
            </h2>

            <div className="space-y-4 max-w-3xl">
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-600 font-medium">
                The Jaya Prakash Narayan Apex Trauma Center (JPNATC) was established
                to provide world-class trauma and emergency care through advanced
                infrastructure, skilled professionals, and compassionate service.
              </p>

              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-600">
                As a premier institute under AIIMS, JPNATC has evolved into a
                multidisciplinary center of excellence, setting benchmarks in
                trauma care, surgical innovation, and emergency response.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MILESTONES ================= */}
        <section className="mt-16">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-6">
            <h3 className="text-xl font-bold tracking-tight text-black">
              Key Milestones
            </h3>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Swipe
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto px-6 snap-x no-scrollbar max-w-7xl mx-auto">
            {[
              { year: "1984", label: "Foundation Stone Laid", icon: "foundation" },
              { year: "2006", label: "Full Operations Begin", icon: "medical_services" },
              { year: "2015", label: "Robotic Surgery Wing", icon: "biotech" },
              { year: "2020", label: "COVID Response Hub", icon: "add_moderator" },
            ].map((item) => (
              <div
                key={item.year}
                className="min-w-[220px] bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg snap-start"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4 font-light">
                  {item.icon}
                </span>
                <div className="text-2xl font-bold mb-1">
                  {item.year}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= LEGACY QUOTE ================= */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto px-6 pb-12">
            <h3 className="text-xl font-bold tracking-tight mb-4 text-black">
              A Visionary Legacy
            </h3>

            <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl max-w-3xl">
              <p className="italic text-slate-800 dark:text-slate-600 font-light leading-relaxed">
                “Trauma care is not just about surgery; it is about building a
                system that supports patients from the moment of injury to full
                rehabilitation.”
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
