import DraperyLogo from '../drapery-logo';
import MobileNav from './mobile-nav';

export default function Navigation() {
  return (
    <nav className="p-6 bg-black/20 z-10 absolute top-0 left-0 right-0 flex items-center">
      <DraperyLogo />

      <div className="ml-auto md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}
