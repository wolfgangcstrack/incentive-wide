class Customer {
  constructor(options) {
    let {
      document,
      id,
      givenName,
      middleInitial,
      familyName,
      age,
      householdIncome,
      address,
      city,
      state,
      zip,
      autoInsurance,
      homeOwnersInsurance,
    } = options;

    this._id = id;

    if (document) {
      _.extend(this, document)
    } else if (!id) {
      throw new Meteor.Error('Customer needs id field');
    } else {
      _.extend(this, {
        id,
        givenName: givenName || '',
        middleInitial: middleInitial || '',
        familyName: familyName || '',
        age: age || 21,
        householdIncome: Customer._defaultToZero(householdIncome),
        address: address || '',
        city: city || '',
        state: state || '',
        zip: Customer._defaultToZero(zip),
        autoInsurance: Boolean(autoInsurance),
        homeOwnersInsurance: homeOwnersInsurance || '',
      })
    }
  }

  static _defaultToZero(number) {
    return (number || number === 0) ? number : 0;
  }
}


global.Customer = Customer;
