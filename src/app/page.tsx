import Image from 'next/image';
import HeroBannerSmallImage from '@/assets/home-page/banner-small.png';
import HeroBannerImage from '@/assets/home-page/banner.png';

export default function Home() {
  return (
    <>
      <section className="h-screen md:h-[50vh] lg:h-screen relative">
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
        <div className="mt-32 p-6 absolute top-0 left-0 right-0"></div>
      </section>
    </>
  );
}
