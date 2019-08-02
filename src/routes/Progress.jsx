import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import Progressbar from '../components/Progressbar'
import Timer from '../components/Timer';
import useInterval from '../hooks/useInterval';

const Progress = (props) => {
    const { updateView } = props;

    const [time, setTime] = useState(null);
    const [usage, setUsage] = useState(1);

    // TO-DO: Get the timer
    useEffect(() => {
        axios.post('../server/get_timer.php')
            .then((res) => {
                console.log(res.data);
                // TO-DO: Grab the disconnection time here;
            })
            .catch((error) => {
                console.error(error);
                // TO-DO: Uncomment below for production
                // updateView('/error');
            });
    }, [updateView])

    useInterval(() => {
        handleTime();
    }, 1000);

    const handleTime = () => {
        let now = Date.now();
        let future = Date.now() + 300;
        setTime(future - now);
        setUsage(now / future)
    }

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