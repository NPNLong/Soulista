import { Link } from "react-router-dom";
import VoucherCard from "./VoucherCard";

export default function HotDeals() {
  const vouchers = [
    {
      title: "Giảm 10% cho hoá đơn trên 500k",
      description: "Không áp dụng combo. Tối đa 60k",
      store: "Toàn bộ",
      expiry: "HSD: 31/08/2025",
      isSaved: false,
      cost: null,
      purchased: false,
    },
    {
      title: "Tặng quà may mắn trị giá 100k",
      description: "Áp dụng khi mua từ 3 sản phẩm trở lên.",
      store: "Cửa Hàng Quà Lưu Niệm Cảng Biển",
      expiry: "HSD: 15/09/2025",
      isSaved: true,
      cost: null,
      purchased: false,
    },
    {
      title: "Giảm 5% cho hoá đơn trên 200k",
      description: "Tối đa 15k",
      store: "Toàn bộ",
      expiry: "HSD: 01/10/2025",
      isSaved: false,
      cost: 20000,
      purchased: false,
    },
    {
      title: "Giảm 10% cho khách lần đầu",
      description: "Dành cho khách hàng chưa từng mua tại shop.",
      store: "Toàn bộ",
      expiry: "HSD: 30/08/2025",
      isSaved: false,
      cost: 10000,
      purchased: true,
    },
    {
      title: "Giảm 20%",
      description: "Tối đa 10k",
      store: "Toàn bộ",
      expiry: "HSD: 20/09/2025",
      isSaved: false,
      cost: 90000,
      purchased: false,
    },
    {
      title: "Giảm 10% khi đi 3 người",
      description: "Mỗi người phải ăn ít nhất 40k",
      store: "Phở Thìn Hà Nội",
      expiry: "HSD: 10/09/2025",
      isSaved: false,
      cost: 60000,
      purchased: false,
    },
  ];

  return (
    <div className="my-6">
      {/* Tiêu đề + nút xem thêm */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Ưu đãi hot</h2>
        <Link
          to="/voucher"
          className="border border-blue-500 text-blue-500 px-4 py-1 rounded 
                     hover:bg-blue-500 hover:text-white hover:shadow-md 
                     transition font-semibold"
        >
          Xem thêm
        </Link>
      </div>

      {/* Danh sách voucher */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {vouchers.map((v, i) => (
          <VoucherCard
            key={i}
            title={v.title}
            store={v.store}
            expiry={v.expiry}
            isSaved={v.isSaved}
            cost={v.cost ?? undefined}
            isPurchased={v.purchased ?? undefined}
            description={v.description}
          />
        ))}
      </div>
    </div>
  );
}
