import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = {
    voucher: 'zxcvxzcvxcv',
    timecredit: '5',
    active_view: '/',
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)