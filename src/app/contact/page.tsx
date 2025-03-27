import React from 'react';
import { Metadata } from 'next';
import ContactHeroBackground from '@/app/contact/components/_heroBackground';
import { cn } from '@/lib/utils';
import { playfair } from '@/lib/constants';
import { TextField } from '@mui/material';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { TransformYourSpace } from '../page';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <>
      <section className="relative pt-36 lg:pb-24">
        <ContactHeroBackground />
        <div>
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 text-white">
            <div className="order-3 lg:order-1 space-y-6">
              <div className="mb-14 px-6">
                <h2 className={cn('text-3xl font-bold', playfair.className)}>
                  Follow us
                </h2>
                <div className="flex flex-row gap-6 mt-8">
                  <div>
                    <p className="text-sm text-white/80">Facebook</p>
                    <a
                      className="font-medium text-xs md:text-sm hover:underline underline-offset-2 hover:scale-105 transition-transform duration-200 inline-block"
                      href="http://www.facebook.com/The-Drapery-Studio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /The-Drapery-Studio
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Instagram</p>
                    <a
                      className="font-medium text-xs md:text-sm hover:underline underline-offset-2 hover:scale-105 transition-transform duration-200 inline-block"
                      href="http://www.instagram.com/the_draperystudio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /the_draperystudio
                    </a>
                  </div>
                </div>
              </div>

              <Separator className="block lg:hidden bg-white/40 h-[1px] w-full my-8" />

              <div className="px-6">
                <h2 className={cn('text-3xl font-bold', playfair.className)}>
                  {"We're here"}
                </h2>
                <div className="mt-8 mb-10 flex gap-1 text-xs md:text-sm transition-transform duration-300 hover:scale-[1.1] hover:text-white origin-left">
                  <span>
                    <MapPin className="w-4 h-4" />
                  </span>
                  <a
                    href="https://maps.google.com/?q=SPA+Building+2,+Xavierville+Avenue,+Quezon+City,+Philippines"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SP&A Building 2, Xavierville Avenue, Quezon City,
                    Philippines
                  </a>
                </div>
              </div>

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Xavierville%20Ave%2C%20Quezon%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
                // className="w-[100vw]  lg:w-3/4 lg:ml-0 lg:rounded-xl h-[60vh] border-0"
                className="w-full h-[60vh] lg:w-3/4 lg:rounded-xl border-0 lg:ml-6"
                loading="eager"
              />
            </div>

            <Separator
              orientation="vertical"
              className="hidden lg:block order-2 h-[70vh] bg-white/40 w-[1px] -ml-4 mt-16"
            />

            <div className="order-1 lg:order-3 lg:ml-12 space-y-4 px-6">
              <div className="mb-14">
                <h2 className={cn('text-3xl font-bold', playfair.className)}>
                  Let’s get in touch
                </h2>
                <p className="mt-4 text-xs md:text-sm">
                  Or just reach out manually to{' '}
                  <span className="text-white font-medium underline">
                    thedraperystudioph@gmail.com
                  </span>
                </p>
              </div>
              <form className="space-y-10">
                <TextField fullWidth variant="standard" label="Name" focused />
                <TextField
                  fullWidth
                  variant="standard"
                  label="Email"
                  type="email"
                  focused
                />
                <TextField
                  fullWidth
                  variant="standard"
                  label="Message"
                  multiline
                  focused
                />
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full lg:w-auto sm:self-start border-white text-white hover:bg-white hover:text-[#633308] transition mx-auto sm:mx-0"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <TransformYourSpace />
    </>
  );
}
