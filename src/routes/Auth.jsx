import React from 'react';
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
        handleTimecredit,
        resetForm,
        updateView
    } = props;

    // DOM reference to the form. Use to create the form data.
    let form;

    const hideVoucher = auth_user || auth_pass ? { display: 'none' } : {};
    const hideUserAuth = auth_voucher ? { display: 'none' } : {};

    // Request voucher timecredit and update the global state with the value, set it to an 
    // empty string again after 5s to be hable to call the Snackbar again.
    const checkVoucher = (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        axios.post('../server/check_voucher.php', formData)
            .then(res => {
                console.log('Response Data', res.data);
                handleTimecredit(res.data);
                setTimeout(() => {
                    handleTimecredit('');
                }, 5000);
            })
            .catch((error) => {
                console.error(error);
                updateView('/error');
            })
    }

    // Send the authetication form data to the server for authentication and redirect to the
    // Progress component on success
    const onFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        axios.post('$PORTAL_ACTION$', formData)
            .then(res => {
                // TO-DO: Check type of response data and if user send them to logout and if 
                // timecredit send them to progress
                console.log('Response Data', res.data);
                updateView('/progress');
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
                    <h1 className="text-center">Wifender</h1>
                    <p className="text-center">Welcome to use our service; please input your <code>credentials/voucher</code> and click <b>Authenticate</b> to access the Internet.</p>
                    <form onSubmit={onFormSubmit} ref={el => (form = el)}>
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

export default Auth;