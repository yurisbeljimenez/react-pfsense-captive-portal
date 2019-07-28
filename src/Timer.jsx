import React from 'react';
import { Cell, Row } from '@material/react-layout-grid';

const Timer = (props) => {
    const { time } = props;

    const formatTime = (time) => {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
    }

    return (
        <Row>
            <Cell columns={12}>
                <h1 className="text-center counter">{formatTime(time)}</h1>
            </Cell>
        </Row>
    )
}

export default Timer;