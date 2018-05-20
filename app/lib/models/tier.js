class Tier {
  constructor(options) {
    let {
      document,
      _id,
      pointsRange,
      name,
    } = options;

    if (document) {
      _.extend(this, document)
    } else {
      _.extend(this, {
        _id,
        pointsRange,
        name,
      });
    }
  }
}


global.Tier = Tier;
