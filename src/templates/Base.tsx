import { useState } from 'react';

import CookieConsentComponent from '../cookieConsent/CookieConsentComponent';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import ComparisonCards from './ComparisonCards';
import { Footer } from './Footer';
import Form from './Form';
import { Hero } from './Hero';

const Base: React.FC = () => {
  // Define state and handler inside the functional component
  const [showNotificationConsent, setShowNotificationConsent] = useState(false);

  const handleCookieConsentAccept = () => {
    setTimeout(() => {
      setShowNotificationConsent(true);
    }, 40000); // 40 second delay
  };

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <ComparisonCards />
      <Form />
      <Banner />
      <Footer />
      <CookieConsentComponent
        onAccept={handleCookieConsentAccept}
        showNotificationConsent={showNotificationConsent}
      />
    </div>
  );
};

export { Base };
