import React from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from "@material/react-button";
import { useSpring, animated } from 'react-spring'
import { slideUp, fadeIn } from '../springs/animations'
import illustration from '../images/navigation_black_hole.png';
import illustration02 from '../images/secure_navigation.jpg';


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
            })
    }

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <animated.img style={fadeInAnimation} src={Math.random() >= 0.5 ? illustration : illustration02} alt="Navigation illustration" />
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