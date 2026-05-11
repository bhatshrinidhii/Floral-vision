function TrendingPlants() {
  return (
    <section id="plants" className="px-10 py-20">
      
      <h2 className="text-6xl font-bold text-center mb-20">
        Our Trendy Plants
      </h2>

      <div className="w-full rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-md p-10 flex flex-col lg:flex-row items-center gap-20">
        
        <img
          src="https://happylifepk.online/wp-content/uploads/2024/06/product-2-3.jpg"
          alt="plant"
          className="w-[400px]"
        />

        <div>
          <h3 className="text-5xl font-bold">
            For Your Desk Decorations
          </h3>

          <p className="text-gray-300 text-2xl mt-8 max-w-2xl">
            Beautiful indoor plants that make your space feel
            fresh, calm, and modern.
          </p>

          <h4 className="text-5xl mt-10 font-bold">
            Rs. 599/-
          </h4>

          <button className="mt-10 border border-white px-10 py-4 rounded-2xl text-2xl hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

export default TrendingPlants;