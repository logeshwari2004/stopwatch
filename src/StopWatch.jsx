// src/Stopwatch.jsx
import React, { useState, useEffect } from 'react';
import './StopWatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const startHandler = () => {
    setRunning(true);
  };

  const stopHandler = () => {
    setRunning(false);
  };

  const resetHandler = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <div className="time">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={startHandler} disabled={running}>
          Start
        </button>
        <button onClick={stopHandler} disabled={!running}>
          Stop
        </button>
        <button onClick={resetHandler} disabled={!time && !running}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;