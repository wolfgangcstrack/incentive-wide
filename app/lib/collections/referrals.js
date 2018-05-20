global.Referrals = new Mongo.Collection('referrals', {
  transform(document) {
    return new Referral({ document });
  },
});
