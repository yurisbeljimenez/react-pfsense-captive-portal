import React from 'react';
import { useSpring, animated } from 'react-spring'
import { slideUp, fadeIn } from '../springs/animations'
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import illustration from '../images/no_internet_illustration.jpg';

const Error = (props) => {
    const { updateView } = props;
    const slideUpAnimation = useSpring(slideUp);
    const fadeInAnimation = useSpring(fadeIn);

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <animated.img style={fadeInAnimation} src={illustration} alt="No internet ilustration" />
                    <animated.h1 style={slideUpAnimation} className='text-center'>Oops, something <br />went wrong</animated.h1>
                    <animated.p style={slideUpAnimation} className="text-center">Try again, or check with the admin is this message keeps coming back.</animated.p>
                    <Button raised onClick={() => updateView('')}>Try Again</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Error;