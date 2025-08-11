import { useState } from "react";
import { FiGift, FiStar, FiClock, FiEdit } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
import { useBuyVoucher } from "../hooks/user_hooks"; // import đúng đường dẫn

interface VoucherCardProps {
  title: string;
  store: string;
  expiry: string;
  description?: string;
  isSaved?: boolean;
  isPurchasable?: boolean;
  isPurchased?: boolean;
  cost?: number;
  onSave?: () => void;
  onBuy?: () => void;
}

export default function VoucherCard({
  title,
  store,
  expiry,
  description,
  isSaved = false,
  isPurchasable = false,
  isPurchased = false,
  cost,
  onSave,
  onBuy,
}: VoucherCardProps) {
  const [saved, setSaved] = useState(isSaved);
  const [purchased, setPurchased] = useState(isPurchased);

  const buyVoucherMutation = useBuyVoucher();

  let buttonContent;
  let buttonDisabled = false;

  const handleBuyClick = () => {
    if (cost === undefined) return;
    buyVoucherMutation.mutate(cost, {
      onSuccess: () => {
        setPurchased(true);
        onBuy?.();
      },
      onError: (error: any) => {
        alert("Mua voucher thất bại: " + error.message);
      },
    });
  };

  let handleClick = () => {};

  if (cost !== undefined) {
    if (purchased) {
      buttonContent = "Đã mua";
      buttonDisabled = true;
    } else if (buyVoucherMutation.isLoading) {
      buttonContent = "Đang mua...";
      buttonDisabled = true;
    } else {
      buttonContent = "Mua";
      handleClick = handleBuyClick;
    }
  } else {
    if (saved) {
      buttonContent = "Đã lưu";
      buttonDisabled = true;
    } else {
      buttonContent = "Lưu";
      handleClick = () => {
        setSaved(true);
        onSave?.();
      };
    }
  }

  return (
    <div
      className="relative flex h-50 shadow rounded-lg overflow-hidden 
                 transition-transform transform hover:-translate-y-2 
                 hover:shadow-2xl cursor-pointer"
    >
      {cost === undefined && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-bl">
          FREE
        </div>
      )}

      <div className="w-3/10 bg-red-500 flex flex-col items-center justify-center text-white text-center p-3">
        <FiGift className="text-3xl mb-2" />
        <span className="font-bold text-base leading-tight">
          Soulista
          <br />
          Voucher
        </span>
      </div>

      <div className="w-7/10 bg-white flex flex-col justify-between p-4 text-black">
        <div className="space-y-1">
          <p className="font-bold text-lg">{title}</p>

          <div className="flex items-center text-sm text-gray-700">
            <span>{store}</span>
          </div>

          {description && (
            <div className="flex items-center text-sm text-gray-600">
              <FiEdit className="mr-1" />
              <span>{description}</span>
            </div>
          )}

          <div className="flex items-center text-xs text-gray-500">
            <FiClock className="mr-1" />
            <span>{expiry}</span>
          </div>
        </div>

        <div className="flex justify-end items-center mt-2 space-x-3">
          {cost !== undefined && (
            <div className="flex items-center text-yellow-600 font-medium text-sm">
              <FaCoins className="mr-1" />
              <span>{cost}</span>
            </div>
          )}

          <button
            className={`flex items-center space-x-1 px-3 py-1 rounded text-sm transition
              ${buttonDisabled
                ? "bg-gray-300 text-gray-600 cursor-default"
                : "bg-red-500 text-white hover:bg-red-600 hover:scale-105 cursor-pointer"
              }`}
            disabled={buttonDisabled}
            onClick={handleClick}
          >
            {buttonContent}
          </button>
        </div>
      </div>
    </div>
  );
}
