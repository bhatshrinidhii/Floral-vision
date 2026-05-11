function Footer() {
  return (
    <footer id="contact"className="px-10 py-20 mt-20 border-t border-white/10">
      
      <div className="grid md:grid-cols-3 gap-20">
        
        {/* Left */}
        <div>
          <h1 className="text-5xl font-bold">
            🌱 FloraVision.
          </h1>
        
          <p className="text-gray-300 mt-8 text-xl leading-relaxed">
            From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to elevate your environment.
          </p>
        </div>

        {/* Center */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">
            Quick Links
          </h2>

            <ul className="space-y-6 text-xl text-gray-300">
                <li>
                    <a href="/" className="transition hover:text-green-500">
                    Home
                    </a>
                </li>

                <li>
                    <a href="/" className="transition hover:text-green-500">
                    Plants
                    </a>
                </li>

                <li>
                    <a href="/" className="transition hover:text-green-500">
                    Contact
                    </a>
                </li>

                <li>
                    <a href="/" className="transition hover:text-green-500">
                    Privacy
                    </a>
                </li>
            </ul>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">
            Subscribe
          </h2>

          <form className="flex">
            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="w-full px-6 py-4 rounded-l-2xl bg-transparent border border-white/20 outline-none transition hover:text-green-500"
            />

            <button
                type="submit"
                className="bg-white text-black px-8 rounded-r-2xl font-semibold"
            >
                Subscribe
            </button>
            </form>
        </div>
      </div>

    <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
  
      <div className="flex gap-6 socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-500 transition"
        >
          FB
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-500 transition"
        >
          TW
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-500 transition"
        >
          LI
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        FloraVision © All rights reserved
      </p>
    </div>
    </footer>
  );
}

export default Footer;