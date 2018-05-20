class BankAccountTransaction {
  constructor(options) {
    let {
      document,
      id,
      amount,
      bankAccountId,
      creditDebitType,
      description,
      referenceNumber,
      transactionTimestamp,
      transactionType,
    } = options;

    this._id = String(id);

    if (document) {
      _.extend(this, document)
    } else if (_.isNull(id) || _.isUndefined(id)) {
      throw new Meteor.Error('BankAccountTransaction needs id field');
    } else {
      _.extend(this, {
        id: String(id),
        amount,
        bankAccountId,
        creditDebitType,
        description,
        referenceNumber,
        transactionTimestamp,
        transactionType,
      });
    }
  }
}


global.BankAccountTransaction = BankAccountTransaction;
