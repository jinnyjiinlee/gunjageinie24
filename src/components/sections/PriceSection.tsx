import PriceHeader from './price/PriceHeader';
import { PriceCards } from './price/PriceCards';
import CouponSection from './price/CouponSection';
import LockerInfo from './price/LockerInfo';

export default function PriceSection() {
  return (
    <section id="price" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <PriceHeader />
        <PriceCards />
        <CouponSection />
        <LockerInfo />
      </div>
    </section>
  );
}
