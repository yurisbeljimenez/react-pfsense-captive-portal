import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Form from '../components/Form';
import Banner from '../components/Banner';


const Auth = () => {
    return (
        <>
            <Banner time={'30 minutes'} />
            <Grid>
                <Row>
                    <Cell columns={12}>
                        <h1 className="text-center">Wifender</h1>
                        <p className="text-center">Welcome to use our service; please input your <code>credentials/voucher</code> and click <b>Authenticate</b> to access the Internet.</p>
                        <Form />
                    </Cell>
                </Row>
            </Grid>
        </>
    )
}

export default Auth;