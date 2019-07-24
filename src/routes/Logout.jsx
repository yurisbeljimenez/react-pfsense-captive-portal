import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Input } from "@material/react-text-field";
import { Button } from "@material/react-button";


const Logout = (props) => {
    const { sessionid, zone } = props;
    const handleDisconnect = (e) => {
        e.preventDefault();
        console.log('Disconnecting the user');
    }
    return (
        <Grid>
            <Row>
                <Cell>
                    <form method="POST" action="<?=$logouturl;?>">
                        <Input name="logout_id" type="hidden" value={sessionid} />
                        <Input name="zone" type="hidden" value={zone} />
                        {/* <Input name="logout_id" type="hidden" value="<?=$sessionid;?>" /> */}
                        {/* <Input name="zone" type="hidden" value={"<?=$cpzone;?>"} /> */}
                        <Button onClick={handleDisconnect} raised>Disconnect</Button>
                    </form>
                </Cell>
            </Row>
        </Grid>
    )
}

export default Logout;