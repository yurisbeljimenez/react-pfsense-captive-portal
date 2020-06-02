import React from 'react';
import { Cell, Row } from '../components/LayoutGrid';

const Timer = (props) => {
    const { time } = props;


    const formatTime = (time) => {
        let minutes = Math.floor(time / 60000);
        let seconds = ((time % 60000) / 1000).toFixed(0);

        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        if (time > 60000) {
            // Minutos y segundos
            return (
                <h1 className="text-center counter">
                    <span className="minutes">{minutes}</span>&nbsp;&nbsp;:&nbsp;<span className="seconds">{seconds}</span>
                </h1>
            )
        } else if (time > 0 && time < 60000) {
            // segundos
            return (
                <h1 className="text-center counter">
                    <span className="seconds">{seconds}</span>
                </h1>
            )
        } else {
            return (
                <h1 className="text-center counter done">
                    <span className="seconds">00</span>
                </h1>
            )
        }
    }

    return (
        <Row>
            <Cell>
                {formatTime(time)}
            </Cell>
        </Row>
    )
}

export default Timer;