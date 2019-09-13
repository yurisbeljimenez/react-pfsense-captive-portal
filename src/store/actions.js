// View Actions
export const ACTIVE_VIEW = '[Routes] Replace Active View';
export const activeView = (active_view) => ({ type: ACTIVE_VIEW, payload: active_view })

// Voucher Actions
export const STORE_VOUCHER = '[Auth Form] Store Voucher';
export const storeVoucher = (voucher) => ({ type: STORE_VOUCHER, payload: voucher })

// Banner Actions
export const DISCARD_VOUCHER = '[Banner] Discard Voucher';
export const discardVoucher = () => ({ type: DISCARD_VOUCHER })

export const ACTIVATE_VOUCHER = '[Banner] Use Stored Voucher';
export const activateVoucher = () => ({ type: ACTIVATE_VOUCHER })

// Form POST Actions
export const AUTHENTICATE = '[Auth Form] POST Credentials';
export const authenticate = (form_data) => ({ type: AUTHENTICATE, payload: form_data })
