import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  const testDoc = {_id: 'testDoc'};
  Customers.upsert(testDoc, {$set: testDoc});
  BankLoans.upsert(testDoc, {$set: testDoc});
});
