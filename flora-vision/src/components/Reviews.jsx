import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section className="px-10 py-20">

      <h2 className="text-6xl font-bold text-center mb-20">
        Customer Review
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <ReviewCard
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
          name="Jenny Wilson"
          rating={5}
          review="Absolutely loved the quality of the plants and the elegant packaging."
        />

        <ReviewCard
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
          name="Robert Fox"
          rating={5}
          review="The plants arrived fresh and healthy. My room feels so alive now."
        />

        <ReviewCard
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
          name="Kristin Watson"
          rating={4}
          review="Beautiful designs and premium quality indoor plants."
        />

      </div>
    </section>
  );
}

export default Reviews;