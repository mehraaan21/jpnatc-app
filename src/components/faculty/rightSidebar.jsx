export default function RightSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-80 p-8 border-l border-gray-200 bg-white fixed right-0 top-26 h-[calc(100vh-96px)] overflow-y-auto">
      <h4 className="font-bold uppercase text-gray-400 mb-2 text-sm">Quick Stats</h4>
      <div className="space-y-4 mb-6">
        <div><span className="text-2xl font-bold block">120+</span><span className="text-sm text-gray-500">Expert Faculty</span></div>
        <div><span className="text-2xl font-bold block">24/7</span><span className="text-sm text-gray-500">Emergency Support</span></div>
      </div>
      <h4 className="font-bold uppercase text-gray-400 mb-4 text-sm">Recent Publications</h4>
      <div className="space-y-2">
        <div className="p-3 border-l-2 border-primary bg-gray-50 rounded">
          <p className="text-xs font-semibold text-primary">Advanced Trauma Management in Urban Settings</p>
          <p className="text-[10px] text-gray-400 mt-1">Published in Lancet Oncology • 2023</p>
        </div>
        <div className="p-3 border-l-2 border-primary bg-gray-50 rounded">
          <p className="text-xs font-semibold text-primary">Modern Orthopaedic Protocols for Spine Injury</p>
          <p className="text-[10px] text-gray-400 mt-1">Journal of Medical Science • 2024</p>
        </div>
      </div>
    </aside>
  );
}
