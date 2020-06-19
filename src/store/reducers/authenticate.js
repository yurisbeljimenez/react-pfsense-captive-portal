import { AUTHENTICATE, DISCONNECT } from "../actionTypes";

export default function (state, { type, payload }) {
    switch (type) {
        case AUTHENTICATE:
            return {
                // To-Do: Login the user here.
            }
        case DISCONNECT:
            return {
                // To-Do: Disconnect user here.
            }
        default:
            return state;
    }
}