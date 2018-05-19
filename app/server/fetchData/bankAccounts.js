import axios from 'axios';

export default function fetchBankAccounts() {
  const baseUrl = 'http://nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com';
  const customers = Customers.find().fetch(); // Note: never do this in a real project

  customers.forEach((customer) => {
    const { id } = customer;
    axios.get(`${baseUrl}/customers/${id}/bankAccounts`).then((response) => {
      const { data: bankAccounts } = response;

      bankAccounts.forEach((bankLoan) => {
        const modeledBankAccount = new BankAccount(bankLoan);
        const { id } = modeledBankAccount;
        BankAccounts.upsert({id}, {$set: modeledBankAccount});
      });
    })
  });
}
