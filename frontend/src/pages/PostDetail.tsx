import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiArrowLeft } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ArticleHaiPhong from "../components/article/ArticleHaiPhong";
import SoulistaGuide from "../components/article/SoulistaGuide";
import AboutUs from "../components/article/AboutUs";
import TermsOfUse from "../components/article/TermsOfUse";
import PrivacyPolicy from "../components/article/PrivacyPolicy";
import SoulistaFAQ from "../components/article/SoulistaFAQ";

// Giả lập bài viết (bình thường sẽ fetch từ API)
const posts = [
  {
    id: 1,
    title: "Khám phá ẩm thực Hải Phòng",
    content: <ArticleHaiPhong/>,
    image: "/images/product/56/1.jpg",
    date: "06/08/2025",
    author: "Nguyễn Long",
  },
  {
    id: 2,
    title: "Hướng dẫn sử dụng Soulista",
    content: <SoulistaGuide/>,
    image: "/images/Logo.png",
    date: "06/08/2025",
    author: "Admin thân thiện dễ thương",
  },
  {
    id: 3,
    title: "Hướng dẫn du lịch Hạ Long",
    content: <AboutUs/>,
    image: "/images/Logo.png",
    date: "25/07/2025",
    author: "Phạm Thảo",
  },
  {
    id: 4,
    content: <TermsOfUse/>,
    image: "/images/Logo.png",
  },
  {
    id: 5,
    content: <PrivacyPolicy/>,
    image: "/images/Logo.png",
  },
  {
    id: 6,
    content: <SoulistaFAQ/>,
    image: "/images/Logo.png",
  },
];

export default function PostDetailPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <div>Không tìm thấy bài viết</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-28 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Link
            to="/posts"
            className="flex items-center gap-2 text-blue-500 hover:underline mb-6"
          >
            <FiArrowLeft /> Quay lại danh sách
          </Link>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-72 object-cover rounded mb-6"
          />

          <div className="prose prose-lg max-w-none mx-auto prose-img:rounded-lg prose-img:shadow">
                {post.content}
          </div>
        </div>
      </main>
    </div>
  );
}
