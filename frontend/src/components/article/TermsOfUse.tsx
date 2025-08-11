import React from "react";
import {
  FiShield,
  FiUser,
  FiFileText,
  FiClock,
  FiGlobe,
  FiAlertTriangle,
  FiCheckCircle,
  FiLock,
  FiMail,
} from "react-icons/fi";

export default function TermsOfUse() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="mb-8 space-y-2">
        <p className="text-sm text-gray-500">
          Soulista · Điều khoản sử dụng
        </p>
        <h1 className="text-4xl font-extrabold leading-tight">
          Điều khoản sử dụng — Soulista
        </h1>
        <p className="text-lg text-gray-600">
          Cảm ơn bạn đã sử dụng Soulista! Vui lòng đọc kỹ điều khoản dưới đây
          trước khi tiếp tục sử dụng dịch vụ để đảm bảo quyền lợi và nghĩa vụ
          của bạn.
        </p>
        <p className="text-sm text-gray-600">
          Cập nhật lần cuối: <strong>06/08/2025</strong>
        </p>
      </header>

      {/* Mục lục */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mục lục</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Phạm vi áp dụng</li>
          <li>Quyền và nghĩa vụ của người dùng</li>
          <li>Quyền và nghĩa vụ của Soulista</li>
          <li>Bảo mật thông tin</li>
          <li>Hạn chế trách nhiệm</li>
          <li>Điều khoản chung</li>
        </ol>
      </section>

      {/* 1. Phạm vi áp dụng */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-semibold mb-4 text-gray-700">
          <FiGlobe className="text-blue-500 mr-2" /> 1. Phạm vi áp dụng
        </h2>
        <p>
          Điều khoản này áp dụng cho tất cả người dùng truy cập hoặc sử dụng
          nền tảng Soulista (bao gồm website và ứng dụng di động). Bằng việc sử
          dụng dịch vụ, bạn đồng ý tuân thủ toàn bộ điều khoản này.
        </p>
      </section>

      {/* 2. Quyền & nghĩa vụ của người dùng */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-semibold mb-4 text-gray-700">
          <FiUser className="text-green-500 mr-2" /> 2. Quyền và nghĩa vụ của người dùng
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Được truy cập, tìm kiếm và đặt dịch vụ qua Soulista.</li>
          <li>Cung cấp thông tin chính xác, không giả mạo khi đăng ký.</li>
          <li>Không đăng tải nội dung vi phạm pháp luật hoặc thuần phong mỹ tục.</li>
          <li>Chịu trách nhiệm với hành vi và thông tin cá nhân của mình.</li>
        </ul>
      </section>

      {/* 3. Quyền & nghĩa vụ của Soulista */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-semibold mb-4 text-gray-700">
          <FiFileText className="text-purple-500 mr-2" /> 3. Quyền và nghĩa vụ của Soulista
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Duy trì, nâng cấp hệ thống để đảm bảo trải nghiệm người dùng.</li>
          <li>Bảo vệ thông tin cá nhân của người dùng theo chính sách bảo mật.</li>
          <li>Ngừng cung cấp dịch vụ cho tài khoản vi phạm điều khoản.</li>
        </ul>
      </section>

      {/* 4. Bảo mật thông tin */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-semibold mb-4 text-gray-700">
          <FiLock className="text-gray-600 mr-2" /> 4. Bảo mật thông tin
        </h2>
        <p>
          Soulista cam kết không chia sẻ thông tin cá nhân của bạn cho bên thứ
          ba mà không có sự đồng ý, trừ trường hợp theo yêu cầu pháp luật.
        </p>
      </section>

      {/* 5. Hạn chế trách nhiệm */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-semibold mb-4 text-gray-700">
          <FiAlertTriangle className="text-red-500 mr-2" /> 5. Hạn chế trách nhiệm
        </h2>
        <p>
          Soulista không chịu trách nhiệm đối với thiệt hại phát sinh từ việc sử
          dụng thông tin, dịch vụ bởi bên thứ ba hoặc sự cố ngoài tầm kiểm soát.
        </p>
      </section>

      {/* 6. Điều khoản chung */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-semibold mb-4 text-gray-700">
          <FiCheckCircle className="text-green-600 mr-2" /> 6. Điều khoản chung
        </h2>
        <p>
          Soulista có quyền chỉnh sửa điều khoản sử dụng này bất kỳ lúc nào. Mọi
          thay đổi sẽ được cập nhật công khai trên website và/hoặc ứng dụng.
        </p>
      </section>

      {/* Liên hệ */}
      <section>
        <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-700">
          <FiMail className="text-blue-500 mr-2" /> Liên hệ
        </h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi nào về điều khoản này, vui lòng liên hệ qua
          email: <a href="mailto:support@soulista.vn" className="text-blue-500 hover:underline">support@soulista.vn</a>.
        </p>
      </section>
    </div>
  );
}
