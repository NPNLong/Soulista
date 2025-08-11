import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import SearchSidebar from "../components/SearchSidebar";
import SearchProductSidebar from "../components/SearchProductSidebar";
import ShopCard from "../components/ShopCard";
import FoodCard from "../components/FoodCard";
import { useAllShops, useSearchShops } from "../hooks/shop_hooks";
import { useSearchProducts } from "../hooks/product_hooks";
import type { Shop } from "../hooks/shop_hooks";
import { useEffect } from "react";

// Spinner loading đơn giản
function LoadingSpinner() {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
      </div>
  );
}

export default function Search() {
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("q") || "";
  const type = searchParams.get("type") || "shop";

  const [cityFilter, setCityFilter] = React.useState<string[]>([]);
  const [typeFilter, setTypeFilter] = React.useState<string[]>([]);
  const [hasPromotion, setHasPromotion] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<"" | "newest" | "bestseller" | "price" | "distance">("");
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

  const [cityProductFilter, setCityProductFilter] = React.useState<string[]>([]);
  const [hasProductPromotion, setHasProductPromotion] = React.useState(false);

  // Hooks shop
  const { data: allShops = [], isLoading: loadingAll } = useAllShops();
  const { data: searchShops = [], isLoading: loadingSearch } = useSearchShops(search);
  const shops: Shop[] = search ? searchShops : allShops;

  // Hooks product
  const { data: products = [], isLoading: loadingProducts } = useSearchProducts(
    type === "product" ? search : undefined
  );

  // Hiển thị loading nếu dữ liệu đang fetch
  if (type === "product" ? loadingProducts : (loadingAll || loadingSearch)) {
    return <LoadingSpinner />;
  }

  // ====== PRODUCT MODE ======
  if (type === "product") {
    let filteredProducts = products.filter((product) => {
      const city = product.city?.toLowerCase() ?? "";
      const cityMatch = cityProductFilter.length > 0 ? cityProductFilter.includes(city) : true;
      const promoMatch = hasProductPromotion
        ? product.current_price < product.original_price
        : true;
      return cityMatch && promoMatch;
    });

    // Sort
    if (sortBy === "price") {
      filteredProducts.sort((a, b) =>
        sortOrder === "asc"
          ? a.current_price - b.current_price
          : b.current_price - a.current_price
      );
    }

    const handleSort = () => {
      if (sortBy === "price") {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortBy("price");
        setSortOrder("asc");
      }
    };

    const renderSortIcon = (field: string) =>
      sortBy === field
        ? sortOrder === "asc"
          ? <ArrowUp size={14} />
          : <ArrowDown size={14} />
        : null;

    return (
      <div className="flex flex-col min-h-screen">
        <div className="pt-26 container mx-auto px-4 flex-grow">
          <div className="flex flex-col lg:flex-row gap-6">
            <SearchProductSidebar
              cityFilter={cityProductFilter}
              setCityFilter={setCityProductFilter}
              hasPromotion={hasProductPromotion}
              setHasPromotion={setHasProductPromotion}
            />
            <div className="w-full lg:w-3/4">
              <div className="flex flex-wrap items-center justify-between bg-gray-100 p-3 rounded mb-4">
                <h1 className="text-gray-700 font-medium">
                  Đã tìm thấy {filteredProducts.length} sản phẩm
                </h1>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-gray-700">Sắp xếp theo:</span>
                  <button onClick={handleSort} className={sortButtonClass(sortBy === "price")}>
                    Giá {renderSortIcon("price")}
                  </button>
                </div>
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-4 pb-10">
                  {filteredProducts.map((product) => (
                    <FoodCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">Không tìm thấy sản phẩm phù hợp</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ====== SHOP MODE ======
  let filteredShops = shops.filter((shop) => {
    const cityMatch = cityFilter.length > 0 ? cityFilter.includes(shop.city.toLowerCase()) : true;
    const typeMatch =
      typeFilter.length > 0 ? typeFilter.some((type) => shop.type.toLowerCase().includes(type)) : true;
    const promoMatch = hasPromotion ? shop.has_sale : true;
    return cityMatch && typeMatch && promoMatch;
  });

  if (sortBy === "price") {
    filteredShops.sort((a, b) =>
      sortOrder === "asc"
        ? a.price_range.localeCompare(b.price_range)
        : b.price_range.localeCompare(a.price_range)
    );
  } else if (sortBy === "distance") {
    filteredShops.sort((a, b) =>
      sortOrder === "asc"
        ? (a.distance ?? Infinity) - (b.distance ?? Infinity)
        : (b.distance ?? Infinity) - (a.distance ?? Infinity)
    );
  } else if (sortBy === "newest") {
    filteredShops.sort((a, b) =>
      sortOrder === "asc" ? a.join_date.localeCompare(b.join_date) : b.join_date.localeCompare(a.join_date)
    );
  } else if (sortBy === "bestseller") {
    filteredShops.sort((a, b) =>
      sortOrder === "asc" ? a.total_ratings - b.total_ratings : b.total_ratings - a.total_ratings
    );
  }

  const handleSort = (field: "newest" | "bestseller" | "price" | "distance") => {
    if (sortBy === field) setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const renderSortIcon = (field: string) =>
    sortBy === field ? (sortOrder === "asc" ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : null;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-26 container mx-auto px-4 flex gap-6 flex-grow">
        <SearchSidebar
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          hasPromotion={hasPromotion}
          setHasPromotion={setHasPromotion}
        />
        <div className="w-3/4 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between bg-gray-100 p-3 rounded">
            <div className="text-gray-700 font-medium">
              Đã tìm thấy {filteredShops.length} kết quả
            </div>
            <div className="flex items-center gap-3 flex-wrap text-sm">
              <span className="font-medium text-gray-700">Sắp xếp theo:</span>
              <div className="flex items-center gap-2">
                <button onClick={() => handleSort("newest")} className={sortButtonClass(sortBy === "newest")}>
                  Mới nhất {renderSortIcon("newest")}
                </button>
                <button onClick={() => handleSort("bestseller")} className={sortButtonClass(sortBy === "bestseller")}>
                  Bán chạy {renderSortIcon("bestseller")}
                </button>
                <button onClick={() => handleSort("price")} className={sortButtonClass(sortBy === "price")}>
                  Giá {renderSortIcon("price")}
                </button>
                <button onClick={() => handleSort("distance")} className={sortButtonClass(sortBy === "distance")}>
                  Khoảng cách {renderSortIcon("distance")}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pb-10">
            {filteredShops.length > 0 ? (
              filteredShops.map((shop) => <ShopCard key={shop.id} shop={shop} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">Không tìm thấy kết quả phù hợp</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function sortButtonClass(active: boolean) {
  return `flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer shadow-sm ${
    active
      ? "bg-blue-500 text-white hover:bg-blue-600 scale-105"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
  }`;
}
