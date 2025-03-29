export default function Navbar() {
  return (
    <nav className="bg-#FFFBF2 p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Brand */}
        <div className="text-2xl font-bold text-gray-800 md:mr-auto">PureBrush</div>

        {/* Right Side - Buttons (Responsive) */}
        <div className="md:flex hidden space-x-4 ml-auto">
          <div className="px-4 py-2 text-gray-900 transition">Categories</div>
          <div className="px-4 py-2 text-gray-900 transition">Benefits</div>
          <div className="px-4 py-2 text-gray-900 transition">Best-sellers</div>
        </div>
        
        {/* Shop Now Button (Always Visible) */}
        <button className="px-4 py-2 bg-green-950 text-white transition ml-4">
          Shop Now
        </button>
      </div>
    </nav>
  );
}
