import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import Progressbar from '../components/Progressbar'
import Timer from '../components/Timer';
import useInterval from '../hooks/useInterval';

const Progress = (props) => {
    const { updateView } = props;
    const [startTime, setStartTime] = useState(0);
    const [time, setTime] = useState(0);
    const [usage, setUsage] = useState(1);

    useEffect(() => {
        axios.post('../server/get_timer.php')
            .then((res) => {
                console.log(res.data);
                setTime(res.data);
                setStartTime(res.data);
            })
            .catch((error) => {
                console.error(error);
                setTime(60);
                setStartTime(60);
                // updateView('/error');
            });
    }, [updateView])


    useInterval(() => {
        if (time > 0) {
            setTime(time - 1)
            setUsage(time / startTime);
        } else {
            updateView('');
        }
    }, 1000);

    const handleDisconnect = (e) => {
        e.preventDefault();

        axios.post('../server/logout.php')
            .then(res => {
                console.log(res.data)
                updateView('');
            })
            .catch((error) => {
                console.error(error);
                updateView('/error');
            })
    }

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <Timer time={time} />
                    <Progressbar usage={usage} />
                    <h1 className="text-center">Disconnection Countdown</h1>
                    <p className="text-center">The navigation session will be disabled when the timer counts to cero.</p>
                    <Button onClick={handleDisconnect} raised>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Progress;