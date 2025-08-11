// hooks/userHooks.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import axiosInstance from "../axiosInstance";
import { AuthContext } from "../AuthContext";

export interface User {
  id: number;
  username: string;
  fullname?: string;
  birthday?: string;
  gender?: string;
  phone?: string;
  points: number;
  member_rank?: string;
  checked_in_today: boolean;
}

// 1. Đăng ký
export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: {
      username: string;
      password: string;
      fullname?: string;
      birthday?: string;
      gender?: string;
      phone?: string;
    }) => {
      const params = new URLSearchParams(data as any).toString();
      const res = await axiosInstance.post(`/user/register?${params}`);
      return res.data;
    },
  });
};

// 2. Đăng nhập
export const useLogin = () => {
  const { setUser } = useContext(AuthContext);

  return useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      const params = new URLSearchParams(data as any).toString();
      const res = await axiosInstance.post(`/user/login?${params}`);

      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
      }
      return res.data;
    },
  });
};

// 3. Lấy profile từ localStorage (không cần gọi API nếu không có token)
export const useUserProfile = () => {
  return useQuery<User>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const userStr = localStorage.getItem("user");
      if (!userStr) throw new Error("No user in local storage");
      return JSON.parse(userStr);
    },
  });
};

// 4. Điểm danh
export const useCheckin = () => {
  return useMutation({
    mutationFn: async () => {
      const userStr = localStorage.getItem("user");
      if (!userStr) throw new Error("User not found in localStorage");
      const { id } = JSON.parse(userStr);
      const res = await axiosInstance.post(`/user/checkin?user_id=${id}`);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // update local
      return res.data;
    },
  });
};

// 5. Mua voucher
export const useBuyVoucher = () => {
  return useMutation({
    mutationFn: async (cost: number) => {
      const userStr = localStorage.getItem("user");
      if (!userStr) throw new Error("User not found in localStorage");
      const { id } = JSON.parse(userStr);
      const res = await axiosInstance.post(`/user/buy-voucher?user_id=${id}&cost=${cost}`);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // update local
      return res.data;
    },
  });
};
