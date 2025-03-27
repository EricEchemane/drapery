import { ProgressiveBlur } from '../../../components/motion-primitives/progressive-blur';
import DraperyLogo from '../drapery-logo';
import LargeScreenNav from './large-screen-nav';
import MobileNav from './mobile-nav';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-b from-black/60 to-transparent z-10 fixed top-0 left-0 right-0">
      <div className="flex items-start max-w-7xl mx-auto p-6 z-20 relative">
        <DraperyLogo withLink className="w-[40px] lg:w-[55px]" />

        <LargeScreenNav />

        <div className="ml-auto md:hidden">
          <MobileNav />
        </div>
      </div>
      <ProgressiveBlur
        direction="top"
        blurIntensity={0.9}
        className="absolute top-0 left-0 h-full w-full z-10"
      />
    </nav>
  );
}
