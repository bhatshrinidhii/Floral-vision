import { useState } from "react";
import {
  Search,
  ShoppingBag,
  ChevronDown,
  X,
} from "lucide-react";

function Navbar({ cartItems }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="w-full px-10 py-6 flex items-center justify-between relative">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="text-3xl">🌱</div>
        <h1 className="text-3xl font-bold">
          FloraVision.
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-12 text-lg">
        <li className="cursor-pointer hover:text-green-300 transition">
          Home
        </li>

        <li className="relative group">

  {/* Menu Button */}
  <div className="flex items-center gap-2 cursor-pointer hover:text-green-300 transition">
    Plants Type
    <ChevronDown size={18} />
  </div>

  {/* Dropdown */}
  <div className="absolute top-10 left-0 w-56 bg-[#102410]/95 border border-white/10 rounded-3xl backdrop-blur-md p-4 hidden group-hover:block z-50">

    <ul className="space-y-4 text-base">

      <li className="hover:text-green-300 cursor-pointer transition">
        Indoor Plants
      </li>

      <li className="hover:text-green-300 cursor-pointer transition">
        Outdoor Plants
      </li>

      <li className="hover:text-green-300 cursor-pointer transition">
        Succulents
      </li>

      <li className="hover:text-green-300 cursor-pointer transition">
        Medicinal Plants
      </li>

      <li className="hover:text-green-300 cursor-pointer transition">
        Decorative Plants
      </li>

      <li className="hover:text-green-300 cursor-pointer transition">
        Flowering Plants
      </li>

    </ul>
  </div>
</li>

        <li className="cursor-pointer hover:text-green-300 transition">
          More
        </li>

        <li className="cursor-pointer hover:text-green-300 transition">
          Contact
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Search Box */}
        {showSearch && (
          <div className="flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl">

            <input
              type="text"
              placeholder="Search plants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-transparent outline-none text-white placeholder:text-gray-300"
            />

            <X
              size={20}
              className="cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          </div>
        )}

        {/* Search Icon */}
        <Search
          className="cursor-pointer hover:text-green-300 transition"
          onClick={() => setShowSearch(true)}
        />

        {/* Cart Icon */}
        <div className="relative">

          <ShoppingBag
            className="cursor-pointer hover:text-green-300 transition"
            onClick={() => setShowCart(!showCart)}
          />

          {/* Cart Count */}
          {cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">
              {cartItems.length}
            </div>
          )}

          {/* Cart Popup */}
          {showCart && (
            <div className="absolute right-0 mt-4 w-[320px] bg-[#102410] border border-white/10 rounded-3xl p-5 backdrop-blur-md z-50">

              <h2 className="text-2xl font-semibold mb-5">
                Cart Items
              </h2>

              {cartItems.length === 0 ? (
                <p className="text-gray-300">
                  Your cart is empty
                </p>
              ) : (
                <div className="space-y-4">

                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border-b border-white/10 pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-xl"
                      />

                      <div>
                        <h3 className="font-medium">
                          {item.title}
                        </h3>

                        <p className="text-green-300">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;