import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = {
    voucher: 'add',
    timecredit: '2',
    active_view: '/',
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)