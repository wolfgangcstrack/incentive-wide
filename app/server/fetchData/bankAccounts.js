import axios from 'axios';

const insertBankAccountsForUser = (response) => {
  const {data: bankAccounts} = response;

  bankAccounts.forEach((bankAccount) => {
    const modeledBankAccount = new BankAccount(bankAccount);
    const {id} = modeledBankAccount;
    BankAccounts.upsert({id}, {$set: modeledBankAccount});
  });
};

export default function fetchBankAccounts() {
  const baseUrl = 'http://nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com';
  const customers = Customers.find().fetch(); // Note: never do this in a real project

  const promises = [];
  customers.forEach((customer) => {
    const url = `${baseUrl}/customers/${customer.id}/bankAccounts`;
    const promise = axios.get(url).then(insertBankAccountsForUser);
    promises.push(promise);
  });

  return Promise.all(promises);
}
