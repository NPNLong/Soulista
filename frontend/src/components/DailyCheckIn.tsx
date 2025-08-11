import { useState, useEffect } from "react";
import { FiSun, FiCheckCircle } from "react-icons/fi";
import { useCheckin } from "../hooks/user_hooks"; // giả sử hook bạn đã có
import clsx from "clsx";

function getRankClass(rank: string | null) {
  switch (rank?.toLowerCase()) {
    case "đồng":
      return "text-yellow-700";
    case "bạc":
      return "text-gray-400";
    case "vàng":
      return "text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.8)] animate-glow-1";
    case "bạch kim":
      // Màu sáng hơn, ánh bạc xanh nhẹ, glow rõ ràng hơn
      return "text-white drop-shadow-[0_0_6px_rgba(192,192,255,0.9)] animate-glow-2";
    case "kim cương":
      return "text-indigo-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.9)] animate-glow-3";
    default:
      return "text-gray-500";
  }
}

function getRankBoxClass(rank: string | null) {
  switch (rank?.toLowerCase()) {
    case "bạch kim":
      return "border-blue-300 animate-glow-platinum rounded-xl";
    case "kim cương":
      return "border-indigo-400 animate-glow-diamond rounded-xl";
    default:
      return "border-gray-300 shadow rounded-xl";
  }
}

export default function DailyCheckIn() {
  const checkinMutation = useCheckin();

  // trạng thái điểm danh
  const [checkedIn, setCheckedIn] = useState(false);
  // điểm và hạng lấy từ localStorage user
  const [points, setPoints] = useState(0);
  const [rank, setRank] = useState("");

  useEffect(() => {
    // Load info user từ localStorage khi component mount
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      // user.member_rank = "Kim cương"
      setPoints(user.points || 0);
      setRank(user.member_rank || "");
      // Giả sử user có field "checkedInToday" để biết đã điểm danh hôm nay hay chưa
      setCheckedIn(user.checked_in_today || false);
    }
  }, []);

  const handleCheckIn = () => {
    if (checkinMutation.isPending) return; // tránh click nhiều lần
    checkinMutation.mutate(undefined, {
      onSuccess: (data) => {
        // Cập nhật lại user mới từ response
        const user = data.user;
        localStorage.setItem("user", JSON.stringify(user));
        setPoints(user.points || 0);
        setRank(user.member_rank || "");
        setCheckedIn(true);
      },
      onError: (err) => {
        alert("Điểm danh thất bại, vui lòng thử lại!");
      },
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
      {/* Box chào ngày mới (50%) */}
      <div className="md:col-span-2 bg-blue-100 p-4 rounded-xl shadow flex items-center space-x-4">
        {/* Icon bên trái */}
        <div className="text-blue-500 text-4xl flex-shrink-0">
          {checkedIn ? <FiCheckCircle /> : <FiSun />}
        </div>

        {/* Nội dung */}
        {!checkedIn ? (
          <div className="flex justify-between items-center w-full">
            <div>
              <h2 className="text-xl font-bold">Chào ngày mới!</h2>
              <p className="text-gray-700 text-sm">Nhớ điểm danh để tích điểm nhé!</p>
            </div>
            <button
              onClick={handleCheckIn}
              disabled={checkinMutation.isPending}
              className={clsx(
                "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-transform cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {checkinMutation.isPending ? "Đang điểm danh..." : "Điểm danh"}
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-1">Bạn đã điểm danh hôm nay rồi!</h2>
            <p className="text-gray-700 text-sm">Hẹn gặp lại ngày mai nhé!</p>
          </div>
        )}
      </div>

      {/* Box điểm hiện tại (25%) */}
      <div className="bg-white border rounded-xl shadow flex flex-col justify-center items-center p-4">
        <h3 className="text-lg font-semibold">Điểm hiện tại</h3>
        <p className="text-2xl font-bold text-blue-600">{points}</p>
      </div>

      {/* Box hạng thành viên (25%) */}
      <div className={`bg-white border rounded-xl flex flex-col justify-center items-center p-4 ${getRankBoxClass(rank)}`}>
        <h3 className="text-lg font-semibold">Hạng thành viên</h3>
        <p className={`text-xl font-bold ${getRankClass(rank)}`}>
          {rank || "Chưa xếp hạng"}
        </p>
      </div>

    </div>
  );
}
