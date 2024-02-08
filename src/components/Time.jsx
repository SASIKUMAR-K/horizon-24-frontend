import React, { useState, useEffect } from 'react';
function Time() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-2-24') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
      <div className="container">
			<div className="remainingDays">
				<div className="days">
					<div className="data" id="days">{time.days}</div>
					<div className="text">DAYS</div>
				</div>
				<div className="hours">
					<div className="data" id="hours">{time.hours}</div>
					<div className="text">HOURS</div>
				</div>
				<div className="minutes">
					<div className="data" id="minutes">{time.minutes}</div>
					<div className="text">MINUTES</div>
				</div>
				<div className="seconds">
					<div className="data" id="seconds">{time.seconds}</div>
					<div className="text">SECONDS</div>
				</div>
			</div>
    </div>
  );
}

export default Time;
