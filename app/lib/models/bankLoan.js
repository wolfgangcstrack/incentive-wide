class BankLoan {
  constructor(options) {
    let {
      document,
      id,
      customerId,
      type,
      borrowedAmmt,
      interestRate,
      currentBalance,
      monthlyPayment,
      issueDate,
    } = options;

    this._id = id;

    if (document) {
      _.extend(this, document);
    } else if (!id) {
      throw new Meteor.Error('BankLoad needs id field');
    } else {
      _.extend(this, {
        id,
        customerId,
        type,
        borrowedAmmt,
        interestRate,
        currentBalance,
        monthlyPayment,
        issueDate,
      })
    }
  }
}


global.BankLoan = BankLoan;
