import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import illustration from '../images/no_internet_illustration.jpg';

const Error = (props) => {
    const { updateView } = props;

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <img src={illustration} alt="No internet ilustration" />
                    <h1 className='text-center'>Oops, something <br />went wrong</h1>
                    <p className="text-center">Try again, or check with the admin is this message keeps coming back.</p>
                    <Button raised onClick={() => updateView('')}>Try Again</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Error;