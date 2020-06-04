import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = {
    voucher: '',
    active_view: '/'
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)