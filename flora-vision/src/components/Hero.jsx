import { Play } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="w-full min-h-screen px-10 pt-10 flex items-center justify-between relative">
      
      {/* Background Blur */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Left Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-7xl font-bold leading-tight">
          Earth’s Exhale
        </h1>

        <p className="text-gray-300 text-2xl mt-6 max-w-2xl">
          Earth Exhale symbolizes the purity and vitality of the
          Earth’s natural environment and its essential role in
          sustaining life.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-10">
          
          <button className="border border-white px-10 py-4 rounded-2xl text-2xl hover:bg-white hover:text-black transition">
            Buy Now
          </button>

          <div className="flex items-center gap-4">
            <button className="w-20 h-20 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
              <Play />
            </button>

            <span className="text-2xl">Live Demo</span>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="relative z-10 hidden lg:flex">
        
        <div className="w-[400px] h-[650px] rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-between">

          <img
            src="https://www.ugaoo.com/cdn/shop/files/Aesthetic_7548c668-a6ec-403c-9fec-3be27bc110bc.jpg?v=1693284618&width=1000"
            alt="plant"
            className="w-[320px] object-contain"
          />

          <div className="w-full">
            <p className="text-gray-300 text-xl">Indoor Plant</p>

            <h2 className="text-5xl mt-3 font-light">
              Aglaonema Plant
            </h2>

            <button className="mt-8 border border-white px-10 py-4 rounded-2xl text-2xl hover:bg-white hover:text-black transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;