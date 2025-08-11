import React from "react";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

interface FoodCardProps {
  product: {
    id: number;
    shop_id: number;
    shop_name?: string;
    city?: string;
    name: string;
    description: string;
    image_path: string;
    original_price: number;
    current_price: number;
  };
}

const FoodCard: React.FC<FoodCardProps> = ({ product }) => {
  const isSale = product.current_price < product.original_price;
  const salePercent = isSale
    ? Math.round(((product.original_price - product.current_price) / product.original_price) * 100)
    : 0;

  return (
    <Link
      to={`/shop/${product.shop_id}`}
      className="block transform transition-transform duration-200 hover:scale-[1.02]"
    >
      <div className="relative border rounded-lg shadow hover:shadow-lg transition flex overflow-hidden h-40 cursor-pointer">
        {isSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{salePercent}%
          </span>
        )}

        <div className="w-1/3 flex items-center justify-center bg-black">
          <img
            src={product.image_path || ""}
            alt={product.name}
            className="object-contain h-full w-full"
          />
        </div>

        <div className="flex-1 flex flex-col p-3 overflow-hidden">
          <h3 className="font-bold text-base mb-1 line-clamp-1">{product.name}</h3>

          <p className="text-justify text-sm text-gray-600 mb-1 line-clamp-2">
            {product.description || "Không có mô tả."}
          </p>

          <div className="flex items-start text-sm text-gray-500 gap-1">
            <FiMapPin className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span className="whitespace-normal break-words line-clamp-1">
              {product.shop_name}
              {product.city ? ` - ${product.city}` : ""}
            </span>
          </div>

          <div className="mt-auto">
            <p className="text-red-500 font-bold">
              {product.current_price.toLocaleString()}đ{" "}
              {isSale && (
                <span className="line-through text-gray-400 text-sm ml-1">
                  {product.original_price.toLocaleString()}đ
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
