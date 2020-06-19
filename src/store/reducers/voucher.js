import { CHECK_VOUCHER, STORE_VOUCHER, ACTIVATE_VOUCHER, DISCARD_VOUCHER } from "../actionTypes";

export default function (state, { type, payload }) {
    switch (type) {
        case CHECK_VOUCHER:
            return {
                //To-Do: Execute voucher check here
            }
        case STORE_VOUCHER:
            return {
                ...state,
                voucher: payload
            }

        case ACTIVATE_VOUCHER:
            return {
                //To-Do: Submit voucher for navigation here
            }

        case DISCARD_VOUCHER:
            return {
                ...state,
                voucher: ''
            }

        default:
            return state;
    }
}