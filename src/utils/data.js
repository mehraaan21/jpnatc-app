// utils/navLinks.js

/**
 * Dropdown menu items
 * Used for multi-level navigation
 */
export const dropdowns = {
  about: [
    { name: "History", href: "/about/history" },
    { name: "Mission", href: "/about/mission" },
    { name: "Aims And Objective", href: "/about/aims-and-objective" },
    { name: "Facilities", href: "/about/facilities" },
    { name: "Heirarchy", href: "/about/heirarchy" },
    { name: "Photo Gallery", href: "/about/photo-gallery" },
    { name: "IT Innovation", href: "/about/it-innovation" },
    { name: "Ex Chief", href: "/about/ex-chief" },
  ],
  education: [
    { name: "Undergraduate Programs", href: "/education/undergraduate" },
    { name: "Postgraduate Courses", href: "/education/postgraduate" },
    { name: "Research Programs", href: "/education/research" },
    { name: "Continuing Education", href: "/education/continuing-education" },
  ],
  contact: [
    { name: "Contact Us", href: "/contact/contact-us" },
    { name: "Location", href: "/contact/location" },
    { name: "Right To Information", href: "/contact/right-to-information" },
  ],
  staff: [
    { name: "Staff Members", href: "/staff" },
    { name: "Departments", href: "/staff/departments" },
  ],
};

/**
 * Navbar links
 *  include `href` for single links or `dropdown` key for multi-level
 */
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", dropdown: "about" },
  { name: "Staff", dropdown: "staff" },  
  { name: "Faculty", href: "/faculties" }, 
  { name: "Education", dropdown: "education" },
  { name: "Notices", href: "/notices" },
  { name: "Contact", dropdown: "contact" },
];

/**
 * Footer links
 * Use for site footer navigation
 */
export const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about/history" },
  { label: "Ex-Chief", path: "/about/ex-chief" },
  { label: "OPD Schedule", path: "/opd-schedule" },
  { label: "Staff", path: "/staff" }, // Footer shows Staff
  { label: "Faculty", path: "/faculties" }, // Footer shows Faculty
  { label: "Notice & Circular", path: "/notices" },
  { label: "Contact Us", path: "/contact/contact-us" },
];

/**
 * AIIMS Network External Links
 */
export const aiimsNetwork = [
  { name: "AIIMS Bhubaneswar", url: "https://aiimsbhubaneswar.nic.in" },
  { name: "AIIMS Jodhpur", url: "https://www.aiimsjodhpur.edu.in" },
  { name: "AIIMS Patna", url: "https://aiimspatna.edu.in" },
  { name: "AIIMS Raipur", url: "https://aiimsraipur.edu.in" },
  { name: "AIIMS Rishikesh", url: "https://aiimsrishikesh.edu.in" },
  { name: "AIIMS Bhopal", url: "https://aiimsbhopal.edu.in" },
  { name: "AIIMS Kalyani", url: "https://aiimskalyani.edu.in" },
];


