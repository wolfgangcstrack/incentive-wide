class BankAccount {
  constructor(options) {
    let {
      document,
      customerId,
      type,
      balance,
      issueDate,
      interestRate,
    } = options;

    if (document) {
      _.extend(this, document)
    } else {
      _.extend(this, {
        customerId: customerId,
        type: type,
        balance: balance,
        issueDate: issueDate,
        interestRate: interestRate,
      })
    }
  }
}


global.BankAccount = BankAccount;
