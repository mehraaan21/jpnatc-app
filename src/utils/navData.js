export const navLinks = [
  { name: "Staff", to: "/staff" },
  { name: "Faculty", to: "/faculty" },
  { name: "Notices", to: "/notices" },
];

export const dropdowns = {
  about: {
    label: "About Us",
    items: [
      { name: "History", to: "/about/history" },
      { name: "Mission", to: "/about/mission" },
      { name: "Facilities", to: "/about/facilities" },
    ],
  },
  education: {
    label: "Education",
    items: [
      { name: "Undergraduate Programs", to: "#" },
      { name: "Postgraduate Courses", to: "#" },
      { name: "Research Programs", to: "#" },
      { name: "Continuing Education", to: "#" },
    ],
  },
  contact: {
    label: "Contact",
    items: [
      { name: "Contact Us", to: "contact" },
      { name: "Location", to: "#" },
    ],
  },
};
