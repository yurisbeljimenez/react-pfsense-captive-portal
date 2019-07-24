import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import '@material/react-layout-grid/index.scss';
import '@material/react-typography/index.scss';
import '@material/react-text-field/index.scss';
import '@material/react-button/index.scss';
import '@material/react-dialog/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
