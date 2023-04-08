import React from 'react';
import logo from "../../../../assets/logo.png";

import { useTimer } from 'react-timer-hook';
import MyTimer from './timer';

const LogoPart = () => {
    const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
    return (
        <div className='flex items-center'>
            <img className='w-[30%]' src={logo} alt="" />
            <MyTimer expiryTimestamp={time}></MyTimer>
        </div>
    );
};

export default LogoPart;