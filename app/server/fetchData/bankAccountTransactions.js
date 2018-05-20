import axios from 'axios';

export default function fetchBankAccountTransactions() {
  const baseUrl = 'http://nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com';
  const bankAccounts = BankAccounts.find().fetch(); // Note: never do this in a real project

  bankAccounts.forEach((bankAccount) => {
    const { id } = bankAccount;
    axios.get(`${baseUrl}/bankAccounts/${id}/bankAccountTransactions`).then((response) => {
      const { data: bankAccountTransactions } = response;

      bankAccountTransactions.forEach((bankAccountTransaction) => {
        const modeledBankAccountTransaction = new BankAccountTransaction(bankAccountTransaction);
        const { id } = modeledBankAccountTransaction;
        BankAccountTransactions.upsert({id}, {$set: modeledBankAccountTransaction});
      });
    })
  });
}
