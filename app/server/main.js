import { Meteor } from 'meteor/meteor';
import fetchCustomers from './fetchData/customers';
import fetchBankAccounts from './fetchData/bankAccounts';
import fetchBankAccountTransactions from './fetchData/bankAccountTransactions';
import fetchBankLoans from './fetchData/bankLoans';

Meteor.startup(() => {
  // Note: if there is no dependency between two models, they can be called with parallel .then()'s
  // If there IS a dependency, however, they must be in nested .then()'s
  fetchCustomers()
    .then(() => {
      fetchBankAccounts().then(() => {
        fetchBankAccountTransactions();
      });
    })
    .then(() => {
      fetchBankLoans();
    })
});

Meteor.methods({
  addReferral: (customerId, fullName, email) => {
    Referrals.insert({ customerId, fullName, email });
  },
});
