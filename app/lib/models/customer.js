class Customer {
  constructor(options) {
    let {
      document,
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

    if (document) {
      _.extend(this, document)
    } else {
      _.extend(this, {
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
