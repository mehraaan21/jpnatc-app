import Sidebar from "../../components/faculty/sidebar";

export default function Ortho() {
  const departments = [
    {
      title: "Department of Orthopaedics",
      description:
        "Our world-class team of specialists committed to providing the highest quality trauma care and surgical excellence.",
      faculty: [
        {
          name: "Dr. Kamran Farooque",
          role: "Professor & Head of Centre",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCHYY1nLdfhk8ITyn77dqN9xW-NxwGRPpqLYvYQRpmL7BSQHR2tb7e18sf2JGaXgISnARL30unspTuKBvSb2J4Mt2kd_nSpaGgTufc84LxB5hxGA54eZyUoLKfx8TJCubQbmAvzDWnBpn5hRzLQNZ4ysDwuVyzi0dOQjcuju5rnheBpkA4tHNBZVTVUqduJexkNIMFRYfsPr9SE3BnBdN523o7GUDzeA_cpqn0WQxDXjbACMmuoV3hGpyQrtzYnxEL_-qXGsKfJeo",
        },
        {
          name: "Dr. Vivek Trikha",
          role: "Professor",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNv_ZN8FfKbKXdQeKAellar7jrdJr1KnHDzosxvrJKaaM313Kk051_F7P-MzYfFAkh7ZWONE7ayB6ILyLz0p7YJMEneEogjILXcN_ywbZVF4bGFndDDqBMCSCFu4AN_YqL0BdVhmfAz2wLRnfiroAtqhSVI20DHJFTtqd1FB_BKB85-FWDaOliMwpF1lmnYEa-yrsaDWOu662WCtfecPq-vYeVSjdqiEwg2gGQ2V04kJDxQpr9qwBhS8SczWclvnVntGM2wfip7M4",
        },
        {
          name: "Dr. Vijay Sharma",
          role: "Professor",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsnylW9GBGSbhEKk33ATIyviEP7H83x2a2be0htHzX6KJnwnna42Fx3lEGudH_9upVLGzoNR-eNhhgqR73dNRZtOcZ3uLPet4z65_NYOVhCBuYDot4T71VH8IzC_3H7LfEAxUxY8AA5V_srqB81zvurZ4dcy06dW6W2SfNMUIPgm9P1RAjf6awMTdS2aT-2M2GQQSB8AOHQc-7o8flIqcTAF957QQELJyuCAdNt9ksniGMfjZla5ISjyhlpcEG-SmHYXVHcc9K7z8",
        },
        {
          name: "Dr. Buddhadev",
          role: "Professor",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIzirB7X2PG1ekOh2-MMbtBNcw8Gs3qCrze1IvlZM0-d1WjRWtaa8SvPhAZLxevdsilNKl-Iy5SL1r3wAz0L9humyPY_P-muVR4PO7bpuYMC-D3qhayLncPd5lsh_4oPZl6MpucHluugOTsD70Mf0-FSKsVwknZCy0kfhlsObCW2YxYxmbscYhuDTWYGw6Uv9IAD8CApRHZuOcC-89VzGHJQkbicSeEm-yvsPl_OnFaHwpNPc_u6xPU_v_OAPnvcduIZnnIAqIks",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-20 pt-24 px-10">
        {/* Page Heading */}
        <h1 className="text-2xl font-semibold">Faculty</h1>

        {departments.map((dept, i) => (
          <section key={i} className="mt-2">
            <p className="text-sm text-gray-500 max-w-3xl">
              {dept.description}
            </p>

            {/* Department title */}
            <h2 className="mt-10 text-sm font-semibold">
              {dept.title}
            </h2>

            {/* Faculty grid – SS STYLE */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
              {dept.faculty.map((f, j) => (
                <div key={j} className="text-center">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full aspect-square object-cover rounded-md"
                  />

                  <h3 className="mt-4 font-semibold">
                    {f.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {f.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
