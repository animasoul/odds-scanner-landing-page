import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import ComparisonCards from './ComparisonCards';
import { Footer } from './Footer';
import Form from './Form';
import { Hero } from './Hero';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <ComparisonCards />
    <Form />
    <Banner />
    <Footer />
  </div>
);

export { Base };
