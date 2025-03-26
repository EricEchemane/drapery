import { StaticImageData } from 'next/image';

export interface Navlink {
  displayText: string;
  href: string;
}

export interface CustomerReview {
  message: string;
  avatar: StaticImageData;
  name: string;
}
