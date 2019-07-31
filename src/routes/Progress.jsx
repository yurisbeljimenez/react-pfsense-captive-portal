import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import Timer from '../Timer';
import useInterval from '../useInterval';


const Progress = (props) => {
    const [time, setTime] = useState(154);

    useEffect(() => {
        axios.post('../server/get_timer.php')
            .then((res) => {
                console.log(res.data);
                setTime(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    })


    useInterval(() => {
        if (time > 0) {
            setTime(time - 1)
        }
        // To-DO: Else navigate to Auth
    }, 1000);

    const handleDisconnect = (e) => {
        e.preventDefault();

        axios.post('../server/logout.php')
            .then(res => console.log(res.data))
            .catch((error) => {
                console.error(error);

            })
    }

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <Timer time={time} />
                    <p className="text-center">The navigation session will be disabled when the timer counts to cero.</p>
                    <Button onClick={handleDisconnect} raised>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Progress;