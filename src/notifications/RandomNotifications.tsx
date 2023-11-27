import { toast } from 'react-toastify';

// Define the structure of each message
interface Message {
  content: JSX.Element;
  icon: string;
}

let isScheduled = false; // Flag to track if notifications are already scheduled

const ScheduleRandomNotifications = (): void => {
  // If notifications are already scheduled, return early to avoid duplication
  if (isScheduled) return;
  isScheduled = true;

  const messages: Message[] = [
    {
      content: (
        <span>
          <strong>250 pessoas</strong> acessaram esta página na última hora
        </span>
      ),
      icon: '/assets/images/flame-icon.png',
    },
    {
      content: (
        <span>
          <strong>50 pessoas</strong> escolheram a Voyajer em São Paulo
        </span>
      ),
      icon: '/assets/images/people-icon.png',
    },
    {
      content: (
        <span>
          <strong>10 pessoas</strong> acessaram esta página na última hora
        </span>
      ),
      icon: '/assets/images/flame-icon.png',
    },
    {
      content: (
        <span>
          <strong>60 pessoas</strong> escolheram a Voyajer em Rio de Janeiro
        </span>
      ),
      icon: '/assets/images/people-icon.png',
    },
  ];

  let nextMessageIndex = 0;

  const showToast = (content: JSX.Element, iconSrc: string): void => {
    toast.info(content, {
      position: 'bottom-left',
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      icon: <img src={iconSrc} alt="icon" width={35} height={35} />,
    });
  };

  const showRandomNotification = (): void => {
    const { content, icon } = messages[nextMessageIndex] as Message;
    showToast(content, icon);

    nextMessageIndex = (nextMessageIndex + 1) % messages.length;
    const randomDelay = 9000 + Math.random() * 8000; // 9 to 17 seconds
    setTimeout(showRandomNotification, randomDelay);
  };

  showRandomNotification();
};

export default ScheduleRandomNotifications;
