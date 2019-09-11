import React from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from "@material/react-button";
import { useSpring, animated } from 'react-spring'
import { slideUp, fadeIn } from '../springs/animations'
import illustration from '../images/browsing_wifi.gif';


const Logout = (props) => {
    const { updateView } = props;
    const slideUpAnimation = useSpring(slideUp);
    const fadeInAnimation = useSpring(fadeIn);

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
                    <animated.img style={fadeInAnimation} src={illustration} alt="Navigation illustration" />
                    <animated.h1 style={slideUpAnimation} className="text-center">Welcome back</animated.h1>
                    <animated.p style={slideUpAnimation} className="text-center">Browse and get lost in the internet; come back here when you're
                    ready to walk away and end your session.</animated.p>
                    <Button onClick={handleDisconnect} raised>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Logout;