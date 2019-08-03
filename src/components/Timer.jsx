import React from 'react';
import { Cell, Row } from '@material/react-layout-grid';

const Timer = (props) => {
    const { time } = props;


    const formatTime = (time) => {
        let minutes = Math.floor(time / 60000);
        let seconds = ((time % 60000) / 1000).toFixed(0);

        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        if (time > 0) {
            return (
                <h1 className="text-center counter">
                    <span className="minutes">{minutes}</span>&nbsp;&nbsp;:&nbsp;<span className="seconds">{seconds}</span>
                </h1>
            )
        } else {
            return (
                <h1 className="text-center counter done">
                    <span className="minutes">00</span>&nbsp;&nbsp;:&nbsp;<span className="seconds">00</span>
                </h1>
            )
        }
    }

    return (
        <Row>
            <Cell columns={12}>
                {formatTime(time)}
            </Cell>
        </Row>
    )
}

export default Timer;