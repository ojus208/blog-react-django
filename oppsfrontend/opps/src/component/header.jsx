import React, { useState, useEffect } from "react";

export default function Header() {

  const [time, setTime] = useState([]);
  const [greeting, setGreeting] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime([
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds(),
        new Date().getDay(),
      ]);
    }, 1000);
    const days = [
      "Monday",
      "Tuesday",
      "wendsday",
      "Thrusday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    setDay(days[time[3] - 1]);
    const greetings = ["Good morning", "Good afternoon", "Good evening"];
    if (time[0] > 4 && time[0] <= 12) {
      setGreeting(greetings[0]);
    } else if (time[0] > 12 && time[0] <= 18) {
      setGreeting(greetings[1]);
    } else {
      setGreeting(greetings[2]);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);



  return (
    <div className="h-header">
        <h1>{greeting}</h1>
        <div className="h-time">
          <div className="day">{day}</div>
          <div className="time">
            <span className="timenum">
              {time[0]}:{time[1]}:{time[2]}
            </span>
          </div>
        </div>
      </div>
  )
}
