import Sidebar from "../../components/faculty/sidebar";
import RightSidebar from "../../components/faculty/rightSidebar";

export default function FacultyDirectory() {
  const departments = [
    {
      title: "Orthopaedics",
      sections: [
        {
          name: "Surgical Orthopaedics",
          faculty: [
            { name: "Dr. Kamran Farooque", role: "Professor & Head", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCHYY1nLdfhk8ITyn77dqN9xW-NxwGRPpqLYvYQRpmL7BSQHR2tb7e18sf2JGaXgISnARL30unspTuKBvSb2J4Mt2kd_nSpaGgTufc84LxB5hxGA54eZyUoLKfx8TJCubQbmAvzDWnBpn5hRzLQNZ4ysDwuVyzi0dOQjcuju5rnheBpkA4tHNBZVTVUqduJexkNIMFRYfsPr9SE3BnBdN523o7GUDzeA_cpqn0WQxDXjbACMmuoV3hGpyQrtzYnxEL_-qXGsKfJeo" },
            { name: "Dr. Vivek Trikha", role: "Professor", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNv_ZN8FfKbKXdQeKAellar7jrdJr1KnHDzosxvrJKaaM313Kk051_F7P-MzYfFAkh7ZWONE7ayB6ILyLz0p7YJMEneEogjILXcN_ywbZVF4bGFndDDqBMCSCFu4AN_YqL0BdVhmfAz2wLRnfiroAtqhSVI20DHJFTtqd1FB_BKB85-FWDaOliMwpF1lmnYEa-yrsaDWOu662WCtfecPq-vYeVSjdqiEwg2gGQ2V04kJDxQpr9qwBhS8SczWclvnVntGM2wfip7M4" },
            { name: "Dr. Vijay Sharma", role: "Professor", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsnylW9GBGSbhEKk33ATIyviEP7H83x2a2be0htHzX6KJnwnna42Fx3lEGudH_9upVLGzoNR-eNhhgqR73dNRZtOcZ3uLPet4z65_NYOVhCBuYDot4T71VH8IzC_3H7LfEAxUxY8AA5V_srqB81zvurZ4dcy06dW6W2SfNMUIPgm9P1RAjf6awMTdS2aT-2M2GQQSB8AOHQc-7o8flIqcTAF957QQELJyuCAdNt9ksniGMfjZla5ISjyhlpcEG-SmHYXVHcc9K7z8" },
            { name: "Dr. B. Chowdhury", role: "Professor", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIzirB7X2PG1ekOh2-MMbtBNcw8Gs3qCrze1IvlZM0-d1WjRWtaa8SvPhAZLxevdsilNKl-Iy5SL1r3wAz0L9humyPY_P-muVR4PO7bpuYMC-D3qhayLncPd5lsh_4oPZl6MpucHluugOTsD70Mf0-FSKsVwknZCy0kfhlsObCW2YxYxmbscYhuDTWYGw6Uv9IAD8CApRHZuOcC-89VzGHJQkbicSeEm-yvsPl_OnFaHwpNPc_u6xPU_v_OAPnvcduIZnnIAqIks" },
          ]
        }
      ]
    },
    {
      title: "Trauma",
      sections: [
        {
          name: "Surgical Trauma",
          faculty: [
            { name: "Dr. E. Kumar", role: "Surgeon", img: "https://via.placeholder.com/200" },
          ]
        }
      ]
    },
    {
      title: "Lab",
      sections: [
        {
          name: "Medical Lab",
          faculty: [
            { name: "Dr. C. Singh", role: "Lab Head", img: "https://via.placeholder.com/200" },
            { name: "Dr. D. Kapoor", role: "Technician", img: "https://via.placeholder.com/200" },
          ]
        }
      ]
    },
    {
      title: "Neuro",
      sections: [
        {
          name: "Neurosurgery",
          faculty: [
            { name: "Dr. F. Joshi", role: "Professor", img: "https://via.placeholder.com/200" },
          ]
        }
      ]
    },
    {
      title: "Radio",
      sections: [
        {
          name: "Radiology",
          faculty: [
            { name: "Dr. A. Sharma", role: "Professor", img: "https://via.placeholder.com/200" },
            { name: "Dr. B. Verma", role: "Associate Professor", img: "https://via.placeholder.com/200" },
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />

      <main className="flex-1 ml-20 xl:mr-80 pt-24 p-6 md:p-10">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Faculty Directory</h1>
          <p className="max-w-2xl text-gray-500">
            Jai Prakash Narayan Apex Trauma Centre (JPNATC). Excellence in trauma care and orthopaedic surgery.
          </p>
        </header>

        {departments.map((dept, i) => (
          <section key={i} className="mb-16">
            {/* Department Box - Dark BG */}
            <h2 className="bg-gray-800 text-white px-6 py-3 mb-4 rounded">{dept.title}</h2>

            {dept.sections.map((sec, j) => (
              <div key={j} className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sec.faculty.map((f,k) => (
                    <div key={k} className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition">
                      <img src={f.img} alt={f.name} className="w-full aspect-square object-cover"/>
                      <div className="p-3 text-center">
                        <h3 className="font-bold">{f.name}</h3>
                        <p className="text-xs text-gray-500 uppercase">{f.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>

      <RightSidebar />
    </div>
  );
}
