import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import Timer from '../Timer';


const Progress = (props) => {
    const { history } = props;
    const [time, setTime] = useState(300);

    useEffect(() => {
        axios.post('../server/get_timer.php')
            .then((res) => {
                console.log(res.data);
                setTime(res.data);
            })
            .catch((error) => {
                console.error(error);
                // TO-DO: Uncomment for pproduction.
                // history.push('/error');
            })
    })

    const handleDisconnect = (e) => {
        e.preventDefault();

        axios.post('../server/logout.php')
            .then(res => console.log(res.data))
            .catch((error) => {
                console.error(error);
                history.push('/error');
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

export default withRouter(Progress);