import { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiGlobe } from "react-icons/fi";
import { AuthContext } from "../AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("VI");
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState<"shop" | "product">("shop");
  const [typeOpen, setTypeOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const userMenuRef = useRef<HTMLDivElement>(null);

  const shopSuggestions = ["Hạ Long", "Nhà hàng", "Hải Phòng", "Lưu niệm", "Hà Nội"];
  const productSuggestions = ["Bánh đa cua", "Nem cua bể", "Bún chả", "Gốm", "Ngọc trai", "Cua hoàng đế"];

  const handleSearch = (q?: string) => {
    const query = q ?? keyword;
    if (query.trim()) {
      navigate(`/search?type=${searchType}&q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate(`/search?type=${searchType}`);
    }
  };

  // Đóng menu user khi click ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuOpen]);

  const suggestions = searchType === "shop" ? shopSuggestions : productSuggestions;

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50 font-sans font-bold">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/Logo.png"
            alt="Soulista Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-2xl ml-2">SOULISTA</span>
        </Link>

        {/* Search Box */}
        <div className="flex-1 max-w-xl mx-4 relative">
          <div className="flex bg-white border border-gray-300 rounded overflow-hidden">
            {/* Type selector */}
            <div
              className="relative bg-gray-100 cursor-pointer select-none flex items-center px-3 border-r border-gray-300 text-sm font-semibold text-blue-700"
              onClick={() => setTypeOpen(!typeOpen)}
            >
              {searchType === "shop" ? "Cửa hàng" : "Sản phẩm"}
            </div>
            {typeOpen && (
              <div className="absolute top-full mt-1 bg-white border border-gray-300 rounded shadow w-28 z-10 text-black">
                <div
                  onClick={() => {
                    setSearchType("shop");
                    setTypeOpen(false);
                  }}
                  className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Cửa hàng
                </div>
                <div
                  onClick={() => {
                    setSearchType("product");
                    setTypeOpen(false);
                  }}
                  className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Sản phẩm
                </div>
              </div>
            )}

            {/* Input */}
            <input
              type="text"
              placeholder={searchType === "shop" ? "Tìm kiếm cửa hàng..." : "Tìm kiếm sản phẩm..."}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 p-2 text-black focus:outline-none text-sm font-bold"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 px-3 flex items-center justify-center cursor-pointer"
              onClick={() => handleSearch()}
            >
              <FiSearch className="text-white text-lg font-bold" />
            </button>
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-3 mt-2 ml-5">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSearch(s)}
                className="text-white text-sm hover:underline transition cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Right buttons */}
        <div className="flex items-center space-x-3 relative">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="cursor-pointer flex items-center justify-center border border-blue-500 text-blue-500 bg-white px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition w-16"
            >
              <FiGlobe className="mr-1" />
              <span>{language}</span>
            </button>
            {langOpen && (
              <div className="absolute top-full mt-1 w-16 bg-white text-black shadow rounded">
                <button
                  onClick={() => {
                    setLanguage("VI");
                    setLangOpen(false);
                  }}
                  className="cursor-pointer block rounded w-full px-2 py-1 hover:bg-gray-100 text-center"
                >
                  VI
                </button>
                <button
                  onClick={() => {
                    setLanguage("EN");
                    setLangOpen(false);
                  }}
                  className="cursor-pointer block rounded w-full px-2 py-1 hover:bg-gray-100 text-center"
                >
                  EN
                </button>
              </div>
            )}
          </div>

          {/* Seller */}
          {/* <Link
            to="/seller"
            className="flex items-center space-x-2 border border-blue-500 text-blue-500 bg-white px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition"
            
          >
            <FiUser className="font-bold" />
            <span>Kênh người bán</span>
          </Link> */}
          <button
                    onClick={() => {
                      logout();
                      navigate("/seller");
                    }}
                    className="flex items-center space-x-2 border border-blue-500 text-blue-500 bg-white px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition cursor-pointer"
                  >
                    Kênh người bán
                  </button>

          {/* User info or login/signup */}
          {user ? (
            <div ref={userMenuRef} className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 border border-blue-500 text-blue-500 bg-white px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition cursor-pointer"
              >
                {/* Hiển thị avatar nếu có, hoặc icon user */}
                {user.username ? (
                  <img
                    src={"images/user/mambo.jpg"}
                    alt={user.username}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                ) : (
                  <FiUser className="text-blue-500" />
                )}
                <span>Xin chào, {user.fullname ?? user.username}</span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white text-black rounded shadow z-20">
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                      navigate("/");
                    }}
                    className="rounded w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-2 border border-blue-500 text-blue-500 bg-white px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition"
            >
              <FiUser />
              <span>Đăng nhập / Đăng ký</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
