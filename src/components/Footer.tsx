import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F4] py-10 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900">PureBrush</h2>
      </div>

      {/* Full Screen Navigation Links */}
      <div className="hidden md:flex justify-center space-x-6 mt-4 text-gray-700">
        <a href="#" className="hover:text-gray-900">Categories</a>
        <a href="#" className="hover:text-gray-900">Benefits</a>
        <a href="#" className="hover:text-gray-900">Best Sellers</a>
        <a href="#" className="hover:text-gray-900">About Us</a>
      </div>

      {/* 📱 Mobile View: 2x2 Buttons Grid */}
      <div className="grid grid-cols-2 gap-2 md:hidden mt-6 text-center">
      <a href="#" className="hover:text-gray-900">Categories</a>
        <a href="#" className="hover:text-gray-900">Benefits</a>
        <a href="#" className="hover:text-gray-900">Best Sellers</a>
        <a href="#" className="hover:text-gray-900">About Us</a>
      </div>

      {/* 📏 Spacebar for Separation */}
    

      {/* Subscription Box (Full & Mobile) */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        {/* Left Side - Subscription */}
        <div className="flex space-x-4 w-full md:w-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="border px-4 py-2 w-full md:w-64 outline-none"
          />
          <button className="bg-green-900 text-white px-6 py-2 hover:bg-green-800">
            Subscribe
          </button>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
          <a href="#"><Instagram size={24} className="text-gray-700 hover:text-gray-900" /></a>
          <a href="#"><MessageCircle size={24} className="text-gray-700 hover:text-gray-900" /></a>
          <a href="#"><Facebook size={24} className="text-gray-700 hover:text-gray-900" /></a>
        </div>
      </div>
    </footer>
  );
}
