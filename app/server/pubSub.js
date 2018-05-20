Meteor.publish('bankAccount', () => {
  return BankAccounts.find({});
});

Meteor.publish('bankAccountTransactions', () => {
  return BankAccountTransactions.find({});
});

Meteor.publish('customers', () => {
  return Customers.find({});
});

Meteor.publish('bankLoans', () => {
  return BankLoans.find({});
});
