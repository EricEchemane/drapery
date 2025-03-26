import Image from 'next/image';
import HeroBannerSmallImage from '@/assets/home-page/banner-small.png';
import HeroBannerImage from '@/assets/home-page/banner.png';
import ConcavePortal from '@/assets/home-page/concave-portal.png';
import { cn } from '@/lib/utils';
import { playfair } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <LandingSection />
      <Section2 />
    </>
  );
}

function LandingSection() {
  return (
    <section className="relative">
      <Image
        alt=""
        src={HeroBannerSmallImage}
        fill
        quality={100}
        className="object-cover absolute top-0 right-0 bottom-0 left-0 md:hidden"
      />
      <Image
        alt=""
        src={HeroBannerImage}
        fill
        quality={100}
        className="object-cover absolute top-0 right-0 bottom-0 left-0 hidden md:inline"
      />
      <div className="text-white relative p-6 pt-36 pb-16 md:pb-32 lg:py-48 max-w-xl lg:max-w-full md:mx-auto md:text-center">
        <h1
          className={cn(
            'text-4xl mb-6 md:text-balance md:text-5xl lg:text-7xl',
            playfair.className
          )}
        >
          Elegant Custom <br /> Drapery for Every Home
        </h1>
        <p className="mb-9 text-lg lg:text-xl">
          Premium quality | Made-to-measure | Professionally installed
        </p>
        <Button
          variant={'outline'}
          size={'lg'}
          className="backdrop-blur lg:text-lg"
        >
          Get a quote from us now!
        </Button>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="bg-[#FAF7F0]">
      <div className="p-6 pt-12 md:py-12 lg:py-24 lg:gap-16 max-w-4xl mx-auto grid md:grid-cols-2 md:place-items-center">
        <Image
          src={ConcavePortal}
          alt=""
          className="w-[240px] mx-auto mb-6 md:mb-0 lg:w-[360px]"
        />
        <div>
          <h2
            className={cn(
              playfair.className,
              'text-lg md:text-xl lg:text-3xl mb-9 font-bold'
            )}
          >
            Achieve a designer-inspired look to your home with professionally
            installed sheers by{' '}
            <span className="text-primary">The Drapery Studio.</span>
          </h2>
          <p className="mb-6 text-muted-foreground">
            Not all curtains are created equal. With custom curtains, every inch
            is measured, every fabric chosen to match your taste, and every
            detail designed for a flawless fit. Because your home deserves
            better.
          </p>
          <p className="text-muted-foreground">
            Choose from our premium, high-quality fabrics that best fits your
            design inspiration.
          </p>
        </div>
      </div>
    </section>
  );
}
