import React from 'react';
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



    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <h1 className="text-center">Wifender</h1>
                    <p className="text-center">Welcome to use our service; please input your <code>credentials/voucher</code> and click <b>Authenticate</b> to access the Internet.</p>
                    <Form
                        auth_user={auth_user}
                        auth_pass={auth_pass}
                        auth_voucher={auth_voucher}
                        handleInputChange={handleInputChange}
                        handleTimecredit={handleTimecredit}
                        resetForm={resetForm}
                        updateView={updateView}></Form>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Auth;