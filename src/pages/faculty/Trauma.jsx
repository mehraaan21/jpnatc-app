import Sidebar from "../../components/faculty/sidebar";

export default function Trauma() {
  const departments = [
    {
      title: "Department of Trauma Surgery",
      description:
        "Our trauma surgeons provide rapid, life-saving interventions with the highest standards of care.",
      faculty: [
        {
          name: "Dr. E. Kumar",
          role: "Chief Trauma Surgeon",
          img: "https://via.placeholder.com/150",
        },
        {
          name: "Dr. S. Mehta",
          role: "Senior Trauma Consultant",
          img: "https://via.placeholder.com/150",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      <Sidebar />
      <main className="flex-1 ml-20 pt-24 px-6 md:px-10">
        <h1 className="text-2xl font-semibold mb-4">Faculty</h1>
        {departments.map((dept, i) => (
          <section key={i} className="mt-2">
            <p className="text-sm text-gray-500 max-w-3xl">{dept.description}</p>
            <h2 className="mt-10 text-sm font-semibold">{dept.title}</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {dept.faculty.map((f, j) => (
                <div key={j} className="text-center">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-40 h-40 mx-auto object-cover rounded-md"
                  />
                  <h3 className="mt-4 font-semibold">{f.name}</h3>
                  <p className="text-sm text-gray-500">{f.role}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
