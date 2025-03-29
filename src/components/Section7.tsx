import bgImage from "../assets/10.jpeg"; // Apni image ka path lagao

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Toothbrushes on marble"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20  text-white">
        <div className="max-w-md 
          text-center md:text-center lg:text-left   /* Tab & Mobile Center, Desktop Left */
          mx-auto lg:mx-0">  {/* Mobile & Tab Center, Desktop Left */}

          <h2 className="text-3xl md:text-5xl font-semibold">Get Yours Today!</h2>
          <p className="mt-2 text-base md:text-lg">
            Don't wait to experience the best in oral care! Click 'Buy now' to secure your favorites and enjoy a brighter, healthier smile.
          </p>
          
          {/* Button Positioning */}
          <button className="mt-40 md:mt-6 px-6 py-3 bg-white text-black text-lg font-medium hover:bg-gray-200 transition">
            Buy now with 15% off
          </button>

        </div>
      </div>
    </section>
  );
}
