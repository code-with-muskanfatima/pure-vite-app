import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Modules ka sahi import


import "swiper/css"; 
import "swiper/css/pagination";


import img1 from "../assets/7.png";
import img2 from "../assets/8.png";
import img3 from "../assets/9.png";

export default function BestSellers() {
  const products = [
    {
      image: img1,
      title: "PureClean Toothbrush",
      price: "$12.8",
      description: "Featuring ultra-soft bristles that gently sweep away plaque and debris.",
    },
    {
      image: img2,
      title: "Product Name",
      price: "$13.8",
      description: "Short description of the product or service of the website.",
    },
    {
      image: img3,
      title: "Product Name",
      price: "$12.8",
      description: "Short description of the product or service of the website.",
    },
  ];

  return (
    <section className="w-full bg-[#B3C2B2] py-16 px-6">
      {/* Heading & Paragraph */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">Explore our best-sellers</h2>
        <p className="text-gray-700 mt-2">
          Each product is crafted with the finest materials and backed by rave reviews from our loyal customers.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablet: 2 slides
          1024: { slidesPerView: 3 }, // Desktop: 3 slides
        }}
        modules={[Pagination]}
        className="max-w-6xl mx-auto"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6">
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
              <div className="justify-between flex py-4">
                <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <p className="text-gray-700">{product.description}</p>
              <button className="mt-4 px-5 py-2 bg-green-900 text-white hover:bg-green-800">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
