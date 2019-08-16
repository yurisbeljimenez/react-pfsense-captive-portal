import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import Progressbar from '../components/Progressbar'
import Timer from '../components/Timer';
import useInterval from '../hooks/useInterval';

const Progress = (props) => {
    const { updateView } = props;

    const [time, setTime] = useState(0);
    const [usage, setUsage] = useState(1);
    const [startTime, setStartTime] = useState(0);
    const [future, setFuture] = useState(0);

    // TO-DO: remove for production since the future will be sent from the server 
    const timeHelper = (minutes) => {
        let now = Date.now();
        let future = now + (minutes * 60000)
        setFuture(future);
        setStartTime(now)
    }
    // End of remove for production

    const handleTime = (future) => {
        let now = Date.now();
        setTime(future - now);
        setUsage(1 - ((now - startTime) / (future - startTime)));
    }

    // TO-DO: Get the timer
    useEffect(() => {
        axios.post('../server/get_timer.php')
            .then((res) => {
                console.log(res.data);
                // TO-DO: Grab the disconnection time here;
            })
            .catch((error) => {
                console.error(error);
                // TO-DO: Remove remove after testing the timer
                timeHelper(.25)
                // updateView('/error');
            });
    }, [updateView])

    useInterval(() => {
        if (time >= 0) {
            handleTime(future);
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
                    <p className="text-center">Connection will be terminated when timer counts to zero!</p>
                    <Button onClick={handleDisconnect} raised>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Progress;