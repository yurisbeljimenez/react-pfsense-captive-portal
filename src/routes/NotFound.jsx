import React from 'react';
import { withRouter } from 'react-router-dom';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from '@material/react-button';
import page_not_found from '../images/page_not_found.jpg';


const NotFound = (props) => {
    const { history } = props;

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <img src={page_not_found} alt="Page not found ilustration" />
                    <h1 className="text-center">Sorry.</h1>
                    <p className="text-center">Looks like something went wrong on our end or the page you're looking for doesnt exist.</p>
                    <Button raised onClick={() => history.replace('/')}>Back to known territory</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default withRouter(NotFound);