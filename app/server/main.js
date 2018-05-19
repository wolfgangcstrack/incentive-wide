import { Meteor } from 'meteor/meteor';
import fetchCustomers from './fetchData/customers';

Meteor.startup(() => {
  const testDoc = {_id: 'testDoc'};
  BankLoans.upsert(testDoc, {$set: testDoc});
  fetchCustomers();
});
