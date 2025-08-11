import { useEffect } from "react";
import VoucherCard from "../components/VoucherCard";

export default function VoucherPage() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allVouchers = [
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
    {
      title: "Giảm 10k",
      description: "Áp dụng lần thanh toán đầu tiên trong tháng.",
      store: "Toàn bộ",
      expiry: "HSD: 30/09/2025",
      isSaved: true,
      cost: null,
      purchased: true,
    },
    {
      title: "Giảm 15% toàn bộ quà tặng",
      description: "Tối đa 50k",
      store: "Cửa Hàng Lưu Niệm Hạ Long Pearl",
      expiry: "HSD: 05/09/2025",
      isSaved: false,
      cost: 30000,
      purchased: false,
    },
    {
      title: "Mua bộ Ấm trà gốm Bát Tràng tặng 1 cốc sứ",
      description: "Đầu tháng 10",
      store: "Cửa Hàng Gốm Sứ Hải Phòng",
      expiry: "HSD: 20/10/2025",
      isSaved: false,
      cost: 199000,
      purchased: false,
    },
    {
      title: "Voucher 200k cho đơn từ 1 triệu",
      description: "Áp dụng cho thành viên kim cương",
      store: "Toàn bộ",
      expiry: "HSD: 30/11/2025",
      isSaved: false,
      cost: 100000,
      purchased: false,
    },
  ];

  const ownedVouchers = allVouchers.filter(v => v.purchased || v.isSaved);
  const availableVouchers = allVouchers.filter(v => !v.purchased && !v.isSaved);

  return (
    <div className="p-6 space-y-10 pt-30 container mx-auto px-4">
      {/* Phần Voucher của bạn */}
      <div>
        <h2 className="text-2xl font-bold mb-4">🎁 Voucher của bạn</h2>
        {ownedVouchers.length === 0 ? (
          <p className="text-gray-500">Bạn chưa lưu hoặc mua voucher nào.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ownedVouchers.map((v, i) => (
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
        )}
      </div>

      {/* Phần Voucher hiện có */}
      <div>
        <h2 className="text-2xl font-bold mb-4">🔥 Voucher hiện có</h2>
        {availableVouchers.length === 0 ? (
          <p className="text-gray-500">Hiện không có ưu đãi nào mới.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {availableVouchers.map((v, i) => (
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
        )}
      </div>
    </div>
  );
}
