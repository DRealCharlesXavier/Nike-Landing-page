import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { useState } from "react";

const PopularProducts = () => {
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleClick = (productName) => {
  //   const product = products.find((product) => product.name === productName);
  //   setSelectedProduct(product);
  //   window.history.pushState(
  //     null,
  //     "",
  //     `/product-details/${encodeURIComponent(productName)}`
  //   );
  // };

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-monteserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
        {products.map((product) => (
          <div key={product.name} onClick={() => handleClick(product)}>
            <PopularProductCard {...product} />
          </div>
        ))}
      </div>

      {/* {selectedProduct && <ProductDetailsPage product={selectedProduct} />} */}
    </section>
  );
};

export default PopularProducts;
