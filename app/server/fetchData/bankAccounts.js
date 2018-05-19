import axios from 'axios';

const url = 'nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com';

Meteor.methods({
  getBankAccount: (customerId) => {
    return axios.get(`${url}/customers/${customerId}/bankAccounts`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
