import DraperyLogo from '../drapery-logo';
import LargeScreenNav from './large-screen-nav';
import MobileNav from './mobile-nav';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-b from-black/40 to-transparent z-10 absolute top-0 left-0 right-0">
      <div className="flex items-center max-w-7xl mx-auto p-6">
        <DraperyLogo className="w-[40px] lg:w-[55px]" />

        <LargeScreenNav />

        <div className="ml-auto md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
