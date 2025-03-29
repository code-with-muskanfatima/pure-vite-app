import pic1 from "../assets/section3.png";
import pic2 from "../assets/section3(ii).png";
import pic3 from "../assets/section(iii).png";

const reviews = [
  { image: pic1, text: "Provide a pleasant, long-lasting freshness, contributing to better overall oral hygiene.", heading: "Fresh Breath" },
  { image: pic2, text: "Trusted by healthcare professionals, PureBrush is a reliable choice for daily care.", heading: "Enhanced Appearance" },
  { image: pic3, text: "It effectively fights cavities, reduces plaque, and promotes overall oral health.", heading: "Improve Oral Health" },
];

export default function ReviewsSection() {
  return (
    <section className="w-full bg-[#FFFBF2]">
      
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col">
        {reviews.map((review, index) => (
          <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <img src={review.image} alt="" className="w-1/2 h-auto" />
            <div className="px-20">
              <h3 className="text-xl font-semibold text-gray-900">{review.heading}</h3>
              <p className="text-gray-700 text-lg py-4 w-1/2">{review.text}</p>
              <button className="mt-4 px-5 py-2 bg-green-950 text-white">Shop Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet & Mobile View (Full Width Image + Boxed Content) */}
      <div className="lg:hidden flex flex-col items-center ">
        {reviews.map((review, index) => (
          <div key={index} className="w-full">
            {/* Image Full Width */}
            <img src={review.image} alt="" className="w-full h-auto object-cover" />
            {/* Content Box */}
            <div className="bg-[#F9F4E8] px-16 py-8 font-semibold ">
              <h3 className="text-xl font-semibold text-gray-900">{review.heading}</h3>
              <p className="text-gray-700 text-lg py-4">{review.text}</p>
              <button className="mt-2 px-5 py-2 bg-green-950 text-white rounded-md">Shop Now</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
