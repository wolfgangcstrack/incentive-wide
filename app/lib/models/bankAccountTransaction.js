class BankAccountTransaction {
  constructor(options) {
    let {
      document,
      amount,
      bankAccountId,
      creditDebitType,
      description,
      referenceNumber,
      transactionTimestamp,
      transactionType,
    } = options;

    if (document) {
      _.extend(this, document)
    } else {
      _.extend(this, {
        amount: amount,
        bankAccountId: bankAccountId,
        creditDebitType: creditDebitType,
        description: description,
        referenceNumber: referenceNumber,
        transactionTimestamp: transactionTimestamp,
        transactionType: transactionType,
      })
    }
  }
}


global.BankAccount = BankAccount;
