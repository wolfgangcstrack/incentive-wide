global.Customers = new Mongo.Collection('customers', {
  transform(document) {
    return new Customer({document});
  }
});
