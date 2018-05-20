class Referral {
  constructor(options) {
    let {
      document,
      id,
      customerId,
      fullName,
      email,
    } = options;

    this._id = String(id);

    if (document) {
      _.extend(this, document)
    } else if (_.isNull(id) || _.isUndefined(id)) {
      throw new Meteor.Error('Customer needs id field');
    } else {
      _.extend(this, {
        id: String(id),
        customerId,
        fullName,
        email,
      });
    }
  }
}


global.Referral = Referral;
