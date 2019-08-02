import React, { useEffect } from 'react';
import * as progressbar from 'progressbar.js';

const Progressbar = (props) => {
    const { usage } = props;

    const reference = React.createRef();
    const options = {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 500,
        color: '#3A4250',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' },
        from: { color: '#FB0F0E' },
        to: { color: '#55C2B8' },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    }

    useEffect(() => {
        let line = new progressbar.Line(reference, options);
        line.animate(usage);
    }, [usage]);

    return (
        <div ref={reference}></div>
    )
}

export default Progressbar;