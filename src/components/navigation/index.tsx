import { MenuIcon } from 'lucide-react';
import DraperyLogo from '../drapery-logo';

export default function Navigation() {
  return (
    <nav className="p-6 bg-black/20 z-10 absolute top-0 left-0 right-0 flex items-center">
      <DraperyLogo />

      <div className="ml-auto">
        <button>
          <MenuIcon
            strokeWidth={1.5}
            className="w-8 h-8 text-neutral-200 active:text-white active:scale-90 transition"
          />
        </button>
      </div>
    </nav>
  );
}
