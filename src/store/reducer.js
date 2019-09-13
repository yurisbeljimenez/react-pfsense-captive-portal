import { ACTIVE_VIEW, STORE_VOUCHER, DISCARD_VOUCHER, ACTIVATE_VOUCHER } from "./actions";

export function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIVE_VIEW:
            return {
                ...state,
                active_view: payload
            }
        case STORE_VOUCHER:
            return {
                ...state,
                voucher: payload
            }
        case DISCARD_VOUCHER:
            return {
                ...state,
                voucher: ''
            }
        case ACTIVATE_VOUCHER:
            console.log('Activating the voucher');
        default:
            return state;
    }
}