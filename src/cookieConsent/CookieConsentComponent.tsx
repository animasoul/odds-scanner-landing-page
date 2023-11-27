import React from 'react';
import CookieConsent from 'react-cookie-consent';

import ScheduleRandomNotifications from '@/notifications/RandomNotifications';

type CookieConsentComponentProps = {
  onAccept: () => void;
  showNotificationConsent: boolean;
};

const CookieConsentComponent: React.FC<CookieConsentComponentProps> = ({
  onAccept,
  showNotificationConsent,
}) => {
  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleNotificationConsentAccept = () => {
    ScheduleRandomNotifications();
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Aceitar todos os cookies"
        enableDeclineButton
        declineButtonText="Recusar"
        onAccept={onAccept}
        onDecline={handleDecline}
        style={{ background: '#ffffff' }}
        cookieName="userConsentCookie"
        containerClasses="px-3 mx-auto p-4 text-left text-sm border-t-3 border-solid border-gray"
        buttonClasses="justify-center items-center gap-2 py-3 px-5 w-60 h-11 rounded-[0.3125rem] bg-[#ffcc23] Sans 3'] text-[#13161a] font-['Source font-semibold leading-[150%] border-t-1 border-gray"
        declineButtonClasses="Sans 3'] text-[#013a67] font-['Source font-semibold leading-[150%]"
        expires={150}
      >
        <h3 className="Condensed'] font-['Roboto text-lg font-bold leading-[145%] text-[#13161a]">
          Nós usamos cookies na entrega de nossos serviços
        </h3>
        <p className="Sans 3'] font-['Source leading-[145%] text-[#2c2f33]">
          Para continuar a utilizar esse site, você consente no uso de cookies
          em acordo com nossa política de cookies.
        </p>
      </CookieConsent>
      {showNotificationConsent && (
        <CookieConsent
          location="top"
          buttonText="Ativar notificações"
          enableDeclineButton
          declineButtonText="Agora não"
          onAccept={handleNotificationConsentAccept}
          onDecline={() => console.log('Notifications declined')}
          style={{ background: '#ffffff' }}
          cookieName="notificationConsentCookie"
          containerClasses="w-48 px-3 mx-auto p-4 text-left text-sm border-t-3 border-solid border-gray"
          buttonClasses="justify-center items-center gap-2 py-3 px-5 w-60 h-11 rounded-[0.3125rem] bg-[#ffcc23] Sans 3'] text-[#13161a] font-['Source font-semibold leading-[150%] border-t-1 border-gray"
          declineButtonClasses="Sans 3'] text-[#013a67] font-['Source font-semibold leading-[150%]"
          expires={150}
        >
          <h3 className="Condensed'] font-['Roboto text-lg font-bold leading-[145%] text-[#13161a]">
            Ative Notificações Push
          </h3>
          <p className="Sans 3'] font-['Source leading-[145%] text-[#2c2f33]">
            Não perca mais nada! Fique atualizado com as últimas notícias,
            promoções exclusivas e atualizações importantes.
          </p>
        </CookieConsent>
      )}
    </>
  );
};

export default CookieConsentComponent;
