global.BankAccountTransactions = new Mongo.Collection('bankAccountTransactions', {
  transform(document) {
    return new BankAccountTransaction({ document });
  }
});
