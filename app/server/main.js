import { Meteor } from 'meteor/meteor';
import fetchCustomers from './fetchData/customers';
import fetchBankLoans from './fetchData/bankLoans';

Meteor.startup(() => {
  fetchCustomers().then(() => {
    fetchBankLoans();
  });
});
