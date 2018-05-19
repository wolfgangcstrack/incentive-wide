global.BankAccounts = new Mongo.Collection('bankAccounts', {
  transform(document) {
    return new BankAccount({ document });
  }
});
