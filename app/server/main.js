import { Meteor } from 'meteor/meteor';
import fetchCustomers from './fetchData/customers';
import fetchBankAccounts from './fetchData/bankAccounts';
import fetchBankLoans from './fetchData/bankLoans';

Meteor.startup(() => {
  fetchCustomers()
    .then(() => {
      fetchBankAccounts();
    })
    .then(() => {
      fetchBankLoans();
    })
});
