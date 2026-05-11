import { ShoppingBag } from "lucide-react";

function ProductCard({
  image,
  title,
  subtitle,
  price,
  addToCart,
}) {
  return (
    <div className="w-full rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:scale-105 transition duration-300">

      {/* Plant Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[250px] object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-8">

        <p className="text-gray-300 text-lg">
          {subtitle}
        </p>

        <h2 className="text-3xl font-semibold mt-3">
          {title}
        </h2>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-8">

          <h3 className="text-3xl font-bold">
            {price}
          </h3>

          <button
            onClick={() =>
              addToCart({
                image,
                title,
                price,
              })
            }
            className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <ShoppingBag size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;