import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';


export default function Logout() {
    return (
        <Grid>
            <Row>
                <Cell>
                    <form method="POST" action="<?=$logouturl;?>">
                        <input name="logout_id" type="hidden" value="<?=$sessionid;?>" />
                        <input name="zone" type="hidden" value="<?=$cpzone;?>" />
                        <input name="logout" type="submit" value="Logout" />
                    </form>'
                </Cell>
            </Row>
        </Grid>
    )
}