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

export default function Footer() {
  const Company = (
    <ul className="space-y-3 md:text-neutral-300">
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
    </ul>
  );

  const Contact = (
    <ul className="space-y-3 md:text-neutral-300">
      <li>SP&A Building 2, Xavierville Avenue, Quezon City, Philippines</li>
      <li>0961 153 8626</li>
      <li>thedraperystudioph@gmail.com</li>
    </ul>
  );

  const Social = (
    <div className="flex items-center gap-3">
      <a href="https://facebook.com/The-Drapery-Studio/" target="_blank">
        <Button size={'icon'} className="rounded-full">
          <Image
            alt=""
            width={36}
            height={36}
            src={externalLinks.icons.facebook}
          />
        </Button>
      </a>
      <a href="https://instagram.com/the_draperystudio" target="_blank">
        <Button size={'icon'} className="rounded-full">
          <Image
            alt=""
            width={24}
            height={24}
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
          <p className="text-muted-foreground md:max-w-[300px]">
            Premium quality. Made-to-measure. Professionally installed.
          </p>
          <div className="md:hidden">{Social}</div>
        </div>
        <div className="text-white md:flex gap-12 lg:gap-24 md:ml-auto">
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
