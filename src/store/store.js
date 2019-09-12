import { createStore } from 'react-redux';

const initialState = {
    voucher: '',
    time: '',
    active_view: ''
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)