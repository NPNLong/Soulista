import React from "react";
import {
  FiShield,
  FiUser,
  FiDatabase,
  FiShare2,
  FiClock,
  FiLock,
  FiTrash2,
  FiGlobe,
  FiMail,
  FiAlertCircle,
  FiCalendar
} from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="mb-8 space-y-2">
        <p className="text-sm text-gray-500">Soulista · Chính sách bảo mật</p>
        <h1 className="text-4xl font-extrabold leading-tight">
          Chính sách Bảo mật — Soulista
        </h1>
        <p className="text-lg text-gray-600">
          Chúng tôi tôn trọng quyền riêng tư của bạn. Tài liệu này mô tả cách
          Soulista thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của
          người dùng.
        </p>
        <p className="text-sm text-gray-600">
          Cập nhật lần cuối: <strong>06/08/2025</strong>
        </p>
      </header>

      {/* Tóm tắt ngắn */}
      <section className="mb-8 p-4 bg-gray-50 border rounded">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <FiShield className="mr-2 text-gray-700" /> Tóm tắt nhanh
        </h2>
        <p className="text-gray-700">
          Soulista thu thập một số thông tin cần thiết để cung cấp dịch vụ tốt
          nhất: thông tin tài khoản, vị trí (nếu bạn cho phép), lịch sử đặt
          chỗ, và hành vi sử dụng. Chúng tôi không bán dữ liệu cá nhân và có
          các biện pháp bảo mật để bảo vệ dữ liệu của bạn.
        </p>
      </section>

      {/* 1. Dữ liệu thu thập */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiDatabase className="mr-2 text-indigo-600" /> 1. Những loại dữ liệu chúng tôi thu thập
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Thông tin tài khoản:</strong> tên, email, số điện thoại (nếu có),
            ảnh đại diện (nếu bạn cung cấp).
          </li>
          <li>
            <strong>Vị trí:</strong> vị trí hiện tại hoặc điểm đến (nếu bạn bật
            chia sẻ vị trí) để gợi ý nhà hàng/quà tặng gần nhất.
          </li>
          <li>
            <strong>Giao dịch & voucher:</strong> lịch sử mua voucher, điểm tích lũy,
            thông tin thanh toán tóm tắt (không lưu trữ số thẻ trực tiếp trừ khi
            bạn sử dụng cổng thanh toán được mã hóa).
          </li>
          <li>
            <strong>Hành vi sử dụng:</strong> lịch sử tìm kiếm, lượt xem, đánh giá,
            tương tác với chatbot để cải thiện gợi ý.
          </li>
          <li>
            <strong>Thông tin do người bán cung cấp:</strong> mô tả cửa hàng, địa chỉ,
            ảnh, menu, giá tham khảo.
          </li>
        </ul>
      </section>

      {/* 2. Mục đích sử dụng dữ liệu */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiShare2 className="mr-2 text-rose-600" /> 2. Mục đích sử dụng
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            Cung cấp và vận hành dịch vụ: gợi ý địa điểm, bản đồ, điều hướng,
            quản lý voucher và thanh toán.
          </li>
          <li>
            Cá nhân hoá trải nghiệm: gợi ý theo sở thích, vị trí, lịch sử tìm
            kiếm để kết quả phù hợp hơn.
          </li>
          <li>
            Hỗ trợ khách hàng: xử lý khiếu nại, hỗ trợ giao dịch và phát hành
            hoàn tiền (nếu cần).
          </li>
          <li>
            Phân tích & cải tiến: phân tích hành vi để tối ưu sản phẩm và chatbot.
          </li>
          <li>
            Tuân thủ pháp luật & an ninh: lưu trữ và cung cấp dữ liệu khi được yêu
            cầu bởi cơ quan có thẩm quyền.
          </li>
        </ol>
      </section>

      {/* 3. Chia sẻ dữ liệu */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiGlobe className="mr-2 text-blue-600" /> 3. Chia sẻ & chuyển giao dữ liệu
        </h2>

        <p className="text-gray-700 mb-3">
          Soulista cam kết không bán dữ liệu cá nhân. Tuy nhiên, trong một số
          trường hợp chúng tôi có thể chia sẻ dữ liệu:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Với bên thứ ba cung cấp dịch vụ kĩ thuật:</strong> nhà cung cấp
            hosting, cổng thanh toán, dịch vụ gửi email — chỉ khi cần để cung cấp
            dịch vụ.
          </li>
          <li>
            <strong>Với đối tác vận chuyển/nhà hàng:</strong> để xử lý đơn hàng hoặc
            thực hiện voucher (chỉ phần thông tin cần thiết).
          </li>
          <li>
            <strong>Theo yêu cầu pháp luật:</strong> khi có trát/ yêu cầu hợp pháp từ
            cơ quan chức năng.
          </li>
        </ul>
      </section>

      {/* 4. Cookies & công nghệ theo dõi */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiClock className="mr-2 text-yellow-600" /> 4. Cookies & công nghệ theo dõi
        </h2>

        <p className="text-gray-700">
          Chúng tôi sử dụng cookies và công nghệ tương tự (localStorage, web
          beacon) để:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
          <li>Ghi nhớ phiên đăng nhập và cài đặt người dùng.</li>
          <li>Phân tích hành vi (ví dụ: Google Analytics hoặc dịch vụ tương tự).</li>
          <li>Tối ưu trải nghiệm, hiển thị nội dung phù hợp.</li>
        </ul>
        <p className="text-sm text-gray-600 mt-3">
          Bạn có thể tắt cookies trong trình duyệt, tuy nhiên một số tính năng
          có thể không hoạt động đầy đủ.
        </p>
      </section>

      {/* 5. Bảo mật dữ liệu */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiLock className="mr-2 text-gray-700" /> 5. Bảo mật và lưu trữ
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Dữ liệu được lưu trữ trên hạ tầng được mã hoá; kết nối sử dụng HTTPS.
          </li>
          <li>
            Quyền truy cập nội bộ bị giới hạn theo vai trò — chỉ nhân viên có
            nhiệm vụ mới được phép tiếp cận dữ liệu cần thiết.
          </li>
          <li>
            Chúng tôi thực hiện các đánh giá, kiểm tra và cập nhật bảo mật định
            kỳ để giảm thiểu rủi ro.
          </li>
        </ul>
      </section>

      {/* 6. Lưu trữ & xóa dữ liệu */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiTrash2 className="mr-2 text-red-500" /> 6. Thời gian lưu trữ và xóa dữ liệu
        </h2>

        <p className="text-gray-700 mb-3">
          Chúng tôi lưu giữ dữ liệu trong khoảng thời gian cần thiết để thực
          hiện mục đích thu thập, tuân thủ pháp luật hoặc để giải quyết tranh
          chấp. Khi không còn cần thiết, dữ liệu sẽ được xóa hoặc ẩn danh hoá.
        </p>

        <p className="text-sm text-gray-600">
          Người dùng có thể yêu cầu xóa tài khoản — quy trình xóa có thể mất một
          khoảng thời gian để xử lý và một số thông tin cần thiết liên quan đến giao dịch
          có thể được lưu trữ theo quy định pháp luật.
        </p>
      </section>

      {/* 7. Quyền người dùng */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiUser className="mr-2 text-indigo-600" /> 7. Quyền của bạn
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Truy cập: yêu cầu bản sao dữ liệu cá nhân của bạn.</li>
          <li>Sửa đổi: yêu cầu chỉnh sửa thông tin không chính xác.</li>
          <li>Xóa: yêu cầu xóa (với giới hạn theo luật định).</li>
          <li>Hạn chế xử lý hoặc phản đối: trong trường hợp bạn không đồng ý với
            cách chúng tôi sử dụng dữ liệu.</li>
          <li>Rút đồng ý: nếu bạn đã đồng ý chia sẻ vị trí hoặc nhận marketing, bạn
            có thể rút lại đồng ý đó.</li>
        </ul>
      </section>

      {/* 8. Truyền dữ liệu quốc tế */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiGlobe className="mr-2 text-blue-600" /> 8. Truyền dữ liệu quốc tế
        </h2>

        <p className="text-gray-700">
          Một số dịch vụ hỗ trợ có thể đặt máy chủ ở nước khác. Khi chuyển
          dữ liệu ra ngoài lãnh thổ, chúng tôi thực hiện biện pháp phù hợp để bảo
          đảm mức độ bảo vệ tương đương theo pháp luật áp dụng.
        </p>
      </section>

      {/* 9. Trẻ em */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiAlertCircle className="mr-2 text-red-500" /> 9. Chính sách dành cho trẻ em
        </h2>

        <p className="text-gray-700">
          Dịch vụ không dành cho trẻ em dưới 13 tuổi (hoặc độ tuổi theo quy định
          địa phương). Nếu phát hiện tài khoản thuộc trẻ em dưới độ tuổi pháp
          lý, chúng tôi sẽ yêu cầu xóa hoặc xin sự đồng ý từ người giám hộ.
        </p>
      </section>

      {/* 10. Thay đổi chính sách */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiCalendar className="mr-2 text-green-600" /> 10. Thay đổi chính sách
        </h2>

        <p className="text-gray-700">
          Soulista có thể cập nhật chính sách này theo thời gian. Mọi thay đổi
          trọng yếu sẽ được thông báo qua ứng dụng, email hoặc thông báo công
          khai trên website. Vui lòng kiểm tra thường xuyên để cập nhật.
        </p>
      </section>

      {/* Liên hệ */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 flex items-center text-gray-700">
          <FiMail className="mr-2 text-blue-500" /> Liên hệ & Khiếu nại
        </h2>

        <p className="text-gray-700 mb-3">
          Nếu bạn có yêu cầu quyền riêng tư, khiếu nại hoặc cần hỗ trợ về dữ
          liệu cá nhân, vui lòng liên hệ:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Email: <a href="mailto:privacy@soulista.vn" className="text-blue-500 hover:underline">privacy@soulista.vn</a></li>
          <li>Địa chỉ hỗ trợ: Trung tâm hỗ trợ khách hàng Soulista (thông tin trên trang liên hệ).</li>
        </ul>

        <p className="text-sm text-gray-600 mt-4">
          Cảm ơn bạn đã tin tưởng Soulista. Chúng tôi cam kết bảo vệ quyền riêng
          tư và đảm bảo trải nghiệm an toàn cho mọi người dùng.
        </p>
      </section>
    </div>
  );
}
