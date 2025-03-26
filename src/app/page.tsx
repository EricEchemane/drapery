import Image from 'next/image';
import HeroBannerImage from '@/assets/home-page/banner.png';

export default function Home() {
  return (
    <>
      <section className="h-screen">
        <Image alt="" src={HeroBannerImage} fill className="object-cover" />
        <div className="mt-32 relative p-6"></div>
      </section>
    </>
  );
}
