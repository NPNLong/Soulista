import { useParams, useLocation } from "react-router-dom";
import { FiMapPin, FiPhone, FiFacebook, FiInstagram, FiYoutube, FiClock, FiTrendingUp, FiCalendar, FiStar, FiAward, FiChevronLeft, FiChevronRight, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { GoogleMap, Marker, useJsApiLoader, DirectionsRenderer, TrafficLayer } from "@react-google-maps/api";
import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";
import type { Shop } from "../hooks/shop_hooks";
import { useProductsByShop } from "../hooks/product_hooks";
import { useShopById } from "../hooks/shop_hooks";
import ContactInfo from "../components/ContactInfo";

const libraries: ("places")[] = ["places"];

export default function ShopPage() {
  const { id } = useParams();
  const location = useLocation();
  const { data: shop, isLoading } = useShopById(Number(id));
  const { data: products = [] } = useProductsByShop(Number(id));
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // Các hook phải giữ nguyên thứ tự
  const [sortAsc, setSortAsc] = useState(true);
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const [reviews, setReviews] = useState<
    { id: number; name: string; rating: number; comment: string; date: string }[]
  >([]);

  const [reviewName, setReviewName] = useState("Khách");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");

  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [starFilter, setStarFilter] = useState<number | null>(null);

  // Dữ liệu filtered + sorted
  const filteredReviews = useMemo(() => {
    let filtered = [...reviews];
    if (starFilter) {
      filtered = filtered.filter(r => r.rating === starFilter);
    }
    filtered.sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });
    return filtered;
  }, [reviews, sortOrder, starFilter]);

  // Load user info từ localStorage khi component mount
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setReviewName(user.fullname || "Khách");
      // Nếu bạn có các field khác như points, rank thì load ở đây luôn nếu cần
      // setPoints(user.points || 0);
      // setRank(user.member_rank || "");
      // setCheckedIn(user.checked_in_today || false);
    }
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => console.log("Người dùng từ chối GPS")
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    if (isLoaded && userLocation && shop) {
      const service = new google.maps.DirectionsService();
      service.route(
        {
          origin: userLocation,
          destination: { lat: shop.latitude, lng: shop.longitude },
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK" && result) {
            const leg = result.routes[0].legs[0];
            setDirections(result);
            setDistance(leg.distance?.text ?? null);
            setDuration(leg.duration?.text ?? null);
          }
        }
      );
    }
  }, [isLoaded, userLocation, shop]);

  useEffect(() => {
    if (!id) return;
    const saved = localStorage.getItem(`shopReviews_${id}`);
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, [id]);

  const sortedProducts = [...products].sort((a, b) =>
    sortAsc ? a.current_price - b.current_price : b.current_price - a.current_price
  );

  if (isLoading) return <div>Đang tải...</div>;
  if (!shop) return <div>Không tìm thấy cửa hàng</div>;

  function handleAddReview() {
    if (reviewRating === 0) {
      alert("Vui lòng chọn số sao.");
      return;
    }
    const newReview = {
      id: Date.now(),
      name: reviewName.trim(),
      rating: reviewRating,
      comment: reviewComment.trim(),
      date: new Date().toLocaleString(),
    };
    const newReviews = [newReview, ...reviews];
    setReviews(newReviews);
    localStorage.setItem(`shopReviews_${id}`, JSON.stringify(newReviews));
    // Reset form (không reset tên, vì lấy từ localStorage)
    setReviewRating(0);
    setReviewComment("");
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-400">
      {[1, 2, 3, 4, 5].map((n) => (
        <FiStar key={n} className={n <= rating ? "fill-current" : "opacity-40"} />
      ))}
    </div>
  );

  const StarPicker = ({
    rating,
    setRating,
  }: {
    rating: number;
    setRating: (r: number) => void;
  }) => (
    <div className="flex space-x-1 text-yellow-400 cursor-pointer">
      {[1, 2, 3, 4, 5].map((n) => (
        <FiStar
          key={n}
          className={n <= rating ? "fill-current" : "opacity-40"}
          onClick={() => setRating(n)}
          size={24}
        />
      ))}
    </div>
  );

  return (
    <>

      <div className="container mx-auto px-4 pt-26 pb-10">
        {/* Info */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Ảnh & nút điều hướng */}
        <div className="flex items-center w-full lg:w-1/2 relative">
            <div className="w-full aspect-video bg-black flex items-center justify-center rounded-lg overflow-hidden">
            <img
            src={shop.images}
            alt={`${shop.name}-${currentImage}`}
            className="object-contain w-full h-full"
            />
            </div>
{/* 
            {shop.images.length > 1 && (
            <>
                <button
                onClick={prevImage}
                className="cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow"
                >
                <FiChevronLeft size={24} />
                </button>
                <button
                onClick={nextImage}
                className="cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow"
                >
                <FiChevronRight size={24} />
                </button>
            </>
            )} */}
        </div>

        {/* Thông tin cửa hàng */}
        <div className="flex-1">
            <h1 className="text-2xl font-bold mb-3">{shop.name}</h1>

            {/* Thẻ điểm nhấn */}
            <div className="flex bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-6">
            {/* Ngày tham gia */}
            <div className="flex-1 flex flex-col items-center text-gray-700">
                <FiCalendar className="text-blue-500 mb-1" size={20} />
                <span className="text-sm font-semibold">Ngày tham gia</span>
                <span className="text-lg font-bold">{shop.join_date}</span>
            </div>

            {/* Hạng tuần */}
            <div className="flex-1 flex flex-col items-center text-gray-700 border-l border-blue-100">
                <FiStar className="text-blue-500 mb-1" size={20} />
                <span className="text-sm font-semibold">Điểm tuần</span>
                <span className="text-lg font-bold">{shop.weekly_points}</span>
            </div>

            {/* Hạng tháng */}
            <div className="flex-1 flex flex-col items-center text-gray-700 border-l border-blue-100">
                <FiAward className="text-blue-500 mb-1" size={20} />
                <span className="text-sm font-semibold">Điểm tháng</span>
                <span className="text-lg font-bold">{shop.monthly_points}</span>
            </div>
            </div>


            <p className="mb-4 text-gray-700">{shop.description}</p>
            <p className="text-gray-700 mb-4">Loại: {shop.type}</p>

            {/* Liên hệ */}
            <ContactInfo contact={shop.contact} />

            {shop.qr_code_path && (
            <div className="mt-4">
                <p className="font-semibold mb-2">Mã QR</p>
                <img src={shop.qr_code_path} alt="QR Code" className="w-32 h-32 object-cover border rounded" />
            </div>
            )}
        </div>
        </div>

        {/* Google Map + Danh sách món */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Bản đồ */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-2 mb-2">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Vị trí cửa hàng</h2>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${shop.latitude},${shop.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Xem chi tiết
                </a>
              </div>

              {/* Khoảng cách và thời gian di chuyển */}
              {distance && duration && (
                <div className="flex items-center gap-4 text-gray-700">
                  <p className="flex items-center gap-2 mb-1">
                    <FiMapPin className="text-blue-500" /> {shop.address}, {shop.city}
                  </p>
                  <span className="flex items-center gap-1">
                    <FiTrendingUp className="text-blue-500" /> {distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="text-blue-500" /> {duration}
                  </span>
                </div>
              )}
            </div>

            {isLoaded && (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "500px" }}
                center={{ lat: shop.latitude, lng: shop.longitude }}
                zoom={15}
                options={{
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
                  streetViewControl: false,
                  mapTypeControl: false,
                }}
              >
                <Marker position={{ lat: shop.latitude, lng: shop.longitude }} />
                {directions && (
                  <DirectionsRenderer
                    directions={directions}
                    options={{
                      polylineOptions: {
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 6,
                      },
                      suppressMarkers: false,
                    }}
                  />
                )}
                <TrafficLayer />
              </GoogleMap>
            )}
          </div>


        {/* Danh sách món */}
        <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold">Danh sách sản phẩm / món</h2>
            <button
            onClick={() => setSortAsc(!sortAsc)}
            className="flex items-center gap-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
            >
            {sortAsc ? <FiArrowUp /> : <FiArrowDown />}
            {sortAsc ? "Giá tăng dần" : "Giá giảm dần"}
            </button>
        </div>

        <div className="grid grid-cols-1 gap-4 max-h-[530px] overflow-y-auto pr-2">
            {sortedProducts.map((product) => (
            <FoodCard product={product} key={product.id} />
            ))}
        </div>
        </div>

        </div>

        {/* Phần đánh giá */}
        <div className="mx-auto flex flex-col lg:flex-row gap-6 mb-12 max-h-[500px]">
          {/* Bên trái: Viết đánh giá */}
          <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Viết đánh giá</h2>
            {/* Hiển thị tên user lấy từ localStorage, không cho chỉnh sửa */}
            <p className="mb-2 text-gray-700 text-lg">
              <span className="font-semibold">Tên của bạn: </span>
              {reviewName || "Khách"}
            </p>
            <div>
              <label className="block mb-2 font-semibold text-lg">Đánh giá sao</label>
              <StarPicker rating={reviewRating} setRating={setReviewRating} />
            </div>
            <textarea
              placeholder="Viết nhận xét của bạn..."
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none
                         text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddReview}
              className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg
                         hover:bg-blue-700 transition cursor-pointer"
            >
              Gửi đánh giá
            </button>
          </div>

          {/* Bên phải: Hiển thị đánh giá */}
                {/* Bên phải: Hiển thị đánh giá + nút lọc */}
      <div className="lg:w-2/3 bg-white p-6 rounded-xl shadow-lg overflow-y-auto max-h-[410px]">
        <h2 className="text-2xl font-semibold mb-4">Đánh giá của khách hàng</h2>

        {/* Nút lọc sắp xếp */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSortOrder("newest")}
            className={`cursor-pointer px-3 py-1 rounded ${
              sortOrder === "newest"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Mới nhất
          </button>
          <button
            onClick={() => setSortOrder("oldest")}
            className={`cursor-pointer px-3 py-1 rounded ${
              sortOrder === "oldest"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Cũ nhất
          </button>

          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setStarFilter(starFilter === star ? null : star)}
              className={`px-3 py-1 rounded flex items-center gap-1 cursor-pointer ${
                starFilter === star
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              title={`Lọc sao ${star}`}
            >
              {star}{" "}
              <FiStar
                className={starFilter === star ? "text-white" : "text-yellow-400"}
                size={18}
              />
            </button>
          ))}

          {/* Nút bỏ lọc sao */}
          {starFilter !== null && (
            <button
              onClick={() => setStarFilter(null)}
              className="cursor-pointer px-3 py-1 rounded bg-red-500 text-white ml-auto"
              title="Bỏ lọc sao"
            >
              Bỏ lọc
            </button>
          )}
        </div>

        {filteredReviews.length === 0 ? (
          <p className="text-gray-500 italic">Không có đánh giá phù hợp.</p>
        ) : (
          <div className="overflow-y-auto max-h-[260px] space-y-4">
            {filteredReviews.map(({ id, name, rating, comment, date }) => (
              <div
                key={id}
                className="border border-blue-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-blue-700 text-lg">{name}</p>
                  <StarRating rating={rating} />
                </div>
                <p className="text-gray-800 mb-2 whitespace-pre-wrap">
                  {comment || <i>(Không có bình luận)</i>}
                </p>
                <p className="text-xs text-gray-400">{date}</p>
              </div>
            ))}
          </div>
        )}
      </div>

        </div>
      </div>

    </>
  );
}