import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';

const Auth = (props) => {
    const {
        auth_user,
        auth_pass,
        auth_voucher,
        handleInputChange,
        resetForm,
        history } = props;

    const hideVoucher = auth_user || auth_pass ? { display: 'none' } : {};
    const hideUserAuth = auth_voucher ? { display: 'none' } : {};

    const checkVoucher = (e) => {
        e.preventDefault();
        console.log("Checking navigation credit")
        axios.post('../server/check_voucher.php', { voucher: auth_voucher })
            .then(res => {
                console.log('Complete Response', res);
                console.log('Response Data', res.data);
            })
            .catch((error) => console.error(error))
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("Sending authetication to server")
        console.log({ auth_user: auth_user, auth_pass: auth_pass, auth_voucher: auth_voucher })
        axios.post('$PORTAL_ACTION$', {
            auth_user: auth_user,
            auth_pass: auth_pass,
            auth_voucher: auth_voucher
        })
            .then(res => {
                console.log('Complete Response', res);
                console.log('Response Data', res.data);
                history.push('/progress');
            })
            .catch((error) => console.error(error))
    }

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <h1 className="text-center">Authenticate</h1>
                    <p>Enter your <code>credentials/voucher</code> and click <b>Authenticate</b> to access the Internet.</p>
                    <form onSubmit={onFormSubmit}>
                        <TextField
                            label='Username'
                            style={hideUserAuth}
                            outlined
                        ><Input
                                name="auth_user"
                                id="auth_user"
                                type="text"
                                disabled={auth_voucher !== ''}
                                value={auth_user}
                                onChange={handleInputChange} />
                        </TextField>
                        <TextField
                            label='Password'
                            style={hideUserAuth}
                            outlined
                        ><Input
                                name="auth_pass"
                                id="auth_pass"
                                type="password"
                                disabled={auth_voucher !== ''}
                                value={auth_pass}
                                onChange={handleInputChange} />
                        </TextField>
                        <TextField
                            label='Voucher'
                            style={hideVoucher}
                            outlined
                        ><Input
                                name="auth_voucher"
                                id="auth_voucher"
                                type="text"
                                disabled={auth_user !== '' || auth_pass !== ''}
                                value={auth_voucher}
                                onChange={handleInputChange} />
                        </TextField>
                        <Input name="redirurl" id="redirurl" type="hidden" value="$PORTAL_REDIRURL$" />
                        <Input name="zone" id="zone" type="hidden" value="$PORTAL_ZONE$" />

                        <Button type='submit' disabled={auth_user === '' && auth_pass === '' && auth_voucher === ''} raised>Authenticate</Button>
                        <Button type='button' disabled={auth_voucher === ''} onClick={checkVoucher} raised style={hideVoucher}>Check Voucher</Button>
                        <Button type='reset' disabled={auth_user === '' && auth_pass === '' && auth_voucher === ''} onClick={resetForm} raised>Reset form</Button>
                    </form>
                </Cell>
            </Row>
        </Grid>
    )
}

export default withRouter(Auth);