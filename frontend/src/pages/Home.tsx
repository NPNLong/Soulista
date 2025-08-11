import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";
import DailyCheckIn from "../components/DailyCheckIn";
import FeatureCards from "../components/FeatureCards";
import HotDeals from "../components/HotDeals";
import HotPlaces from "../components/HotPlaces";

export default function Home() {
  return (
    <>
      <div className="pt-27 container mx-auto px-4">
        <BannerCarousel />
        <DailyCheckIn />
        <FeatureCards />
        <HotDeals />
        <HotPlaces title="Điểm hot trong tuần" />
      </div>
    </>
  );
}
