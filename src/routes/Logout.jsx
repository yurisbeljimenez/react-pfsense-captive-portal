import React from 'react';
import { useDispatch } from 'react-redux';
import { activeView } from '../store/actions';
import axios from 'axios';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Headline4, Body1 } from "../components/Typography";
import { Button } from "../components/Button";
import illustration from '../images/browsing_wifi.gif';


const Logout = () => {
    const dispatch = useDispatch();
    const boundActiveView = (view) => dispatch(activeView(view));

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
        <Grid maxWidth={450}>
            <Row>
                <Cell phone={12} tablet={12} desktop={12}>
                    <img src={illustration} alt="Navigation illustration" />
                    <Headline4>Welcome back</Headline4>
                    <Body1>Browse and get lost in the internet; come back here when you're
                    ready to walk away and end your session.</Body1>
                    <Button raised onClick={handleDisconnect}>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Logout;