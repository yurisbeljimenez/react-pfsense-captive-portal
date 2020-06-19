import React from 'react';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Button } from '../components/Button';
import { Headline4, Body1 } from '../components/Typography';


const Error = () => {

    return (
        <Grid maxWidth={450}>
            <Row>
                <Cell phone={12} tablet={12} desktop={12}>
                    <div className="text-center">
                        <Headline4>Oops, something <br />went wrong</Headline4>
                        <Body1>Try again, or check with the admin is this message keeps coming back.</Body1>
                        <Button raised>Try Again</Button>
                    </div>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Error;