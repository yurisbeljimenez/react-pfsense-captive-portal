import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Headline4, Body1 } from '../components/Typography';
import { Button } from '../components/Button';
import Progressbar from '../components/Progressbar'
import Timer from '../components/Timer';
import useInterval from '../hooks/useInterval';


const Progress = () => {

    const [time, setTime] = useState(0);
    const [usage, setUsage] = useState(0);
    const [startTime, setStartTime] = useState();
    const [future, setFuture] = useState();

    const handleTime = (future) => {
        let now = Date.now();
        setTime(future - now);
        setUsage(1 - ((now - startTime) / (future - startTime - 1000)));
    }

    // TO-DO: Get the timer
    useEffect(() => {
        // Tp-Do: Get the start time and the future from the server
        setStartTime(Date.now())
        setFuture(Date.now() + 10000)
    }, [])

    useInterval(() => {
        if (time >= 0) {
            handleTime(future);
        } else {
            // To-Do: Send to user to the auth path
        }
    }, 1000);

    return (
        <Grid maxWidth={450}>
            <Row>
                <Cell phone={12} tablet={12} desktop={12}>
                    <Timer time={time} />
                    <Progressbar usage={usage} />
                    <div className="text-center">
                        <Headline4>Disconnection countdown</Headline4>
                        <Body1>Connection will be <b>terminated</b> when timer counts to zero!</Body1>
                        <Button raised >Disconnect</Button>
                    </div>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Progress;