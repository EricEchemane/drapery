'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navlinks, playfair, SEO } from '@/lib/constants';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <MenuIcon
          strokeWidth={1.5}
          className="w-8 h-8 text-neutral-200 active:text-white active:scale-90 transition"
        />
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="bg-primary/20 backdrop-blur text-white rounded-tr-3xl p-0 pt-6 flex flex-col"
      >
        <SheetHeader className="text-left p-6">
          <SheetTitle className={cn('text-white text-xl', playfair.className)}>
            {SEO.title}
          </SheetTitle>
          <SheetDescription>{SEO.description}</SheetDescription>
        </SheetHeader>
        <ul>
          {navlinks.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  className="block px-4 mx-2 py-3 hover:bg-white/20 rounded-md"
                  href={item.href}
                >
                  {item.displayText}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="p-6 mt-auto mb-3">
          <Button
            variant={'outline'}
            className={cn(
              playfair.className,
              'bg-transparent w-full tracking-widest font-normal'
            )}
          >
            GET FREE CONSULTATION
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
