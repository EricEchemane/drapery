import Image from 'next/image';
import DraperyLogo from './drapery-logo';
import { externalLinks } from '@/lib/constants';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, MapPin, PhoneIcon } from 'lucide-react';

export default function Footer() {
  const Company = (
    <ul className="space-y-3 md:text-neutral-300">
      {/* <li>About</li> */}
      <li>Services</li>
      <li>Portfolio</li>
    </ul>
  );

  const Contact = (
    <ul className="space-y-3 md:text-neutral-300">
      <li className="flex items-start gap-2">
        <MapPin className="mt-1 w-6 h-6" />
        SP&A Building 2, Xavierville Avenue, Quezon City, Philippines
      </li>
      <li className="flex items-center gap-2">
        <PhoneIcon className="w-4 h-4" />
        0961 153 8626
      </li>
      <li className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        thedraperystudioph@gmail.com
      </li>
    </ul>
  );

  const Social = (
    <div className="flex items-center gap-3">
      <a
        href="https://www.facebook.com/profile.php?id=61572045971922"
        target="_blank"
      >
        <Button
          size="icon"
          className="rounded-full flex items-center justify-center w-10 h-10"
        >
          <Image
            alt="Facebook"
            width={32}
            height={32}
            className="object-contain"
            src={externalLinks.icons.facebook}
          />
        </Button>
      </a>
      <a href="https://instagram.com/the_draperystudio" target="_blank">
        <Button
          size="icon"
          className="rounded-full flex items-center justify-center w-10 h-10"
        >
          <Image
            alt="Instagram"
            width={24}
            height={24}
            className="object-contain"
            src={externalLinks.icons.instagram}
          />
        </Button>
      </a>
    </div>
  );

  return (
    <footer className="bg-[#2A2A2A] py-12 lg:pt-16">
      <div className="flex flex-col max-w-7xl mx-auto px-6 md:flex-row md:gap-12">
        <div className="flex flex-col items-center gap-6 md:items-start">
          <DraperyLogo className="w-[80px]" />
          <p className="text-muted-foreground md:max-w-[300px] text-center md:text-left ">
            Premium quality. Made-to-measure. Professionally installed.
          </p>
          <div className="md:hidden">{Social}</div>
        </div>
        <div className="text-white md:flex gap-12 lg:gap-24 md:text-left text-center mx-auto md:ml-auto mt-8 md:mt-0">
          <Accordion type="multiple" className="md:hidden">
            <AccordionItem value="item-1">
              <AccordionTrigger>Company</AccordionTrigger>
              <AccordionContent>{Company}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Contact</AccordionTrigger>
              <AccordionContent>{Contact}</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="hidden md:block">
            <div className="font-bold mb-6">Company</div>
            {Company}
          </div>
          <div className="hidden md:block">
            <div className="font-bold mb-6">Contact</div>
            {Contact}
          </div>
          <div className="hidden md:block">
            <div className="font-bold mb-6">Follow us</div>
            {Social}
          </div>
        </div>
      </div>

      <div className="text-center text-muted-foreground text-sm mt-12">
        © 2025 The Drapery Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
