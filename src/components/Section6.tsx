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

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6">
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
        ))}
      </div>
    </section>
  );
}
