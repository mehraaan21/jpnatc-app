export default function TopBar() {
  return (
    <div className="bg-linear-to-r from-[#0B5DBB] to-[#0AA6C6] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span>☎ 011-26731237</span>
          <span>✉ jpnatcaiims2011@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <a href="#" className="hover:underline">Old website version</a>
          <span>|</span>
          <a href="#">English</a>
          <a href="#">Hindi</a>
        </div>
      </div>
    </div>
  );
}
