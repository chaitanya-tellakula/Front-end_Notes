import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      //   formatTime();
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    // setTime(new Date());
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return hours + ":" + minutes + ":" + seconds + " " + meridian;
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;

// every time page is rendered as the time changed it will execute the  call the formartTime() function
