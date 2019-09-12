import React from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from "@material/react-button";
import illustration from '../images/browsing_wifi.gif';


const Logout = (props) => {
    const { updateView } = props;

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
                    <img src={illustration} alt="Navigation illustration" />
                    <h1 className="text-center">Welcome back</h1>
                    <p className="text-center">Browse and get lost in the internet; come back here when you're
                    ready to walk away and end your session.</p>
                    <Button onClick={handleDisconnect} raised>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Logout;