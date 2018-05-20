global.Tiers = new Mongo.Collection('tiers', {
  transform(document) {
    return new Tier({document});
  }
});
