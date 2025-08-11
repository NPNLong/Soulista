import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "./ShopCard";
import { useTopWeekShops } from "../hooks/shop_hooks";
import type { Shop } from "../hooks/shop_hooks";

export default function HotPlaces({ title }: { title: string }) {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [loadingCity, setLoadingCity] = useState(true);

  const { data: shops = [], isLoading } = useTopWeekShops(city);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLoadingCity(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const cityName = await getCityFromLatLng(
          pos.coords.latitude,
          pos.coords.longitude
        );
        setCity(cityName);
        setLoadingCity(false);
      },
      () => {
        setCity("");
        setLoadingCity(false);
      }
    );
  }, []);

  if (loadingCity) return <div className="py-6 text-center">Đang lấy vị trí...</div>;
  if (isLoading) return <div className="py-6 text-center">Đang tải dữ liệu...</div>;

  const shopList: Shop[] = Array.isArray(shops) ? shops : [];

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shopList.length === 0 ? (
          <p className="text-gray-500">Không có cửa hàng nào</p>
        ) : (
          shopList.map((shop) => <ShopCard key={shop.id} shop={shop} />)
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/ranking")}
          className="cursor-pointer bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded shadow 
                      hover:bg-blue-500 hover:text-white hover:scale-105 transition font-semibold"
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}

async function getCityFromLatLng(lat: number, lng: number) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );
  const data = await res.json();
  return (
    data.address.city ||
    data.address.town ||
    data.address.province ||
    data.address.state ||
    ""
  );
}
