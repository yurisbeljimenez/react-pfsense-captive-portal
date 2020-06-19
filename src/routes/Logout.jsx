import React from 'react';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Headline4, Body1 } from "../components/Typography";
import { Button } from "../components/Button";


const Logout = () => {
    return (
        <Grid maxWidth={450}>
            <Row>
                <Cell phone={12} tablet={12} desktop={12}>
                    <div className="text-center">
                        <Headline4>Welcome back</Headline4>
                        <Body1>Browse and get lost in the internet; come back here when you're
                    ready to walk away and end your session.</Body1>
                        <Button raised >Disconnect</Button>
                    </div>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Logout;