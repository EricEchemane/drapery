import Image from 'next/image';
import HeroBannerSmallImage from '@/assets/home-page/banner-small.png';
import HeroBannerImage from '@/assets/home-page/banner.png';
import { cn } from '@/lib/utils';
import { playfair } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <section className="relative h-screen md:h-[50vh] lg:h-screen">
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
        <div className="mt-32 p-6 absolute top-0 left-0 right-0 py-6 text-white">
          <h1 className={cn('text-4xl mb-6', playfair.className)}>
            Elegant Custom Drapery for Every Home
          </h1>
          <p className="mb-6 text-lg">
            Premium quality | Made-to-measure | Professionally installed
          </p>
          <Button variant={'outline'} size={'lg'} className="backdrop-blur-md">
            Get a quote from us now!
          </Button>
        </div>
      </section>
    </>
  );
}
