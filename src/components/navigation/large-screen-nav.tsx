import React from 'react';
import { Button } from '../ui/button';
import { navlinks, playfair } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function LargeScreenNav() {
  return (
    <>
      <ul className="hidden md:flex lg:gap-12 text-white items-center mx-auto pt-3">
        {navlinks.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className="py-2 px-6 rounded-md hover:bg-white/20 transition"
                href={item.href}
              >
                {item.displayText}
              </Link>
            </li>
          );
        })}
      </ul>

      <Button
        variant={'outline'}
        className={cn(
          playfair.className,
          'bg-transparent tracking-widest font-normal hidden md:inline text-white mt-1'
        )}
      >
        Get Free Consultation!
      </Button>
    </>
  );
}
