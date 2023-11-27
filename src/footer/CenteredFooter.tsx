import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import ScrollToTopButton from './ScrollToTop';

type ICenteredFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center md:text-left">
    {props.logo}
    <>
      <ScrollToTopButton />
    </>

    <div className="mt-8 flex justify-center md:justify-normal">
      {/* <FooterIconList>{props.iconList}</FooterIconList> */}
      <p>
        Não temos qualquer relação com às marcas mencionadas em nosso conteúdo.
        Somos agregadores e contribuímos com a comunidade de viagens com
        conteúdo relevantes sobre o tema.
      </p>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
      <nav>
        <ul className="navbar mt-5 flex flex-row justify-items-end  text-base font-medium text-gray-800 md:justify-normal">
          {props.children}
        </ul>
      </nav>
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
