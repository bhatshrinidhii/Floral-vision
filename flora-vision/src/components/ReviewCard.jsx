import { Star } from "lucide-react";

function ReviewCard({
  image,
  name,
  review,
  rating,
}) {
  return (
    <div className="w-full max-w-[420px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:scale-105 transition duration-300">
      
      {/* Top Section */}
      <div className="flex items-center gap-5">
        
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border border-white/20"
        />

        <div>
          <h3 className="text-2xl font-semibold">
            {name}
          </h3>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(rating)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-lg leading-relaxed mt-8">
        {review}
      </p>
    </div>
  );
}

export default ReviewCard;