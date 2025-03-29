import { FaInstagram } from "react-icons/fa";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const images = [img1, img2, img3, img4, img5, img6];

export default function InstagramSection() {
  return (
    <section className="w-full bg-[#FFF8F0] py-16 px-6">
      {/* Heading & Paragraph */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Be a part of the PureBrush family!</h2>
        <p className="text-gray-700 mt-2">
          Our feed is filled with inspiration to help you maintain a healthy and beautiful smile
        </p>
      </div>

      {/* Image Grid (2 per row on all screens) */}
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden">
            <img src={img} alt={`PureBrush ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      {/* Instagram Link */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <FaInstagram className="text-xl text-gray-900" />
        <span className="text-gray-900 text-lg font-medium">Join us on Instagram</span>
      </div>
    </section>
  );
}
