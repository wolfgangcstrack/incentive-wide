import axios from 'axios';

export default function fetchBankLoans() {
  const baseUrl = 'http://nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com';
  const customers = Customers.find().fetch(); // Note: never do this in a real project

  customers.forEach((customer) => {
    const { id } = customer;
    axios.get(`${baseUrl}/customers/${id}/bankLoans`).then((response) => {
      const { data: bankLoans } = response;

      bankLoans.forEach((bankLoan) => {
        const modeledBankLoan = new BankLoan(bankLoan);
        BankLoans.upsert(modeledBankLoan, {$set: modeledBankLoan});
      })
    })
  });
}
