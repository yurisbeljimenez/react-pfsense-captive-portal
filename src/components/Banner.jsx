import React from 'react';
import Button from '@material/react-button';
import '../scss/_banner.scss';


const Banner = () => {

    const close = () => {
    }

    return (
        <div className="banner">
            <div className="banner-body">
                <div className="text-content">
                    <p>The voucher contains <b>30 minutes</b>. Would you like to use them?</p>
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