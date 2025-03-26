import { Navlink } from './types';
import { Afacad, Playfair_Display } from 'next/font/google';

export const afacad = Afacad({
  subsets: ['latin'],
});
export const playfair = Playfair_Display({
  subsets: ['latin'],
});

export const SEO = {
  title: 'The Drapery Studio',
  description:
    'Curtains | Sheers | Blinds - Elegant Custom Drapery for Every Home',
};

export const navlinks: Navlink[] = [
  {
    displayText: 'About',
    href: '/about',
  },
  {
    displayText: 'Services',
    href: '/#services',
  },
  {
    displayText: 'Portfolio',
    href: '/#portfolio',
  },
  {
    displayText: 'Contact',
    href: '/#contact',
  },
];

export const primaryColor = '#6f5b52';
