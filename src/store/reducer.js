import { ACTIVE_VIEW, STORE_VOUCHER, REMOVE_VOUCHER } from "./actions";

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
        case REMOVE_VOUCHER:
            return {
                ...state,
                voucher: ''
            }
        default:
            return state;
    }
}