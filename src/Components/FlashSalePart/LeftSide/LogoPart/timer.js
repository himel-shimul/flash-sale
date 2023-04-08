import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '24px'}}>
        <span className='bg-[#c5c1fb] rounded p-1 text-[#554FA6]'>{days}d</span> : <span  className='bg-[#c5c1fb] rounded p-1 text-[#554FA6]'>{hours}h</span> : <span  className='bg-[#c5c1fb] rounded p-1 text-[#554FA6]'>{minutes}m</span> : <span  className='bg-[#c5c1fb] rounded p-1 text-[#554FA6]'>{seconds}s</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}

export default MyTimer;