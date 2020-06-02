import React from 'react';
import { useDispatch } from 'react-redux';
import { activeView } from '../store/actions';
import axios from 'axios';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Headline1, Body1 } from "../components/Typography";
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
        <Grid>
            <Row>
                <Cell>
                    <img src={illustration} alt="Navigation illustration" />
                    <Headline1>Welcome back</Headline1>
                    <Body1>Browse and get lost in the internet; come back here when you're
                    ready to walk away and end your session.</Body1>
                    <Button raised onClick={handleDisconnect}>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Logout;