import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { activeView } from '../store/actions';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Headline4, Body1 } from '../components/Typography';
import { Button } from '../components/Button';
import Progressbar from '../components/Progressbar'
import Timer from '../components/Timer';
import useInterval from '../hooks/useInterval';


const Progress = () => {

    const [time, setTime] = useState(0);
    const [usage, setUsage] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [future, setFuture] = useState(0);
    const dispatch = useDispatch();
    const boundActiveView = (view) => dispatch(activeView(view));

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
        setUsage(1 - ((now - startTime) / (future - startTime - 1000)));
    }

    // TO-DO: Get the timer
    useEffect(() => {
        axios.post('../server/get_timer.php')
            .then((res) => {
                console.log(res.data);
                // TO-DO: Grab the disconnection time here and update the future and startTime.
                // setFuture();
                // setStartTime()
                handleTime();
            })
            .catch((error) => {
                console.error(error);
                timeHelper(1.1)
                // boundActiveView('/error');
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useInterval(() => {
        if (time >= 0) {
            handleTime(future);
        } else {
            boundActiveView('')
        }
    }, 1000);

    const handleDisconnect = (e) => {
        e.preventDefault();
        axios.post('../server/logout.php')
            .then(res => {
                console.log(res.data)
                boundActiveView('');
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <Grid>
            <Row>
                <Cell>
                    <Timer time={time} />
                    <Progressbar usage={usage} />
                    <Headline4>Disconnection countdown</Headline4>
                    <Body1>Connection will be <b>terminated</b> when timer counts to zero!</Body1>
                    <Button raised onClick={handleDisconnect}>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Progress;