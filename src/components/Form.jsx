import React, { useState } from 'react';
import axios from 'axios';
import TextField, { Input } from '@material/react-text-field';
import { Snackbar } from '@material/react-snackbar';
import Button from '@material/react-button';



// DOM reference to the form. Use to create the form data.
let form;

const Form = (props) => {
    const {
        updateView
    } = props;

    const [timecredit, setTimecredit] = useState(0);
    const [auth_user, setAuthUser] = useState('');
    const [auth_pass, setAuthPass] = useState('');
    const [auth_voucher, setAuthVoucher] = useState('');

    const hideVoucher = auth_user || auth_pass ? { display: 'none' } : {};
    const hideUserAuth = auth_voucher ? { display: 'none' } : {};
    const credentialsRequired = auth_user || auth_pass ? true : false;

    // Request voucher timecredit and update the global state with the value, set it to an 
    // empty string again after 5s to be hable to call the Snackbar again.
    const checkVoucher = (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        axios.post('../server/check_voucher.php', formData)
            .then(res => {
                // TO-DO: Check the time available on the voucher and raise an alert with the data returned.
                console.log('Response Data', res.data);
                setTimecredit(res.data);
                setTimeout(() => {
                    setTimecredit(0);
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
                // i'ts a voucher send them to progress
                console.log('Response Data', res.data);
            })
            .catch((error) => {
                console.error(error);
                updateView('/error');
            })
    }

    const resetForm = () => {
        setAuthUser('');
        setAuthPass('');
        setAuthVoucher('');
    }

    return (
        <>
            <form onSubmit={onFormSubmit} ref={el => (form = el)}>
                <TextField
                    label='Username'
                    style={hideUserAuth}
                    outlined
                ><Input
                        name="auth_user"
                        id="auth_user"
                        type="text"
                        required={credentialsRequired}
                        disabled={auth_voucher !== ''}
                        value={auth_user}
                        onChange={event => setAuthUser(event.target.value)} />
                </TextField>
                <TextField
                    label='Password'
                    style={hideUserAuth}
                    outlined
                ><Input
                        name="auth_pass"
                        id="auth_pass"
                        type="password"
                        required={credentialsRequired}
                        disabled={auth_voucher !== ''}
                        value={auth_pass}
                        onChange={event => setAuthPass(event.target.value)} />
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
                        onChange={event => setAuthVoucher(event.target.value)} />
                </TextField>
                <Input name="redirurl" id="redirurl" type="hidden" value="$PORTAL_REDIRURL$" />
                <Input name="zone" id="zone" type="hidden" value="$PORTAL_ZONE$" />

                <Button type='submit' disabled={auth_user === '' && auth_pass === '' && auth_voucher === ''} raised>Authenticate</Button>
                <Button type='button' disabled={auth_voucher === ''} onClick={checkVoucher} raised style={hideVoucher}>Check Voucher</Button>
                <Button type='reset' disabled={auth_user === '' && auth_pass === '' && auth_voucher === ''} onClick={resetForm} raised>Reset form</Button>
            </form>
            {timecredit !== 0 && <Snackbar message={`Voucher available time is ${(timecredit / 60).toFixed(0)} minutes.`} />}
        </>
    )
}

export default Form;