import React, { useEffect } from 'react';
import * as progressbar from 'progressbar.js';

const Progressbar = (props) => {
    const { time } = props;

    let reference = React.createRef();
    let semiCircle = new progressbar.SemiCircle(reference.current);

    useEffect(() => {
        semiCircle.animate(1);
    }, [time]);

    return (
        <div ref={reference}></div>
    )
}

export default Progressbar;