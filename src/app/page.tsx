import Image from 'next/image';
import HeroBannerImage from '@/assets/home-page/banner.png';

export default function Home() {
  return (
    <>
      <section className="h-screen relative">
        <Image
          alt=""
          src={HeroBannerImage}
          fill
          className="object-cover absolute top-0 right-0 bottom-0 left-0 object-right"
        />
        <div className="mt-32 p-6 absolute top-0 left-0 right-0"></div>
      </section>
    </>
  );
}
