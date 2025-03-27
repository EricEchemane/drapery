import Image from 'next/image';
import HeroBannerSmallImage from '@/assets/home-page/banner-small.png';
import HeroBannerImage from '@/assets/home-page/banner.png';
import ConcavePortal from '@/assets/home-page/concave-portal.png';
import SheerCurtain from '@/assets/home-page/sheer-curtains.png';
import { cn } from '@/lib/utils';
import { playfair, primaryColor } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { CustomerReview } from '@/lib/types';
import CustomerAvatarMarie from '@/assets/home-page/customer-avatar-marie.png';
import CustomerAvatarJonathan from '@/assets/home-page/customer-avatar-jonathan.png';
import CustomerAvatarAngela from '@/assets/home-page/customer-avatar-angela.png';
import CTAImage from '@/assets/home-page/transform-your-space-section.png';
import CTAImageSmall from '@/assets/home-page/transform-your-space-small.png';
import { Avatar, Rating } from '@mui/material';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <>
      <LandingSection />
      <Section2 />
      <WeOffer />
      <CustomerReviews />
      <TransformYourSpace />
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
        <Button variant={'outline'} size={'lg'} className="lg:text-lg">
          Get a quote from us now!
        </Button>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="bg-[var(--banana)]">
      <div className="p-6 pt-12 md:py-12 lg:py-24 lg:gap-16 max-w-4xl mx-auto grid md:grid-cols-2 md:place-items-center">
        <Image
          src={ConcavePortal}
          alt=""
          className="w-[300px] mx-auto mb-6 md:mb-0 lg:w-[360px]"
        />
        <div>
          <h3
            className={cn(
              playfair.className,
              'text-xl lg:text-3xl mb-9 font-bold'
            )}
          >
            Achieve a designer-inspired look to your home with professionally
            installed sheers by{' '}
            <span className="text-primary">The Drapery Studio.</span>
          </h3>
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

function WeOffer() {
  return (
    <section
      className="py-6 max-w-7xl mx-auto lg:py-24 scroll-mt-32"
      id="services"
    >
      <h2
        className={cn(
          'font-bold text-2xl mb-3 px-6 lg:text-3xl md:text-center',
          playfair.className
        )}
      >
        We Offer
      </h2>
      <p className="text-muted-foreground px-6 mb-6 md:text-center">
        Dress up your space with custom designed curtains, sheers, and blinds.
      </p>
      <Image
        alt="Sheer Curtain"
        src={SheerCurtain}
        className="pl-6 md:max-w-xl md:mx-auto"
      />
    </section>
  );
}

function CustomerReviews() {
  const reviews: CustomerReview[] = [
    {
      avatar: CustomerAvatarMarie,
      name: 'Marie D.',
      message:
        'Absolutely stunning curtains! The quality and craftsmanship exceeded my expectations.',
    },
    {
      avatar: CustomerAvatarJonathan,
      name: 'Jonathan R.',
      message:
        'The custom fit is perfect, and the fabric selection was amazing. Truly elevated my space!',
    },
    {
      avatar: CustomerAvatarAngela,
      name: 'Angela S.',
      message:
        'Seamless experience from consultation to installation. Highly recommend for anyone looking for premium curtains!',
    },
  ];

  return (
    <section className="py-12 bg-[var(--banana)] lg:py-24">
      <div className="px-6 text-center">
        <h2
          className={cn(
            'font-bold text-2xl lg:text-3xl mb-3 md:mb-6',
            playfair.className
          )}
        >
          Customer Reviews
        </h2>
        <p className="text-muted-foreground text-balance text-sm md:text-base">
          Discover why our clients love The Drapery Studio! From exquisite
          craftsmanship to a perfect fit, our custom curtains have transformed
          spaces with elegance and style. Read their experiences and see how we
          can bring your vision to life.
        </p>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="py-6 max-w-5xl mx-auto md:py-12">
          {reviews.map((r, i) => {
            return (
              <CarouselItem
                key={i}
                className="basis-3/4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="shadow-md rounded-3xl p-6 bg-white">
                  <Rating readOnly value={5} sx={{ color: primaryColor }} />
                  <p className="mb-3 mt-1 text-muted-foreground">{r.message}</p>
                  <div className="flex gap-3 items-center">
                    <Avatar src={r.avatar.src} />
                    <div>{r.name}</div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function TransformYourSpace() {
  return (
    <section className="relative bg-primary">
      <Image
        src={CTAImage}
        alt=""
        className="absolute top-0 left-0 h-full object-cover hidden md:inline"
      />
      <Image
        src={CTAImageSmall}
        alt=""
        className="absolute top-0 left-0 h-full object-cover md:hidden"
      />
      <div className="px-6 relative py-12 max-w-5xl mx-auto md:p-12 lg:px-4 lg:py-24 xl:py-32">
        <h2
          className={cn(
            playfair.className,
            'text-center text-white text-2xl font-bold mb-6 md:text-left md:text-2xl lg:text-3xl xl:text-4xl'
          )}
        >
          Transform Your Space <br /> with Custom Curtains
        </h2>
        <p className="text-center text-neutral-300 mb-8 md:text-neutral-50 md:text-base text-balance text-sm md:text-left lg:text-lg">
          Expert guidance, premium fabrics, and a perfect fit—tailored just for
          you.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button className="text-white" variant={'outline'} size={'lg'}>
            Book a Free Consultation Today!
          </Button>
        </div>
      </div>
    </section>
  );
}
