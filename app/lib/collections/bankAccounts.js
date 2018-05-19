global.BankAccount = new Mongo.Collection('bankAccount', {
  transform(document) {
    return new BankAccount({ document });
  }
});
