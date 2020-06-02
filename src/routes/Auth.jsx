import React from 'react';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Headline1, Body1 } from "../components/Typography";
import Form from '../components/Form';
import Banner from '../components/Banner';


const Auth = () => {
    return (
        <>
            <Banner time={'30 minutes'} />
            <Grid>
                <Row>
                    <Cell>
                        <Headline1>Wifender</Headline1>
                        <Body1>Welcome to use our service; please input your <code>credentials/voucher</code> and click <b>Authenticate</b> to access the Internet.</Body1>
                        <Form />
                    </Cell>
                </Row>
            </Grid>
        </>
    )
}

export default Auth;