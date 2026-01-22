export default function Faculty() {
  const faculty = [
    {
      name: "Prof. Kamran Farooque",
      role: "Chief, JPNATC & Head, Orthopaedic",
      img: "https://i.imgur.com/FdXK8YB.png", // replace with your image
    },
    {
      name: "Prof. Vijay Sharma",
      role: "Professor, Orthopaedic",
      img: "https://i.imgur.com/JLz0vH3.png",
    },
    {
      name: "Prof. Vivek Trikha",
      role: "Professor, Orthopaedic",
      img: "https://i.imgur.com/4QFZQ4X.png",
    },
    {
      name: "Prof. Buddhadev Chowdhury",
      role: "Professor, Trauma Surgery",
      img: "https://i.imgur.com/sTbJZJw.png",
    },
  ];

  return (
    <section className="bg-white py-20">
      {/* ===== Heading ===== */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-800">
          Let&apos;s Meet our{" "}
          <span className="text-[#0B5DBB] font-bold">Faculties</span>
        </h2>
      </div>

      {/* ===== Faculty Grid ===== */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {faculty.map((item, index) => (
          <div key={index} className="text-center">
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-sm mb-6">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[360px] object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500 mt-1">
              {item.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
