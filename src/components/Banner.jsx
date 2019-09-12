import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { slideDown, removeElement } from '../springs/animations'
import Button from '@material/react-button';
import '../scss/_banner.scss';


const Banner = () => {
    const [open, setOpen] = useState(false);
    const slideUpAnimation = useSpring(removeElement);
    const slideDownAnimation = useSpring(slideDown);

    const close = () => {
        setOpen(!open);
    }

    return (
        <animated.div style={open ? slideDownAnimation : slideUpAnimation}>
            <div className="banner">
                <div className="text-content">
                    <p>The voucher contains <b>30 minutes</b>. Would you like to use them?</p>
                </div>
                <div className="banner__actions">
                    <Button onClick={close}>continue as guest</Button>
                    <Button>use voucher</Button>
                </div>
            </div>
            <hr />
        </animated.div>
    )
}


export default Banner;