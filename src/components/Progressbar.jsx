import React, { useEffect, useRef } from 'react';
import * as progressbar from 'progressbar.js';
import useInterval from '../hooks/useInterval';

const Progressbar = ({ usage }) => {

    const line = useRef(),
        reference = useRef(),
        options = {
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
        line.current = new progressbar.Line(reference.current, options);
        return () => line.current.destroy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useInterval(() => {
        if (usage > 0) {
            line.current.animate(usage);
        } else { return }
    }, 1000)


    return (
        <div ref={reference}></div>
    )
}

export default Progressbar;