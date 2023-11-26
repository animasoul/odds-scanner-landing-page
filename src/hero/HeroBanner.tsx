import type { ReactNode } from 'react';

import HeroTagsBlock from '@/icons/HeroTagsBlock';
import TagAtt from '@/icons/TagAtt';

type IHeroBannerProps = {
  title: ReactNode;
  description: string;
};

const HeroBanner = (props: IHeroBannerProps) => (
  <section className=" bg-[url('/assets/images/bg-hero-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/assets/images/bg-hero-desktop.jpg')]  md:bg-contain">
    <header className="mx-auto max-w-screen-lg">
      <div className=" flex flex-col items-center justify-end gap-2 px-3 pb-0 pt-8 md:items-end  md:pt-12">
        <div className=" flex flex-col items-start gap-9 self-stretch">
          <div className="flex flex-col items-start gap-2 md:w-[398px]">
            <h1 className="Condensed'] font-['Roboto self-stretch pb-4 text-center text-2xl leading-[125%] text-white-100 md:text-left">
              {props.title}
            </h1>
            <div className="mb-16 mt-4 hidden font-source text-base text-white-200 md:block">
              {props.description}
            </div>
          </div>
          <HeroTagsBlock />
        </div>

        <TagAtt />
      </div>
    </header>
  </section>
);

export { HeroBanner };
