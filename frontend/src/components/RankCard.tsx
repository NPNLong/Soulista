import React from "react";
import { Link } from "react-router-dom";

interface RankCardProps {
  id: string | number; // thêm id để điều hướng
  image: string;
  name: string;
  address: string;
  points: number;
  distanceElement?: React.ReactNode;
}

export default function RankCard({
  id,
  image,
  name,
  address,
  points,
  distanceElement,
}: RankCardProps) {
  return (
    <Link
      to={`/shop/${id}`}
      className="block"
    >
      <div className="flex items-center bg-white rounded-lg shadow p-4 hover:shadow-md transition">
        {/* Ảnh cửa hàng */}
        <img
          src={image || "/placeholder.jpg"}
          alt={name}
          className="w-16 h-16 object-cover rounded-lg"
        />

        {/* Thông tin */}
        <div className="ml-4 flex-1">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{address}</p>
          {distanceElement}
        </div>

        {/* Điểm */}
        <div className="flex items-center gap-1 text-sm font-medium text-yellow-600">
          ⭐ {points}
        </div>
      </div>
    </Link>
  );
}
