import React from 'react';
import { useDispatch } from 'react-redux';
import { activeView } from '../store/actions';
import { Cell, Grid, Row } from '../components/LayoutGrid';
import { Button } from '../components/Button';
import illustration from '../images/no_internet_illustration.jpg';
import { Headline4, Body1 } from '../components/Typography';


const Error = () => {
    const dispatch = useDispatch();
    const boundActiveView = () => dispatch(activeView(''));

    return (
        <Grid maxWidth={450}>
            <Row>
                <Cell phone={12} tablet={12} desktop={12}>
                    <img src={illustration} alt="No internet ilustration" />
                    <Headline4>Oops, something <br />went wrong</Headline4>
                    <Body1>Try again, or check with the admin is this message keeps coming back.</Body1>
                    <Button raised onClick={boundActiveView}>Try Again</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Error;