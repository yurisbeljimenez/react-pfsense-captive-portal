// View Actions
export const ACTIVE_VIEW = '[Routes] Replace Active View';
export const activeView = (view) => ({ type: ACTIVE_VIEW, payload: view })

// Voucher Actions
export const CHECK_VOUCHER = '[Auth Form] POST Voucher Inquire';
export const checkVoucher = (data) => ({ type: CHECK_VOUCHER, payload: data })

export const STORE_VOUCHER = '[Auth Form] Store Voucher';
export const storeVoucher = (voucher) => ({ type: STORE_VOUCHER, payload: voucher })

export const STORE_TIMECREDIT = '[Auth Form] Store Timecredit';
export const storeTimecredit = (timecredit) => ({ type: STORE_TIMECREDIT, payload: timecredit })

export const DISCARD_VOUCHER = '[Banner] Discard Voucher';
export const discardVoucher = () => ({ type: DISCARD_VOUCHER })

export const ACTIVATE_VOUCHER = '[Banner] Use Stored Voucher';
export const activateVoucher = () => ({ type: ACTIVATE_VOUCHER })

// Form POST Actions
export const AUTHENTICATE = '[Auth Form] POST Credentials';
export const authenticate = (data) => ({ type: AUTHENTICATE, payload: data })
