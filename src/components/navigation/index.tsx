import DraperyLogo from '../drapery-logo';
import LargeScreenNav from './large-screen-nav';
import MobileNav from './mobile-nav';

export default function Navigation() {
  return (
    <nav className="p-6 bg-black/30 z-10 absolute top-0 left-0 right-0 flex items-center">
      <DraperyLogo className="w-[40px] lg:w-[50px]" />

      <LargeScreenNav />

      <div className="ml-auto md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}
