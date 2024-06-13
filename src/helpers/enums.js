const PaymentTypes = Object.freeze({
  PERSONAL: "Personal",
  BANK_COVER: "Bank Cover",
  TRAINING_CREDIT: "Training Credit",
});

const PaymentOptions = Object.freeze({
  NDF: "NDF",
  DF: "DF",
  SH: "SH",
});

const CheckoutStatus = Object.freeze({
  PENDING: "pending",
  SUCCESS: "success",
  FAIL: "fail",
  ERROR: "error",
  SUSPECT: "suspect",
});

export { PaymentTypes, PaymentOptions, CheckoutStatus };
