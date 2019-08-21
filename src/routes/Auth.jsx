import React from 'react';
import { useSpring, animated } from 'react-spring'
import { slideUp } from '../springs/animations'
import Form from '../components/Form';
import { Cell, Grid, Row } from '@material/react-layout-grid';


const Auth = (props) => {
    const {
        auth_user,
        auth_pass,
        auth_voucher,
        handleInputChange,
        handleTimecredit,
        resetForm,
        updateView
    } = props;

    const slideUpAnimation = useSpring(slideUp);

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <animated.h1 style={slideUpAnimation} className="text-center">Wifender</animated.h1>
                    <animated.p style={slideUpAnimation} className="text-center">Welcome to use our service; please input your <code>credentials/voucher</code> and click <b>Authenticate</b> to access the Internet.</animated.p>
                    <Form
                        auth_user={auth_user}
                        auth_pass={auth_pass}
                        auth_voucher={auth_voucher}
                        handleInputChange={handleInputChange}
                        handleTimecredit={handleTimecredit}
                        resetForm={resetForm}
                        updateView={updateView} />
                </Cell>
            </Row>
        </Grid>
    )
}

export default Auth;