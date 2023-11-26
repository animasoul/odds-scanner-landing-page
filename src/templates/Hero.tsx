import Link from 'next/link';

import { HeroBanner } from '@/hero/HeroBanner';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <HeroBanner
      title={
        <>
          {'As Melhores '}
          <span className="font-bold">Agências de Viagens Online</span>
          {' do '}
          <span className="font-bold">Brasil 2023</span>
        </>
      }
      description="Quer saber quais são as 10 principais agências de viagens online do Brasil? Descubra quem são os lideres no mercado nacional."
    />
  </Background>
);

export { Hero };
