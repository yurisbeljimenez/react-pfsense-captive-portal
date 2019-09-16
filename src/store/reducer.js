import { ACTIVE_VIEW, STORE_VOUCHER, DISCARD_VOUCHER, ACTIVATE_VOUCHER, AUTHENTICATE } from "./actions";

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
            return state;

        case AUTHENTICATE:
            console.log('Authenticate');
            break;

        default:
            return state;
    }
}