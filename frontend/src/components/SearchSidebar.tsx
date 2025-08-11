import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

interface SearchSidebarProps {
  cityFilter: string[];
  setCityFilter: (cities: string[]) => void;
  typeFilter: string[];
  setTypeFilter: (types: string[]) => void;
  hasPromotion: boolean;
  setHasPromotion: (val: boolean) => void;
}

export default function SearchSidebar({
  cityFilter,
  setCityFilter,
  typeFilter,
  setTypeFilter,
  hasPromotion,
  setHasPromotion,
}: SearchSidebarProps) {
  const [openCity, setOpenCity] = useState(true);
  const [openType, setOpenType] = useState(true);
  const [openPromo, setOpenPromo] = useState(true);

  const toggleCity = (city: string) => {
    const normalized = city.toLowerCase();
    if (cityFilter.includes(normalized)) {
      setCityFilter(cityFilter.filter((c) => c !== normalized));
    } else {
      setCityFilter([...cityFilter, normalized]);
    }
  };

  const toggleType = (type: string) => {
    const normalized = type.toLowerCase();
    if (typeFilter.includes(normalized)) {
      setTypeFilter(typeFilter.filter((t) => t !== normalized));
    } else {
      setTypeFilter([...typeFilter, normalized]);
    }
  };

  const sectionClass = "overflow-hidden transition-all duration-300 ease-in-out";

  return (
    <div className="w-1/5 bg-white border rounded-lg shadow-lg p-4 h-fit sticky top-26 transition-all">
      <h3 className="font-bold text-lg mb-4 text-blue-600">Lọc theo</h3>

      {/* Tỉnh/Thành phố */}
      <div className="mb-2">
        <button
          className={`flex items-center cursor-pointer justify-between w-full mb-2 p-2 rounded transition-colors ${
            openCity ? "bg-blue-100" : "hover:bg-gray-50"
          }`}
          onClick={() => setOpenCity(!openCity)}
        >
          <h4 className="font-semibold text-gray-700">Tỉnh/Thành phố</h4>
          {openCity ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        <div className={`${sectionClass} ${openCity ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="pt-2">
            {["Hải Phòng", "Hạ Long", "Hà Nội"].map((city) => {
              const normalized = city.toLowerCase();
              const isActive = cityFilter.includes(normalized);
              return (
                <label
                  key={city}
                  className={`flex items-center gap-2 mb-2 px-2 py-1 rounded cursor-pointer transition-colors ${
                    isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-50"
                  }`}
                  onClick={() => toggleCity(city)}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center border rounded transition-all ${
                      isActive
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-400 text-transparent"
                    }`}
                  >
                    <Check size={14} />
                  </span>
                  <span>{city}</span>
                </label>
              );
            })}
            {cityFilter.length > 0 && (
              <button onClick={() => setCityFilter([])} className="text-blue-500 text-xs mt-2 hover:underline">
                Bỏ chọn
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Loại (multi-select) */}
      <div className="mb-2">
        <button
          className={`flex items-center cursor-pointer justify-between w-full mb-2 p-2 rounded transition-colors ${
            openType ? "bg-blue-100" : "hover:bg-gray-50"
          }`}
          onClick={() => setOpenType(!openType)}
        >
          <h4 className="font-semibold text-gray-700">Loại</h4>
          {openType ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        <div className={`${sectionClass} ${openType ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="pt-2">
            {["Nhà hàng", "Quán ăn", "Cửa hàng lưu niệm, quà tặng"].map((type) => {
              const normalized = type.toLowerCase();
              const isActive = typeFilter.includes(normalized);
              return (
                <label
                  key={type}
                  className={`flex items-center gap-2 mb-2 px-2 py-1 rounded cursor-pointer transition-colors ${
                    isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-50"
                  }`}
                  onClick={() => toggleType(type)}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center border rounded transition-all ${
                      isActive
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-400 text-transparent"
                    }`}
                  >
                    <Check size={14} />
                  </span>
                  <span>{type}</span>
                </label>
              );
            })}
            {typeFilter.length > 0 && (
              <button onClick={() => setTypeFilter([])} className="text-blue-500 text-xs mt-2 hover:underline">
                Bỏ chọn
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Có khuyến mãi */}
      <div>
        <button
          className={`flex items-center cursor-pointer justify-between w-full mb-2 p-2 rounded transition-colors ${
            openPromo ? "bg-blue-100" : "hover:bg-gray-50"
          }`}
          onClick={() => setOpenPromo(!openPromo)}
        >
          <h4 className="font-semibold text-gray-700">Khuyến mãi</h4>
          {openPromo ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        <div className={`${sectionClass} ${openPromo ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="pt-2">
            <label
              className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${
                hasPromotion ? "bg-blue-100 text-blue-700" : "hover:bg-gray-50"
              }`}
              onClick={() => setHasPromotion(!hasPromotion)}
            >
              <span
                className={`w-5 h-5 flex items-center justify-center border rounded transition-all ${
                  hasPromotion
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-gray-400 text-transparent"
                }`}
              >
                <Check size={14} />
              </span>
              <span>Có khuyến mãi</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
