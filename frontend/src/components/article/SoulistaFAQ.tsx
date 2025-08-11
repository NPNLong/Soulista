import React from "react";
import {
  FiHelpCircle,
  FiMapPin,
  FiCreditCard,
  FiShield,
  FiGift,
  FiUsers,
} from "react-icons/fi";

export default function SoulistaFAQ() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="mb-8 space-y-2">
        <p className="text-sm text-gray-500">Soulista · Câu hỏi thường gặp</p>
        <h1 className="text-4xl font-extrabold leading-tight">
          Giải đáp mọi thắc mắc khi sử dụng Soulista
        </h1>
        <p className="text-lg text-gray-600">
          Bạn mới biết đến Soulista hoặc đang tìm cách tận dụng tối đa tính năng?
          Dưới đây là những câu hỏi thường gặp cùng câu trả lời chi tiết để giúp
          bạn bắt đầu hành trình khám phá dễ dàng hơn.
        </p>
        <p className="text-sm text-gray-600">
          Bài viết bởi <strong>Admin thân thiện dễ thương</strong> — 06/08/2025
        </p>
      </header>

      {/* FAQ List */}
      <section className="space-y-8">
        {/* 1 */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-700 mb-3">
            <FiHelpCircle className="text-blue-500" /> 1. Soulista là gì?
          </h2>
          <p>
            Soulista là nền tảng kết nối du khách với các{" "}
            <strong>nhà hàng đặc sản</strong> và{" "}
            <strong>cửa hàng lưu niệm uy tín</strong>. Bạn có thể tìm kiếm, xem
            đánh giá, chỉ đường và thanh toán ngay trên ứng dụng hoặc website.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-700 mb-3">
            <FiMapPin className="text-green-500" /> 2. Làm sao để tìm địa điểm
            ăn uống hoặc mua sắm?
          </h2>
          <p>
            Chỉ cần mở Soulista, cho phép định vị hoặc nhập{" "}
            <strong>điểm đến</strong>, hệ thống sẽ gợi ý danh sách địa điểm kèm
            hình ảnh, giá và đánh giá từ người dùng khác.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-700 mb-3">
            <FiCreditCard className="text-purple-500" /> 3. Có thể thanh toán
            trên Soulista không?
          </h2>
          <p>
            Có. Soulista hỗ trợ{" "}
            <strong>thanh toán bằng QR code</strong> ngay tại cửa hàng, áp dụng
            voucher và tích điểm thưởng để nhận ưu đãi cho lần tiếp theo.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-700 mb-3">
            <FiShield className="text-gray-500" /> 4. Làm sao đảm bảo cửa hàng
            uy tín?
          </h2>
          <p>
            Mọi cửa hàng trên Soulista đều phải <strong>xác minh thông tin</strong>{" "}
            trước khi hiển thị. Bạn cũng có thể xem{" "}
            <strong>đánh giá và xếp hạng</strong> của cộng đồng để yên tâm lựa
            chọn.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-700 mb-3">
            <FiGift className="text-pink-500" /> 5. Soulista có chương trình ưu
            đãi gì?
          </h2>
          <p>
            Chúng tôi thường xuyên triển khai{" "}
            <strong>voucher, khuyến mãi theo mùa</strong>, minigame và tích điểm
            đổi quà để giúp trải nghiệm du lịch của bạn thú vị hơn.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-700 mb-3">
            <FiUsers className="text-orange-500" /> 6. Tôi có thể trở thành đối
            tác bán hàng trên Soulista không?
          </h2>
          <p>
            Hoàn toàn có thể. Bạn chỉ cần{" "}
            <strong>đăng ký tài khoản Người bán</strong>, xác minh thông tin và
            đăng sản phẩm/dịch vụ của mình để tiếp cận hàng nghìn khách du lịch
            mỗi ngày.
          </p>
        </div>
      </section>
    </div>
  );
}
