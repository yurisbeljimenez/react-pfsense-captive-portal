import { ACTIVATE_VIEW } from "../actionTypes";

export default function (state, { type, payload }) {
    switch (type) {
        case ACTIVATE_VIEW:
            return {
                ...state,
                active_view: payload
            }
        default:
            return state;
    }
}