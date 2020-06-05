import React from 'react';
import { Button } from '../components/Button'

// Store
import { useSelector, useDispatch } from 'react-redux';
import { DISCARD_VOUCHER, ACTIVATE_VOUCHER } from '../store/actions';

const Banner = () => {
    const voucher = useSelector(state => state.voucher);
    const timecredit = useSelector(state => state.timecredit)
    const dispatch = useDispatch();


    const classes = voucher !== '' ? "banner banner-enter-animation" : "banner";
    return (
        <div className={classes}>
            <div className="banner-body">
                <div className="text-content">
                    <p>The voucher contains <b>{timecredit} minutes</b>. Would you like to use them?</p>
                </div>
                <div className="banner__actions">
                    <Button onClick={() => dispatch({ type: DISCARD_VOUCHER })}>continue as guest</Button>
                    <Button onClick={() => dispatch({ type: ACTIVATE_VOUCHER })}>use voucher</Button>
                </div>
            </div>
            <hr />
        </div>
    )
}


export default Banner;