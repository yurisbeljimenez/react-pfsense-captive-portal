import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { slideDown, removeElement } from '../springs/animations'
import Button from '@material/react-button';
import '../scss/_banner.scss';


const Banner = () => {
    const [visible, setVisible] = useState(true);
    const slideUpAnimation = useSpring(removeElement);
    const slideDownAnimation = useSpring(slideDown);

    const updateVisibility = () => {
        setVisible(!visible);
    }

    return (
        <animated.div style={visible ? slideDownAnimation : slideUpAnimation} className="banner">
            <div className="text-content">
                <p>The voucher contains <b>30 minutes</b>. Would you like to use them?</p>
            </div>
            <div className="banner__actions">
                <Button onClick={updateVisibility}>continue as guest</Button>
                <Button>use voucher</Button>
            </div>
        </animated.div>
    )
}


export default Banner;