import { AUTHENTICATE, DISCONNECT, ACTIVATE_VIEW, CHECK_VOUCHER, STORE_VOUCHER, DISCARD_VOUCHER, ACTIVATE_VOUCHER } from "./actionTypes";

export const authenticate = (data) => ({ type: AUTHENTICATE, payload: data })

export const disconnect = () => ({ type: DISCONNECT })

export const activateView = (view) => ({ type: ACTIVATE_VIEW, payload: view })

export const checkVoucher = (voucher) => ({ type: CHECK_VOUCHER, payload: voucher })

export const storeVoucher = (voucher) => ({ type: STORE_VOUCHER, payload: voucher })

export const activateVoucher = () => ({ type: ACTIVATE_VOUCHER })

export const discardVoucher = () => ({ type: DISCARD_VOUCHER })


