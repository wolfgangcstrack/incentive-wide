global.Milestones = new Mongo.Collection('milestones', {
  transform(document) {
    return new Milestone({document});
  }
});
