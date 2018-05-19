import axios from 'axios';

export default function fetchCustomers() {
  const baseUrl = 'http://nw-angelhack-2018-mocks.us-east-1.elasticbeanstalk.com';
  return axios.get(`${baseUrl}/customers`).then((response) => {
    const { data: customers } = response;

    customers.forEach((customer) => {
      const modeledCustomer = new Customer(customer);
      const { id } = modeledCustomer;
      Customers.upsert({id}, {$set: modeledCustomer});
    });
  });
}
