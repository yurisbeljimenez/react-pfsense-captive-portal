import React, { useState } from 'react';
import Button from '@material/react-button';

const Banner = (props) => {
    const [open, setOpen] = useState(true);

    const close = () => {
        setOpen(!open);
    }

    const classes = open ? "banner banner-enter-animation" : "banner banner-exit-animation";
    return (
        <div className={classes}>
            <div className="banner-body">
                <div className="text-content">
                    <p>The voucher contains <b>{props.time}</b>. Would you like to use them?</p>
                </div>
                <div className="banner__actions">
                    <Button onClick={close}>continue as guest</Button>
                    <Button>use voucher</Button>
                </div>
            </div>
            <hr />
        </div>
    )
}


export default Banner;