export const ACTIVE_VIEW = 'ACTIVE_VIEW';
export const STORE_VOUCHER = 'STORE_VOUCHER';
export const REMOVE_VOUCHER = 'REMOVE_VOUCHER';

export const activeView = (active_view) => ({ type: ACTIVE_VIEW, payload: active_view })

export const storeVoucher = (voucher) => ({ type: STORE_VOUCHER, payload: voucher })

export const removeVoucher = () => ({ type: REMOVE_VOUCHER })