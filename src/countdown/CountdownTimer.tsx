import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

type CountdownTimerProps = {
  initialTime?: number; // in milliseconds
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime = 24 * 60 * 60 * 1000,
}) => {
  const [targetDate, setTargetDate] = useState<number>(
    Date.now() + initialTime,
  );

  useEffect(() => {
    const savedCountdown = localStorage.getItem('countdownTarget');
    const currentTime = Date.now();

    if (savedCountdown && parseInt(savedCountdown, 10) > currentTime) {
      setTargetDate(parseInt(savedCountdown, 10));
    } else {
      const newTarget = currentTime + initialTime;
      localStorage.setItem('countdownTarget', newTarget.toString());
      setTargetDate(newTarget);
    }
  }, [initialTime]);

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <span>Time&apos;s up!</span>;
    }
    return (
      <span className="md:text-1xl font-sans text-lg font-bold">
        {hours}h {minutes}min {seconds}s
      </span>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
