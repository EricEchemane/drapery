import React from 'react';
import Image from 'next/image';
import ContactBannerImage from '@/assets/contact/contact-banner.jpg';

export default function ContactHeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Image
          alt=""
          src={ContactBannerImage}
          fill
          priority
          className="block object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#633308]/90 lg:bg-[#633308]/85" />
      </div>
    </>
  );
}