// facultyData.js
const facultyData = [
  {
    department: "Orthopaedics",
    doctors: [
      { id: 1, name: "Dr. Kamran Farooque", role: "Professor & Head of Center", img: "" },
      { id: 2, name: "Dr. Vivek Trikha", role: "Professor", img: "" },
      { id: 3, name: "Dr. Vijay Sharma", role: "Professor", img: "" },
      { id: 4, name: "Dr. Buddhadev Chowdhury", role: "Professor", img: "" },
      { id: 5, name: "Dr. Samarth Mittal", role: "Additional Professor", img: "" },
      { id: 6, name: "Dr. Nishank Mehta", role: "Assistant Professor", img: "" },
      { id: 7, name: "Dr. Siva S.G.", role: "Assistant Professor", img: "" },
      { id: 8, name: "Dr. Arvind Kumar", role: "Assistant Professor", img: "" },
      { id: 9, name: "Dr. Asjad Mahmood", role: "Assistant Professor", img: "" },
    ],
  },
  {
    department: "Trauma Surgery & Critical Care",
    doctors: [
      { id: 10, name: "Prof. Sushma Sagar", role: "Professor", img: "" },
      { id: 11, name: "Prof. Amit Gupta", role: "Professor", img: "" },
      { id: 12, name: "Prof. Subodh Kumar", role: "Professor", img: "" },
      { id: 13, name: "Prof. Biplab Mishra", role: "Professor", img: "" },
      { id: 14, name: "Dr. Pratyusha Priyadarshini", role: "Additional Professor", img: "" },
      { id: 15, name: "Dr. Dinesh Kumar Bagaria", role: "Additional Professor", img: "" },
      { id: 16, name: "Dr. Abhinav Kumar", role: "Additional Professor", img: "" },
      { id: 17, name: "Dr. Narendra Choudhary", role: "Additional Professor", img: "" },
      { id: 18, name: "Dr. Junaid Alam", role: "Associate Professor", img: "" },
    ],
  },
  {
    department: "Neurosurgery",
    doctors: [
      { id: 19, name: "Dr. Deepak Agrawal", role: "Professor", img: "" },
      { id: 20, name: "Dr. Deepak Gupta", role: "Professor", img: "" },
      { id: 21, name: "Dr. G. D. Satyarthee", role: "Professor", img: "" },
      { id: 22, name: "Dr. Satish Kumar Verma", role: "Associate Professor", img: "" },
      { id: 23, name: "Dr. Ramesh Doddamani", role: "Associate Professor", img: "" },
    ],
  },
  {
    department: "Anaesthesia & Critical Care",
    doctors: [
      { id: 24, name: "Dr. Babita Gupta", role: "Professor & Addl. M.S.", img: "" },
      { id: 25, name: "Dr. Chhavi Swahney", role: "Professor", img: "" },
      { id: 26, name: "Dr. Richa Aggarwal", role: "Professor", img: "" },
      { id: 27, name: "Dr. Kapil Dev Soni", role: "Professor", img: "" },
      { id: 28, name: "Dr. Yudhyavir Singh", role: "Associate Professor", img: "" },
    ],
  },
];

export default facultyData;

export const staffMembers = [
  { id: 1, name: "Dr. Kamran Farooque", role: "Professor & Head of Center", dept: "Orthopaedics", type: "Faculty", img: "/images/staff/kamran.jpg" },
  { id: 2, name: "Dr. Vivek Trikha", role: "Professor", dept: "Orthopaedics", type: "Faculty", img: "/images/staff/vivek.jpg" },
  { id: 3, name: "Dr. Vijay Sharma", role: "Professor", dept: "Orthopaedics", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 4, name: "Dr. Buddhadev Chowdhury", role: "Professor", dept: "Orthopaedics", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 5, name: "Prof. Sushma Sagar", role: "Professor", dept: "Trauma Surgery", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 6, name: "Prof. Amit Gupta", role: "Professor", dept: "Trauma Surgery", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 7, name: "Prof. Subodh Kumar", role: "Professor", dept: "Trauma Surgery", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 8, name: "Dr. Deepak Agrawal", role: "Professor", dept: "Neurosurgery", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 9, name: "Dr. Babita Gupta", role: "Professor & Addl M.S.", dept: "Anaesthesia", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 10, name: "Dr. Shivanand Gamangatti", role: "Professor", dept: "Radiology", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 11, name: "Dr. Sanjeev Lalwani", role: "Professor", dept: "Emergency Medicine", type: "Faculty", img: "/images/staff/default.jpg" },
  { id: 12, name: "Prof. Rajesh Malhotra", role: "Ex-Chief (2017-2023)", dept: "Orthopaedics", type: "Ex-Chief", img: "/images/staff/default.jpg" },
  { id: 13, name: "Prof. M. C. Misra", role: "Ex-Chief (2006-2017)", dept: "Surgery", type: "Ex-Chief", img: "/images/staff/default.jpg" },
  { id: 14, name: "IT Department", role: "Innovation Hub", dept: "Computer Facility", type: "Staff", img: "/images/staff/default.jpg" },
  { id: 15, name: "Blood Bank", role: "Clinical Support", dept: "Transfusion Medicine", type: "Staff", img: "/images/staff/default.jpg" }
];

