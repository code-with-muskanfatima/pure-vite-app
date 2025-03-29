export default function Testimonials() {
  return (
    <section className="w-full bg-[#A0B3AC] py-16 px-6">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold text-gray-900 mb-10">What our clients say</h2>

      {/* Three Testimonials for Desktop */}
      <div className="hidden md:flex justify-center gap-10 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center text-center bg-[#A0B3AC] p-6 rounded-lg">
          <span className="text-green-900 text-2xl">★★★★★</span>
          <p className="text-lg text-gray-900 mt-3">“After just two weeks, my teeth are noticeably whiter”</p>
          <span className="text-gray-700 mt-2">- Sarah Han</span>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center text-center bg-[#A0B3AC] p-6 rounded-lg">
          <span className="text-green-900 text-2xl">★★★★★</span>
          <p className="text-lg text-gray-900 mt-3">“I've tried many toothbrushes over the years, but PureBrush stands out.”</p>
          <span className="text-gray-700 mt-2">- Johny Matt</span>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col items-center text-center bg-[#A0B3AC] p-6 rounded-lg">
          <span className="text-green-900 text-2xl">★★★★★</span>
          <p className="text-lg text-gray-900 mt-3">“I love that they’re made from sustainable materials”</p>
          <span className="text-gray-700 mt-2">- Amanda Christen</span>
        </div>
      </div>

      {/* Single Testimonial for Tab & Mobile */}
      <div className="md:hidden flex flex-col items-center text-center bg-[#A0B3AC] p-6 rounded-lg max-w-md mx-auto">
        <span className="text-green-900 text-2xl">★★★★★</span>
        <p className="text-lg text-gray-900 mt-3">“After just two weeks, my teeth are noticeably whiter”</p>
        <span className="text-gray-700 mt-2">- Sarah Han</span>
      </div>
    </section>
  );
}
