'use client';

import Image from 'next/image';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

import SectionTitle from '../Common/SectionTitle';

function Video({ hideSection }: { hideSection?: boolean }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {!hideSection && (
          <SectionTitle
            title="About the Project"
            // eslint-disable-next-line max-len
            paragraph="Microdiving is a revolutionary project in the fashion and WEB3 space that utilizes an exclusive fabric named 'microdiving' to create clothing. Our cryptocurrency, Microdiving Coin (MIC), allows its holders to influence design, invest in production, and purchase finished garments, making fashion more personalized and accessible."
            center
            mb="80px"
          />
        )}
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md" data-wow-delay=".15s">
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/preview.png" alt="video image" fill />
                <div className="absolute right-0 top-0 flex size-full items-center justify-center">
                  <button
                    type="button"
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    // eslint-disable-next-line max-len
                    className="flex size-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg width="16" height="18" viewBox="0 0 16 18" className="fill-current">
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        start
        isOpen={isOpen}
        videoId="xrc4J_Rc9fo"
        onClose={() => setOpen(false)}
      />
      <div className="absolute inset-x-0 bottom-0 z-[-1] size-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" />
    </section>
  );
}

export default Video;
