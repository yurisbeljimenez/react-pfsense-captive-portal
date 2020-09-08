import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
    voucher: '',
    active_view: '/progress',
}

export default createStore(
    rootReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)