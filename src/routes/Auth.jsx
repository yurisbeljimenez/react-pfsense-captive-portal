import React from 'react';
import { withRouter } from 'react-router-dom';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';



const Auth = (props) => {
    const { user, password, voucher, history } = props;

    const checkVoucher = (e) => {
        e.preventDefault();
        console.log("Checking navigation credit")
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        history.push('/progress');
        console.log("Sending authetication to server")
    }

    return (
        <Grid>
            <Row>
                <Cell>
                    <h1 className="text-center">Authenticate</h1>
                    <p>Enter your username and password and click <b>Authenticate</b> to access the Internet.</p>
                    <form method="post" onSubmit={onFormSubmit} action="$PORTAL_ACTION$">
                        <TextField
                            label='User'
                            outlined
                        ><Input
                                name="auth_user"
                                id="auth_user"
                                type="text"
                                value={user}
                                onChange={(e) => console.log(e.currentTarget.value)} />
                        </TextField>
                        <TextField
                            label='Password'
                            outlined
                        ><Input
                                name="auth_pass"
                                id="auth_pass"
                                type="password"
                                value={password}
                                onChange={(e) => console.log(e.currentTarget.value)} />
                        </TextField>
                        <TextField
                            label='Voucher'
                            outlined
                        ><Input
                                name="auth_voucher"
                                id="auth_voucher"
                                type="text"
                                value={voucher}
                                onChange={(e) => console.log(e.currentTarget.value)} />
                        </TextField>
                        <Input name="redirurl" id="redirurl" type="hidden" value="$PORTAL_REDIRURL$" />
                        <Input name="zone" id="zone" type="hidden" value="$PORTAL_ZONE$" />

                        <Button type='submit' raised>Authenticate</Button>
                        <Button type='button' onClick={checkVoucher} raised>Check Voucher</Button>
                        <Button type='reset' raised>Reset form</Button>
                    </form>
                </Cell>
            </Row>
        </Grid>
    )
}

export default withRouter(Auth);