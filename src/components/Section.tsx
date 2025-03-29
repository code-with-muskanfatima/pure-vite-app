import section from "../assets/16.png";

export default function Section() {
  return (
    <section className="w-full h-screen relative flex flex-col">
      {/* Full-Screen Image (Desktop) */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={section}
          alt="section no 1"
          className="w-full h-full object-cover"
        />
        {/* Text Over Image (Desktop) */}
        <div className="absolute inset-0 flex items-center justify-start pl-20">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-bold">Love Your Smile.</h2>
            <p className="text-lg mt-2">
              It's a confidence booster. Our easy-to-use applicator ensures even
              coverage, making it perfect for daily use.
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-black text-lg font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet View (Image + Text Below) */}
      <div className="md:hidden w-full">
        <img src={section} alt="section no 1" className="w-full h-full object-cover" />
        <div className="w-full bg-white bg-opacity-80 p-6 text-center z-10">
          <h2 className="text-2xl font-bold text-gray-800">Love Your Smile.</h2>
          <p className="text-gray-600 mt-2">
            It's a confidence booster. Our easy-to-use applicator ensures even coverage,
            making it perfect for daily use.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-950 text-white text-lg font-semibold">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
