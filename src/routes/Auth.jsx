import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { useSpring, animated } from 'react-spring';
import { slideUp } from '../springs/animations';
import Form from '../components/Form';
import Banner from '../components/Banner';


const Auth = (props) => {
    const {
        updateView
    } = props;

    const slideUpAnimation = useSpring(slideUp);

    return (
        <>
            <Banner />
            <Grid>
                <Row>
                    <Cell columns={12}>
                        <animated.h1 style={slideUpAnimation} className="text-center">Wifender</animated.h1>
                        <animated.p style={slideUpAnimation} className="text-center">Welcome to use our service; please input your <code>credentials/voucher</code> and click <b>Authenticate</b> to access the Internet.</animated.p>
                        <Form updateView={updateView} />
                    </Cell>
                </Row>
            </Grid>
        </>
    )
}

export default Auth;