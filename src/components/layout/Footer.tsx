import MobileFooter from './footer/MobileFooter';
import DesktopFooter from './footer/DesktopFooter';

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10 py-6 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <MobileFooter />
        <DesktopFooter />
      </div>
    </footer>
  );
}
