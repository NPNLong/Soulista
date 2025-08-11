import { FiStar, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import type { Shop } from "../hooks/shop_hooks";

interface ShopCardProps {
  shop: Shop;
}

export default function ShopCard({ shop }: ShopCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${shop.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow overflow-hidden cursor-pointer
                 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl relative h-full flex flex-col"
    >
      {shop.has_sale && (
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
          Sale
        </div>
      )}

      <div className="w-full aspect-square overflow-hidden">
        <img
          src={shop.avatar_path}
          alt={shop.name}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      <div className="p-3 flex flex-col justify-between flex-grow">
        <p className="font-bold text-sm line-clamp-2 min-h-[2.5rem]">
          {shop.name}
        </p>

        <div className="flex items-center space-x-1 text-yellow-500 text-xs mt-1">
          <FiStar className="text-base" />
          <span className="font-semibold text-black">
            {shop.average_rating.toFixed(1)}
          </span>
          <span className="text-gray-500">({shop.total_ratings})</span>
        </div>

        {shop.distance !== null && shop.distance !== undefined ? (
          <div className="flex items-center text-gray-500 text-xs mt-2">
            <FiMapPin className="mr-1" />
            {shop.distance.toFixed(1)} km
          </div>
        ) : (
          <p className="text-gray-400 text-xs mt-2">Bật GPS để xem khoảng cách</p>
        )}

        <div className="mt-2">
          <p className="text-red-500 font-bold text-base truncate max-w-full">
            {shop.price_range}
          </p>
        </div>

      </div>
    </div>
  );
}
