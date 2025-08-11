import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import Home from "./pages/Home";
import Search from "./pages/Search";
import ChatBox from "./pages/Chatbot";
import Voucher from "./pages/Voucher";
import Ranking from "./pages/Ranking";
import PostsPage from "./pages/Posts";
import PostDetailPage from "./pages/PostDetail";
import ShopPage from "./pages/Shop";
import ComingSoon from "./pages/ComingSoon";
import Welcome from "./pages/Welcome";
import LoginPage from "./pages/Login";
import SignUp from "./pages/Signup";
import WelcomeSeller from "./pages/Seller";

export default function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {/* Trang chủ: nếu chưa login thì hiển thị Welcome */}
      <Route path="/" element={user ? <Home /> : <Welcome />} />

      <Route path="/seller" element={<WelcomeSeller />} />

      {/* Auth pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Các trang khác */}
      <Route path="/search" element={<Search />} />
      <Route path="/shop/:id" element={<ShopPage />} />
      <Route path="/ai" element={<ChatBox />} />
      <Route path="/voucher" element={<Voucher />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />

      {/* 404 fallback */}
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
}