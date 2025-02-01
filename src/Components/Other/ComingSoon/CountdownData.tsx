//@ts-nocheck
import { Days, Hours, Minutes, Seconds } from '@/Constant';
import { CountdownDataProp } from '@/Types/AuthType';
import React from 'react';
import Countdown from "react-countdown";

const CountdownData = () => {
    const Completionist = () => <span>{"You are good to go!"}</span>;

    const renderer: React.FC<CountdownDataProp> = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div>
                    <ul>
                        <li><span id="days" className="time digits">{days}</span><span className="title">{Days}</span></li>
                        <li><span className="time digits" id="hours">{hours}</span><span className="title">{Hours}</span></li>
                        <li><span className="time digits" id="minutes">{minutes}</span><span className="title">{Minutes}</span></li>
                        <li><span className="time digits" id="seconds">{seconds}</span><span className="title">{Seconds}</span></li>
                    </ul>
                </div>
            );
        }
    };

    const d = new Date();
    const countdown = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 15).getTime();

    return <Countdown date={countdown} renderer={renderer} />;
}

export default CountdownData;
