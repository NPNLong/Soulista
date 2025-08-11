import { useState } from "react";
import { useRegister } from "../hooks/user_hooks"; // nhớ sửa đúng hook
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const registerMutation = useRegister();
  const [form, setForm] = useState({
    username: "",
    password: "",
    fullname: "",
    birthday: "",
    gender: "",
    phone: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.username.trim() || !form.password.trim()) {
      setError("Vui lòng nhập tên đăng nhập và mật khẩu");
      return;
    }
    registerMutation.mutate(form, {
      onSuccess: () => {
        alert("Đăng ký thành công, vui lòng đăng nhập!");
        navigate("/login");
      },
      onError: (err: any) => {
        setError(err?.response?.data?.detail || "Đăng ký thất bại");
      },
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800"
    >
      <div
        className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-600
          p-10 animate-fadeIn text-blue-900"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center drop-shadow-md">
          Đăng ký
        </h2>

        {error && (
          <div
            className="mb-6 px-5 py-3 bg-red-100 text-red-900 rounded-lg border border-red-400 shadow-md"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="bg-white bg-opacity-60 placeholder:text-blue-700 placeholder:opacity-90 ring-2 ring-blue-700 border-blue-700 rounded-xl px-5 py-3
              border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700
              text-blue-900 text-lg transition"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="bg-white bg-opacity-60 placeholder:text-blue-700 placeholder:opacity-90 ring-2 ring-blue-700 border-blue-700 rounded-xl px-5 py-3
              border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700
              text-blue-900 text-lg transition"
            autoComplete="new-password"
          />
          <input
            type="text"
            placeholder="Họ tên"
            value={form.fullname}
            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
            className="bg-white bg-opacity-60 placeholder:text-blue-700 placeholder:opacity-90 ring-2 ring-blue-700 border-blue-700 rounded-xl px-5 py-3
              border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700
              text-blue-900 text-lg transition"
          />
          <input
            type="date"
            value={form.birthday}
            onChange={(e) => setForm({ ...form, birthday: e.target.value })}
            className="bg-white bg-opacity-60 placeholder:text-blue-700 placeholder:opacity-90 ring-2 ring-blue-700 border-blue-700 rounded-xl px-5 py-3
              border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700
              text-blue-900 text-lg transition"
          />
          <input
            type="text"
            placeholder="Giới tính"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            className="bg-white bg-opacity-60 placeholder:text-blue-700 placeholder:opacity-90 ring-2 ring-blue-700 border-blue-700 rounded-xl px-5 py-3
              border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700
              text-blue-900 text-lg transition"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-white bg-opacity-60 placeholder:text-blue-700 placeholder:opacity-90 ring-2 ring-blue-700 border-blue-700 rounded-xl px-5 py-3
              border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700
              text-blue-900 text-lg transition"
          />
          <button
            type="submit"
            disabled={registerMutation.isPending}
            className={`mt-4 py-3 rounded-xl font-bold text-xl
              transition-transform duration-300
              ${
                registerMutation.isPending
                  ? "bg-blue-400 cursor-not-allowed text-blue-900 shadow-inner"
                  : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-700/70 text-white cursor-pointer"
              }`}
          >
            {registerMutation.isPending ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>

        <p className="mt-8 text-center text-blue-900 text-lg">
          Đã có tài khoản?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-blue-700 font-semibold hover:underline"
          >
            Đăng nhập
          </span>
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
}
