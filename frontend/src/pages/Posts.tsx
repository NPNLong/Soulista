import PostCard from "../components/PostCard";
import { useEffect } from "react";

const posts = [
  {
    id: 1,
    title: "Khám phá ẩm thực Hải Phòng",
    description:
      "Hải Phòng không chỉ nổi tiếng với cảnh đẹp mà còn hấp dẫn với nền ẩm thực đa dạng...",
    image: "/images/product/56/1.jpg",
    date: "06/08/2025",
    author: "Nguyễn Long",
  },
  {
    id: 2,
    title: "Hướng dẫn sử dụng Soulista",
    description:
      "Soulista là trợ lý gợi ý quà lưu niệm và đặc sản địa phương. Bài viết này giúp bạn nắm vững cách tìm kiếm quán ăn, đặt quà và nhận gợi ý nhanh chóng...",
    image: "/images/Logo.png",
    date: "06/08/2025",
    author: "Admin thân thiện dễ thương",
  },
  {
    id: 3,
    title: "Về chúng tôi",
    description:
      "Soulista ra đời với sứ mệnh kết nối du khách với những trải nghiệm địa phương độc đáo và những món quà ý nghĩa trên khắp Việt Nam...",
    image: "/images/Logo.png",
    date: "06/08/2025",
    author: "Soulista Team",
  },
  {
    id: 4,
    title: "Điều khoản sử dụng",
    description:
      "Khi sử dụng Soulista, bạn đồng ý với các điều khoản sau. Vui lòng đọc kỹ để hiểu rõ quyền lợi và trách nhiệm của bạn...",
    image: "/images/Logo.png",
    date: "06/08/2025",
    author: "Soulista Team",
  },
  {
    id: 5,
    title: "Chính sách bảo mật",
    description:
      "Soulista cam kết bảo vệ quyền riêng tư của bạn. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo mật thông tin cá nhân...",
    image: "/images/Logo.png",
    date: "06/08/2025",
    author: "Soulista Team",
  },
  {
    id: 6,
    title: "Câu hỏi thường gặp (FAQ)",
    description:
      "Bạn có thắc mắc về cách đặt quà, tìm kiếm địa điểm hay tích điểm? Xem ngay các câu hỏi thường gặp để được giải đáp nhanh chóng...",
    image: "/images/Logo.png",
    date: "06/08/2025",
    author: "Soulista Team",
  },
];

export default function PostsPage() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-50 pt-28 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Bài viết mới nhất
          </h1>

          <div className="text-justify grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
