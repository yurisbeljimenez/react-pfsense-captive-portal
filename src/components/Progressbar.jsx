import React from 'react';
import * as progressbar from 'progressbar.js';

class Progressbar extends React.Component {

    line;
    reference = React.createRef();
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

    componentDidMount() {
        this.line = new progressbar.Line(this.reference.current, this.options);
        this.line.animate(1);
    }

    componentDidUpdate() {
        if (this.props.usage > 0) {
            this.line.animate(this.props.usage);
        } else { return }
    }

    render() {
        return (
            <div ref={this.reference}></div>
        )
    }
}

export default Progressbar;