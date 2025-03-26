import Image from 'next/image';
import HeroBannerSmallImage from '@/assets/home-page/banner-small.png';
import HeroBannerImage from '@/assets/home-page/banner.png';
import { cn } from '@/lib/utils';
import { playfair } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
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
          <Button variant={'outline'} size={'lg'} className="backdrop-blur">
            Get a quote from us now!
          </Button>
        </div>
      </section>
    </>
  );
}
