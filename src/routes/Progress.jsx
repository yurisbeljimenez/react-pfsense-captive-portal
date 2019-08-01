import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import Timer from '../Timer';
import useInterval from '../useInterval';

const Progress = (props) => {
    const { updateView } = props;
    const [time, setTime] = useState(3000);

    useEffect(() => {
        axios.post('../server/get_timer.php')
            .then((res) => {
                console.log(res.data);
                setTime(res.data);
            })
            .catch((error) => {
                console.error(error);
                // updateView('/error');
            });
    }, [updateView])


    useInterval(() => {
        if (time > 0) {
            setTime(time - 1)
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
                    <h1 className="text-center">Disconnection Countdown</h1>
                    <p className="text-center">The navigation session will be disabled when the timer counts to cero.</p>
                    <Button onClick={handleDisconnect} raised>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Progress;