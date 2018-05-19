global.BankLoans = new Mongo.Collection('bankLoans', {
  transform(document) {
    return new BankLoan({document});
  }
});
