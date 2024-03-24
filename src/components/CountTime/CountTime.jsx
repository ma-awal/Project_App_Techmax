import React, { useState, useEffect } from 'react';
import './c-time.css';
const CountTime = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date for the countdown
    const targetDate = new Date(); // Set your target date here
    targetDate.setDate(targetDate.getDate() + 300); // Add 300 days to the target date

    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      // Calculate the remaining days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      // Clear the interval when the countdown reaches 0
      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="c-time mt-4 d-flex align-items-center justify-content-center justify-content-sm-between">
      <div className="single-count">
        <h1> {countdown.days}</h1>
        <p>Days</p>
      </div>

      <div className="single-count">
        <h1> {countdown.hours}</h1>
        <p>Hours</p>
      </div>

      <div className="single-count">
        <h1> {countdown.minutes}</h1>
        <p>Minutes</p>
      </div>

      <div className="single-count">
        <h1> {countdown.seconds}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountTime;
