import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

// --------- Types ---------
export interface Product {
  id: number;
  shop_id: number;
  shop_name?: string;
  city?: string;
  name: string;
  description: string;
  image_path: string;
  original_price: number;
  current_price: number;
}

// --------- API Calls ---------
const fetchProductsByShop = async (shopId: number): Promise<Product[]> => {
  const { data } = await axiosInstance.get(`/products/by-shop`, {
    params: { shop_id: shopId },
  });
  return data;
};

const searchProducts = async (search?: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get(`/products/search`, {
    params: search ? { search } : {},
  });
  return data;
};

// --------- Hooks ---------
export const useProductsByShop = (shopId: number) => {
  return useQuery<Product[]>({
    queryKey: ["products", "by-shop", shopId],
    queryFn: () => fetchProductsByShop(shopId),
    enabled: !!shopId,
  });
};

export const useSearchProducts = (search?: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", "search", search || ""],
    queryFn: () => searchProducts(search),
  });
};
