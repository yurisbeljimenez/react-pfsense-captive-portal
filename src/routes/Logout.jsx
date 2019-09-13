import React from 'react';
import { useDispatch } from 'react-redux';
import { activeView } from '../store/actions';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from "@material/react-button";
import illustration from '../images/browsing_wifi.gif';

const dispatch = useDispatch();
const boundActiveView = (view) => dispatch(activeView(view));

const Logout = () => {

    const handleDisconnect = (e) => {
        e.preventDefault();

        axios.post('../server/logout.php')
            .then(res => {
                console.log(res.data)
                boundActiveView('');
            })
            .catch((error) => {
                console.error(error);
                boundActiveView('/error');
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