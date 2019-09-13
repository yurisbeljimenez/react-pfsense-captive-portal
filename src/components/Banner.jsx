import React from 'react';
import Button from '@material/react-button'

// Store
import { useSelector, useDispatch } from 'react-redux';
import { DISCARD_VOUCHER, ACTIVATE_VOUCHER } from '../store/actions';

const Banner = (props) => {
    const voucher = useSelector(state => state.voucher);
    const dispatch = useDispatch();


    const classes = voucher !== '' ? "banner banner-enter-animation" : "banner";
    return (
        <div className={classes}>
            <div className="banner-body">
                <div className="text-content">
                    <p>The voucher contains <b>{props.time}</b>. Would you like to use them?</p>
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