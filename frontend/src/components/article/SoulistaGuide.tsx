import React from "react";
import {
  FiMapPin,
  FiStar,
  FiShoppingBag,
  FiCreditCard,
  FiUsers,
  FiGift,
  FiGlobe,
  FiShield,
  FiTrendingUp,
  FiCalendar,
  FiAward,
} from "react-icons/fi";

export default function SoulistaGuide() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Header */}
        <header className="mb-8 space-y-2">
            <p className="text-sm text-gray-500">
            Soulista · Hướng dẫn sử dụng
            </p>
            <h1 className="text-4xl font-extrabold leading-tight">
            Soulista — Kết nối du khách và hương vị đặc sản
            </h1>
            <p className="text-lg text-gray-600">
            Soulista là nền tảng kết nối khách du lịch với những nhà hàng đặc sản và
            cửa hàng lưu niệm chính gốc, chất lượng cao. Ứng dụng được thiết kế để
            giúp bạn tiết kiệm thời gian tìm kiếm, tăng độ tin cậy khi lựa chọn và
            nâng cao trải nghiệm du lịch.
        </p>
            <p className="text-sm text-gray-600">
            Bài viết bởi <strong>Admin thân thiện dễ thương</strong> — 06/08/2025
            </p>
        </header>

      {/* Phần 1: Người mua */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          1. Dành cho <span className="text-blue-500">Người mua</span> (Khách du lịch)
        </h2>
        <p className="mb-4">
          Soulista đặc biệt hữu ích cho khách du lịch trong và ngoài nước, nhất là
          giới trẻ (18-24 tuổi), những người chưa có nhiều kinh nghiệm chọn chỗ
          ăn uống và mua sắm khi đi du lịch.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiMapPin className="text-blue-500 mt-1 mr-2" />
            <span>
              <strong>Tìm kiếm nhanh</strong> nhà hàng & cửa hàng lưu niệm uy tín
              dựa trên vị trí hiện tại hoặc điểm đến.
            </span>
          </li>
          <li className="flex items-start">
            <FiStar className="text-yellow-500 mt-1 mr-2" />
            <span>
              <strong>Khám phá đặc sản</strong> kèm ý nghĩa, lịch sử và câu chuyện văn hoá liên quan.
            </span>
          </li>
          <li className="flex items-start">
            <FiMapPin className="text-blue-500 mt-1 mr-2" />
            <span>
              <strong>Chỉ đường</strong> trực tiếp bằng Google Maps để đến địa điểm mong muốn.
            </span>
          </li>
          <li className="flex items-start">
            <FiGift className="text-pink-500 mt-1 mr-2" />
            <span>
              <strong>Săn voucher & tích điểm</strong> khi thanh toán bằng QR code.
            </span>
          </li>
        </ul>

        {/* Các bước sử dụng */}
        <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
          Các bước sử dụng cho Người mua:
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Mở ứng dụng hoặc website Soulista.</li>
          <li>Cho phép định vị hoặc nhập điểm đến du lịch.</li>
          <li>Xem danh sách gợi ý kèm hình ảnh, giá và đánh giá.</li>
          <li>Chọn địa điểm → Xem thông tin chi tiết & bản đồ.</li>
          <li>Nhấn <strong>“Chỉ đường”</strong> hoặc <strong>“Thanh toán QR”</strong>.</li>
          <li>Đánh giá và chia sẻ trải nghiệm sau chuyến đi.</li>
        </ol>
      </section>

      {/* Phần 2: Người bán */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          2. Dành cho <span className="text-green-500">Người bán</span> (Nhà hàng, cửa hàng lưu niệm)
        </h2>
        <p className="mb-4">
          Soulista đóng vai trò là một sàn giới thiệu giúp các nhà hàng và cửa
          hàng lưu niệm quảng bá sản phẩm & thương hiệu tới khách du lịch.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiUsers className="text-purple-500 mt-1 mr-2" />
            <span>
              Tăng độ tin cậy và tiếp cận khách du lịch thông qua hệ thống xếp hạng uy tín.
            </span>
          </li>
          <li className="flex items-start">
            <FiTrendingUp className="text-green-500 mt-1 mr-2" />
            <span>
              Đăng thông tin sản phẩm, hình ảnh, giá và địa chỉ để khách dễ dàng tìm thấy.
            </span>
          </li>
          <li className="flex items-start">
            <FiAward className="text-yellow-500 mt-1 mr-2" />
            <span>
              Tham gia bảng xếp hạng tuần – tháng, ưu tiên hiển thị trên trang chủ.
            </span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
          Các bước sử dụng cho Người bán:
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Đăng ký tài khoản Người bán trên Soulista.</li>
          <li>Xác minh thông tin để đảm bảo uy tín.</li>
          <li>Tạo gian hàng, đăng sản phẩm & giá tham khảo.</li>
          <li>Tham gia các chương trình khuyến mãi để thu hút khách.</li>
          <li>Theo dõi đánh giá và phản hồi của khách hàng.</li>
        </ol>
      </section>

      {/* Phần 3: Tính năng nổi bật */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          3. Tính năng nổi bật
        </h2>
        <ul className="space-y-3">
          <li>
            <FiGift className="inline-block text-pink-500 mr-2" />
            Chatbot gợi ý thông minh dựa trên vị trí & sở thích.
          </li>
          <li>
            <FiMapPin className="inline-block text-blue-500 mr-2" />
            Bản đồ & chỉ đường tích hợp Google Maps.
          </li>
          <li>
            <FiCreditCard className="inline-block text-green-500 mr-2" />
            Thanh toán QR code, áp voucher & tích điểm.
          </li>
          <li>
            <FiShield className="inline-block text-gray-500 mr-2" />
            Xác minh thông tin người bán & cơ chế báo cáo nhanh.
          </li>
        </ul>
      </section>

      {/* Phần 4: Lợi ích & Mục tiêu */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          4. Lợi ích & Mục tiêu
        </h2>
        <p>
          Soulista không chỉ là một ứng dụng tìm kiếm địa điểm, mà là một cộng đồng
          giúp bạn trải nghiệm du lịch tốt hơn:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Tiết kiệm thời gian tìm kiếm.</li>
          <li>Tăng độ tin cậy khi chọn mua hàng & ăn uống.</li>
          <li>Hạn chế rủi ro mua phải hàng giả hoặc dịch vụ kém chất lượng.</li>
          <li>Trải nghiệm liền mạch từ tìm kiếm đến thanh toán.</li>
        </ul>
      </section>

      {/* Phần 5: Chính sách khuyến mãi */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          5. Chính sách khuyến mãi & giữ chân khách hàng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Người mua */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              🎁 Người mua
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Voucher chào mừng người mới.</li>
              <li>Thưởng giới thiệu bạn bè.</li>
              <li>Điểm danh & minigame hàng ngày.</li>
              <li>Khuyến mãi theo mùa lễ & mùa du lịch.</li>
              <li>Hệ thống hạng thành viên với quyền lợi tăng dần.</li>
            </ul>
          </div>

          {/* Người bán */}
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-green-500">
              🏆 Người bán
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Xếp hạng uy tín dựa trên đánh giá & lượt thích.</li>
              <li>Bảng xếp hạng tuần – tháng.</li>
              <li>Voucher quảng bá cho cửa hàng mới.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
