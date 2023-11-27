import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie-consent';
import { ToastContainer } from 'react-toastify';

import CookieConsentComponent from '../cookieConsent/CookieConsentComponent';
import { Meta } from '../layout/Meta';
import scheduleRandomNotifications from '../notifications/RandomNotifications';
import { AppConfig } from '../utils/AppConfig';
import ComparisonCards from './ComparisonCards';
import { Footer } from './Footer';
import Form from './Form';
import { Hero } from './Hero';

const Base: React.FC = () => {
  // Define state and handler inside the functional component
  const [showNotificationConsent, setShowNotificationConsent] = useState(false);
  const [notificationsScheduled, setNotificationsScheduled] = useState(false);

  const handleCookieConsentAccept = () => {
    setTimeout(() => {
      setShowNotificationConsent(true);
    }, 30000); // 30 second delay
  };

  useEffect(() => {
    // Check if the notification consent cookie exists and is set to 'true'
    const notificationConsent = Cookies.get('notificationConsentCookie');
    if (notificationConsent === 'true' && !notificationsScheduled) {
      scheduleRandomNotifications();
      setNotificationsScheduled(true);
    }
  }, [notificationsScheduled]);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <ComparisonCards />
      <Form />
      <Footer />
      <CookieConsentComponent
        onAccept={handleCookieConsentAccept}
        showNotificationConsent={showNotificationConsent}
      />
      <ToastContainer
        position="bottom-left"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export { Base };
