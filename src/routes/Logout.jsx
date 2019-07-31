import React from 'react';
import axios from 'axios';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Button } from "@material/react-button";
import illustration from '../images/navigation_black_hole.png';
import illustration02 from '../images/secure_navigation.jpg';


const Logout = (props) => {

    const handleDisconnect = (e) => {
        e.preventDefault();

        axios.post('../server/logout.php')
            .then(res => console.log(res.data))
            .catch((error) => {
                console.error(error);

            })
    }

    return (
        <Grid>
            <Row>
                <Cell columns={12}>
                    <img src={Math.random() >= 0.5 ? illustration : illustration02} alt="Navigation illustration" />
                    <h1 className="text-center">Welcome back</h1>
                    <p className="text-center">Browse and get lost in the interet; come back here when you're
                    ready to walk away and end your session.</p>
                    <Button onClick={handleDisconnect} raised>Disconnect</Button>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Logout;