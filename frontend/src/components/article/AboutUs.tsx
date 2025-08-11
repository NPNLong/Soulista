import React from "react";
import {
  FiGlobe,
  FiMapPin,
  FiUsers,
  FiAward,
  FiHeart,
  FiTrendingUp,
  FiShield,
  FiCalendar,
  FiStar,
} from "react-icons/fi";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="mb-8 space-y-2">
        <p className="text-sm text-gray-500">Soulista · Về chúng tôi</p>
        <h1 className="text-4xl font-extrabold leading-tight">
          Soulista — Cầu nối trải nghiệm du lịch và văn hoá
        </h1>
        <p className="text-lg text-gray-600">
          Chúng tôi tin rằng du lịch không chỉ là di chuyển, mà là hành trình kết
          nối con người, ẩm thực, và câu chuyện văn hoá của từng vùng đất.
        </p>
        <p className="text-sm text-gray-600">
          Bài viết bởi <strong>Admin</strong> — 06/08/2025
        </p>
      </header>

      {/* Sứ mệnh */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <FiGlobe className="text-blue-500" /> Sứ mệnh của chúng tôi
        </h2>
        <p>
          Soulista được xây dựng với mục tiêu tạo ra một nền tảng thông minh và
          đáng tin cậy, nơi du khách có thể tìm thấy những địa điểm ăn uống, mua
          sắm và trải nghiệm văn hoá chính gốc, đồng thời hỗ trợ các cơ sở kinh
          doanh địa phương phát triển.
        </p>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <FiStar className="text-yellow-500" /> Giá trị cốt lõi
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiUsers className="text-purple-500 mt-1 mr-2" />
            <span>Kết nối cộng đồng du khách và người dân địa phương.</span>
          </li>
          <li className="flex items-start">
            <FiHeart className="text-pink-500 mt-1 mr-2" />
            <span>Khuyến khích trải nghiệm du lịch có trách nhiệm & bền vững.</span>
          </li>
          <li className="flex items-start">
            <FiTrendingUp className="text-green-500 mt-1 mr-2" />
            <span>Hỗ trợ doanh nghiệp địa phương tăng trưởng và quảng bá.</span>
          </li>
          <li className="flex items-start">
            <FiShield className="text-gray-500 mt-1 mr-2" />
            <span>Đảm bảo uy tín, chất lượng dịch vụ thông qua cơ chế xác minh.</span>
          </li>
        </ul>
      </section>

      {/* Thành tựu */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <FiAward className="text-yellow-500" /> Thành tựu nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <p className="text-3xl font-bold text-blue-500">500+</p>
            <p className="text-gray-600">Đối tác nhà hàng & cửa hàng lưu niệm</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <p className="text-3xl font-bold text-green-500">10,000+</p>
            <p className="text-gray-600">Lượt tải ứng dụng</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm text-center">
            <p className="text-3xl font-bold text-pink-500">4.9/5</p>
            <p className="text-gray-600">Điểm đánh giá trung bình</p>
          </div>
        </div>
      </section>

      {/* Lời cam kết */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <FiCalendar className="text-red-500" /> Lời cam kết
        </h2>
        <p>
          Soulista sẽ không ngừng cải tiến để mang lại những trải nghiệm mượt mà,
          tiện lợi và giàu giá trị cho người dùng. Chúng tôi cam kết giữ vững các
          nguyên tắc minh bạch, bảo mật thông tin và đặt trải nghiệm của khách
          hàng làm trung tâm trong mọi hoạt động.
        </p>
      </section>
    </div>
  );
}
