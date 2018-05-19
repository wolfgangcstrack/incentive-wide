class BankAccount {
  constructor(options) {
    let {
      document,
      id,
      customerId,
      type,
      balance,
      issueDate,
      interestRate,
    } = options;

    this._id = String(id);

    if (document) {
      _.extend(this, document)
    } else if (_.isNull(id) || _.isUndefined(id)) {
      throw new Meteor.Error('BankAccount needs id field');
    } else {
      _.extend(this, {
        id: String(id),
        customerId,
        type,
        balance,
        issueDate,
        interestRate,
      });
    }
  }
}


global.BankAccount = BankAccount;
