import React from 'react';
import logo from "../../../../assets/logo.png";

import { useTimer } from 'react-timer-hook';
import MyTimer from './timer';
import { FiArrowLeft } from 'react-icons/fi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const LogoPart = () => {
    const time = new Date();
  time.setSeconds(time.getSeconds() + 222600);
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
            <img className='w-[60%]' src={logo} alt="" />
            <MyTimer expiryTimestamp={time}></MyTimer>
            </div>
            <div className="flex items-center my-2 mr-6">
          <FiArrowLeft className="text-xl mr-1"></FiArrowLeft>
          <BsFillArrowRightCircleFill className="text-2xl"></BsFillArrowRightCircleFill>
        </div>
        </div>
    );
};

export default LogoPart;