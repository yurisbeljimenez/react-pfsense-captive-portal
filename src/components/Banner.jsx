import React from 'react';
import { Button } from '../components/Button'

const Banner = () => {
    const voucher = '';
    const classes = voucher !== '' ? "banner banner-enter-animation" : "banner";
    return (
        <div className={classes}>
            <div className="banner-body">
                <div className="text-content">
                    <p>The voucher contains <b>minutes</b>. Would you like to use them?</p>
                </div>
                <div className="banner__actions">
                    <Button >continue as guest</Button>
                    <Button >use voucher</Button>
                </div>
            </div>
            <hr />
        </div>
    )
}


export default Banner;