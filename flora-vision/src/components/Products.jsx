import ProductCard from "./ProductCard";

function Products({ addToCart }) {
  return (
    <section className="px-10 py-20">

      <h2 className="text-6xl font-bold text-center mb-20">
        Our Top Sellings
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <ProductCard
          image="https://th.bing.com/th/id/OIP.SHPHkNRZIMBDpN39CgAiRgHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          title="Calathea Plant"
          subtitle="Indoor Plant"
          price="Rs. 359/-"
          addToCart={addToCart}
        />

        <ProductCard
          image="https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w"
          title="Snake Plant"
          subtitle="Indoor Plant"
          price="Rs. 499/-"
          addToCart={addToCart}
        />

        <ProductCard
          image="https://tse3.mm.bing.net/th/id/OIP.XC6jecDKfQZWu1ed4_HjywHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          title="Monstera Plant"
          subtitle="Indoor Plant"
          price="Rs. 699/-"
          addToCart={addToCart}
        />

        <ProductCard
          image="https://www.ugaoo.com/cdn/shop/files/A_image_1_a922dc38-0d91-4845-bcfe-9bd03419c27a.jpg?v=1778241473&width=1000"
          title="Peace Lily"
          subtitle="Indoor Plant"
          price="Rs. 399/-"
          addToCart={addToCart}
        />

        <ProductCard
          image="https://th.bing.com/th/id/OIP.WOeJv2F9c64xyYN_op048wHaJd?w=139&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          title="Aloe Vera"
          subtitle="Medicinal Plant"
          price="Rs. 299/-"
          addToCart={addToCart}
        />

        <ProductCard
          image="https://th.bing.com/th/id/OIP.AqBAsyhabFSBC8Y7jy5tPAHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          title="Aglaonema Plant"
          subtitle="Decor Plant"
          price="Rs. 599/-"
          addToCart={addToCart}
        />

      </div>
    </section>
  );
}

export default Products;