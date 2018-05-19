import axios from 'axios';

const url = 'nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com';

Meteor.methods({
  getBankAccountTransactions: (customerId) => {
    return axios.get(`${url}/bankAccounts/${customerId}/bankAccountTransactions`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
