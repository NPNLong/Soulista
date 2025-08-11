import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

export interface Shop {
  id: number;
  name: string;
  join_date: string;
  avatar_path: string;
  images: string;
  price_range: string;
  address: string;
  city: string;
  type: string;
  description: string;
  latitude: number;
  longitude: number;
  weekly_points: number;
  monthly_points: number;
  contact: string;
  qr_code_path: string;
  has_sale: boolean;
  average_rating: number;
  total_ratings: number;
  distance?: number | null; // <--- thêm field này
}

// Haversine formula tính khoảng cách (km)
const calcDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371; // bán kính trái đất km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Lấy vị trí hiện tại (nếu được phép)
const getUserLocation = (): Promise<GeolocationPosition | null> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos),
      () => resolve(null),
      { enableHighAccuracy: true }
    );
  });
};

// Helper thêm distance vào danh sách shop
const addDistance = async (shops: Shop[]) => {
  const pos = await getUserLocation();
  if (!pos) {
    return shops.map((s) => ({ ...s, distance: null }));
  }
  const { latitude, longitude } = pos.coords;
  return shops.map((s) => {
    const rawDist = calcDistance(latitude, longitude, s.latitude, s.longitude);
    return {
      ...s,
      distance: Math.round(rawDist * 10) / 10, // <-- làm tròn 1 chữ số
    };
  });
};

// 1. Lấy tất cả shop
export const useAllShops = () => {
  return useQuery<Shop[]>({
    queryKey: ["allShops"],
    queryFn: async () => {
      const res = await axiosInstance.get("/user/shops");
      return await addDistance(res.data);
    },
  });
};

// 2. Lấy shop theo từ khóa tìm kiếm
export const useSearchShops = (search: string) => {
  return useQuery<Shop[]>({
    queryKey: ["searchShops", search],
    queryFn: async () => {
      if (!search) return [];
      const res = await axiosInstance.get("/user/shops/search", {
        params: { search },
      });
      return await addDistance(res.data);
    },
    enabled: !!search,
  });
};

// 3. Top 6 điểm cao tuần theo thành phố
export const useTopWeekShops = (city: string) => {
  return useQuery<Shop[]>({
    queryKey: ["topWeekShops", city],
    queryFn: async () => {
      if (!city) return [];
      const res = await axiosInstance.get("/user/shops/top-week", {
        params: { city },
      });
      return await addDistance(res.data);
    },
    enabled: !!city,
  });
};

// 4. Top 6 điểm cao tháng theo thành phố
export const useTopMonthShops = (city: string) => {
  return useQuery<Shop[]>({
    queryKey: ["topMonthShops", city],
    queryFn: async () => {
      if (!city) return [];
      const res = await axiosInstance.get("/user/shops/top-month", {
        params: { city },
      });
      return await addDistance(res.data);
    },
    enabled: !!city,
  });
};

// 5. Lấy shop theo id
export const useShopById = (id: number | undefined) => {
  return useQuery<Shop>({
    queryKey: ["shopById", id],
    queryFn: async () => {
      if (!id) throw new Error("No shop id");
      const res = await axiosInstance.get(`/user/shops/${id}`);
      const shop = res.data as Shop;

      // thêm distance
      const pos = await getUserLocation();
      if (!pos) return { ...shop, distance: null };
      const { latitude, longitude } = pos.coords;
      const rawDist = calcDistance(latitude, longitude, shop.latitude, shop.longitude);
      return { ...shop, distance: Math.round(rawDist * 10) / 10 };
    },
    enabled: !!id,
  });
};