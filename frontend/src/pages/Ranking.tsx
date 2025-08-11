import React, { useEffect, useState } from "react";
import { useTopWeekShops, useTopMonthShops } from "../hooks/shop_hooks";
import RankCard from "../components/RankCard";
import { FiMapPin } from "react-icons/fi";

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

export default function Ranking() {
  const [city, setCity] = useState<string>("");
  const [loadingCity, setLoadingCity] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLoadingCity(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const foundCity = await getCityFromLatLng(latitude, longitude);
        setCity(foundCity);
        setLoadingCity(false);
      },
      () => {
        setLoadingCity(false);
      }
    );
  }, []);

  const { data: topWeek, isLoading: loadingWeek } = useTopWeekShops(city);
  const { data: topMonth, isLoading: loadingMonth } = useTopMonthShops(city);

  const isLoading = loadingCity || loadingWeek || loadingMonth;

  // Loading toàn trang
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-30">
      {/* Header */}
      <header className="mb-8 space-y-2 text-center">
        <p className="text-sm text-gray-500">Bảng xếp hạng cửa hàng</p>
        <h1 className="text-3xl font-bold">
          Top cửa hàng nổi bật {city && `tại ${city}`}
        </h1>
      </header>

      {/* Layout 50-50 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* BXH tuần */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🏆 Xếp hạng tuần</h2>
          <div className="space-y-4">
            {topWeek?.map((shop, idx) => (
              <RankCard
                key={shop.id}
                id={shop.id}
                image={shop.images}
                name={`${idx + 1}. ${shop.name}`}
                address={shop.address}
                points={shop.weekly_points}
                distanceElement={
                  shop.distance !== null && shop.distance !== undefined ? (
                    <div className="flex items-center text-gray-500 text-xs mt-2">
                      <FiMapPin className="mr-1" />
                      {shop.distance.toFixed(1)} km
                    </div>
                  ) : (
                    <p className="text-gray-400 text-xs mt-2">
                      Bật GPS để xem khoảng cách
                    </p>
                  )
                }
              />
            ))}
          </div>
        </section>

        {/* BXH tháng */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">📅 Xếp hạng tháng</h2>
          <div className="space-y-4">
            {topMonth?.map((shop, idx) => (
              <RankCard
                key={shop.id}
                id={shop.id}
                image={shop.images}
                name={`${idx + 1}. ${shop.name}`}
                address={shop.address}
                points={shop.monthly_points}
                distanceElement={
                  shop.distance !== null && shop.distance !== undefined ? (
                    <div className="flex items-center text-gray-500 text-xs mt-2">
                      <FiMapPin className="mr-1" />
                      {shop.distance.toFixed(1)} km
                    </div>
                  ) : (
                    <p className="text-gray-400 text-xs mt-2">
                      Bật GPS để xem khoảng cách
                    </p>
                  )
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
