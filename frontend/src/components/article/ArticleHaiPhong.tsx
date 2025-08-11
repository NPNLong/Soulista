import React from "react";

export default function ArticleHaiPhong() {
  return (
    <main className="prose prose-lg prose-slate mx-auto py-12 px-4 sm:px-6 lg:px-8 leading-relaxed">
      <article className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <header className="mb-8 space-y-2">
          <p className="text-sm text-gray-500">Du lịch & Ẩm thực · Hải Phòng</p>
          <h1 className="text-4xl font-extrabold leading-tight">
            Khám phá ẩm thực Hải Phòng — Hương vị của thành phố hoa phượng đỏ
          </h1>
          <p className="text-sm text-gray-600">
            Bài viết bởi <strong>Nguyễn Long</strong> — 06/08/2025
          </p>
        </header>

        {/* Intro */}
        <section className="space-y-6">
          <p>
            Hải Phòng — thành phố hoa phượng đỏ — không chỉ được biết đến với những
            cung đường biển rì rào, bãi cát vàng như Cát Bà hay Đồ Sơn, mà còn là
            một điểm đến ẩm thực giàu bản sắc. Ẩm thực Hải Phòng mang trong mình
            nét phóng khoáng của người miền biển, sự mộc mạc trong cách chế biến
            nhưng lại tinh tế ở hương vị, khiến bất cứ ai một lần nếm thử đều
            khó quên.
          </p>

          {/* Bánh đa cua */}
          <h2>Bánh đa cua — Linh hồn ẩm thực Hải Phòng</h2>
          <p>
            Khi nghĩ về Hải Phòng, nhiều người nhớ ngay đến{" "}
            <strong>bánh đa cua</strong> — món ăn đã trở thành biểu tượng của
            thành phố. Sợi bánh đa đỏ, dày và dai, được làm từ gạo xay mịn pha
            cùng chút nước vôi trong để giữ độ giòn. Nước dùng được ninh từ cua
            đồng tươi, có vị ngọt thanh và mùi gạch cua béo ngậy. Một bát bánh
            đa cua chuẩn vị thường có:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sợi bánh đa</strong> dày, dai, thơm mùi gạo rang nhẹ.
            </li>
            <li>
              <strong>Nước dùng</strong> trong, ngọt thanh, dậy hương cua đồng.
            </li>
            <li>
              <strong>Topping</strong> phong phú: chả lá lốt, tôm nõn, giò tai,
              thịt bò, rau muống chẻ, rau rút.
            </li>
          </ul>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “Không cần tô cầu kỳ — chỉ cần một bát bánh đa cua nóng hổi vào sáng
            sớm, bạn sẽ thấy cả Hải Phòng nằm gọn trong hương vị.”
          </blockquote>

          {/* Nem cua bể */}
          <h2>Nem cua bể — Giòn rụm, đậm đà</h2>
          <p>
            Nếu Hà Nội nổi tiếng với nem rán thì Hải Phòng lại có{" "}
            <strong>nem cua bể</strong> vuông vức, gói trong lớp bánh đa nem mỏng,
            chiên vàng óng. Nhân nem đầy đặn gồm cua bể tươi, tôm, thịt nạc, giá,
            miến, mộc nhĩ… hòa quyện tạo nên vị ngọt thanh xen chút béo bùi. Ăn
            nem cua bể không thể thiếu chén nước chấm pha chua ngọt, điểm thêm vài
            lát ớt đỏ để tròn vị.
          </p>

          {/* Bánh mì cay */}
          <h2>Bánh mì cay & món ăn đường phố</h2>
          <p>
            Trên các con phố Lê Lợi, Đinh Tiên Hoàng, bạn sẽ bắt gặp những hàng{" "}
            <strong>bánh mì cay</strong> nhỏ nhưng lúc nào cũng đông khách. Ổ bánh
            nhỏ bằng bàn tay, kẹp chút pate gan béo ngậy, quết tương ớt đặc trưng
            Hải Phòng — thứ tương sền sệt, cay nồng và thơm mùi tỏi. Đây là món ăn
            vặt lý tưởng cho những buổi chiều lang thang phố.
          </p>

          {/* Món lạ */}
          <h3>Những món lạ nhưng đáng thử</h3>
          <p>
            Ngoài hải sản và các món từ cua, Hải Phòng còn sở hữu nhiều món ăn
            “lạ” khiến du khách tò mò: bún cá cay, giá bể xào, bánh bèo tôm chấy,
            hay lẩu cua đồng hải sản. Mỗi món lại mang một sắc thái riêng, phản
            ánh sự sáng tạo của người dân nơi đây.
          </p>

          {/* Ẩm thực như văn hóa */}
          <h2>Ẩm thực — Một trải nghiệm văn hóa</h2>
          <p>
            Ẩm thực Hải Phòng không chỉ là chuyện ăn uống, mà còn là một phần văn
            hóa sống. Ngồi bên quán vỉa hè, nghe tiếng rao “ai bánh đa cua không”,
            nhìn dòng người tấp nập qua lại, bạn sẽ cảm nhận được nhịp sống
            vừa bình yên vừa rộn ràng của thành phố cảng.
          </p>

          {/* Mẹo */}
          <h3>Mẹo thưởng thức khi đến Hải Phòng</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Đến sớm</strong> — nhiều quán nổi tiếng nhanh hết đồ vào
              buổi trưa.
            </li>
            <li>
              <strong>Thử nước chấm</strong> — mỗi quán có bí quyết riêng, quyết
              định 50% độ ngon của món.
            </li>
            <li>
              <strong>Ăn combo</strong> — gọi 2-3 món đặc sản để trải nghiệm
              trọn vẹn.
            </li>
            <li>
              <strong>Trò chuyện với chủ quán</strong> — bạn sẽ được nghe những
              câu chuyện thú vị về món ăn và thành phố.
            </li>
          </ul>

          {/* Kết */}
          <h2>Kết — Lời mời dành cho thực khách</h2>
          <p>
            Hải Phòng là thành phố của cả biển và món ăn. Mỗi món đặc sản nơi đây
            là một phần hồn của vùng đất, được truyền qua nhiều thế hệ. Nếu có dịp
            đặt chân đến thành phố hoa phượng đỏ, hãy dành thời gian để thưởng
            thức, cảm nhận và mang về cho mình không chỉ là hương vị, mà còn là
            ký ức đẹp đẽ về một miền đất mến khách.
          </p>

          {/* Footer */}
          <footer className="mt-6 text-sm text-gray-600">
            Chú thích: Bài viết mang tính giới thiệu trải nghiệm ẩm thực, dựa trên
            quan sát và cảm nhận cá nhân của tác giả.
          </footer>
        </section>
      </article>
    </main>
  );
}
