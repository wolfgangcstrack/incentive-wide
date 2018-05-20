const _floorGreaterThan100 = n => n > 100 ? 100 : n;

Meteor.methods({
  previewMilestones(fullCustomerName, creditScore, savingsAmount) {
    check(fullCustomerName, String);
    check(creditScore, Match.Integer);
    check(savingsAmount, Number);

    const MAX_CREDIT_SCORE = 750;
    const MAX_SAVINGS = 100000.00;
    const DEFAULT_INSURANCE_SCORE = 0;
    const DEFAULT_REFERRAL_SCORE = 0;

    return [
      {
        title: 'Improve Your Credit Score',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id diam varius, pretium quam eget, feugiat ligula. Vivamus dolor mi, condimentum ut feugiat vitae, porta sit amet urna. Integer eget mi sagittis, ultrices tortor vel, rutrum libero. Fusce ex ante, congue rutrum nunc vulputate, tincidunt convallis augue. Integer ultricies libero tortor. Curabitur ultricies condimentum justo ut aliquam. Suspendisse lacinia ullamcorper lectus sit amet hendrerit.',
        imageUrl: 'google.com', // TODO: replace this
        score: _floorGreaterThan100(Math.floor((creditScore / MAX_CREDIT_SCORE) * 100)),
      },
      {
        title: 'Add to Your Savings Accounts',
        description: 'Donec tincidunt finibus porta. Fusce nec tincidunt ex. Vivamus molestie, nunc sed blandit feugiat, erat dui vehicula nunc, ut dapibus justo dui at nulla. Nullam porta eros sed massa placerat porta. Etiam faucibus malesuada massa id varius. Aliquam a rutrum urna. Morbi ante nunc, maximus eu cursus lobortis, volutpat et sem. Sed id ultrices orci, vitae sodales massa. Curabitur volutpat sagittis sem. Fusce quis nisi magna.',
        imageUrl: 'google.com', // TODO: replace this
        score: _floorGreaterThan100(Math.floor((savingsAmount / MAX_SAVINGS) * 100)),
      },
      {
        title: 'Add New Insurance Policies',
        description: 'Praesent tristique id orci a eleifend. Proin ornare accumsan nulla ullamcorper rutrum. Phasellus venenatis ligula et risus porttitor maximus. Vivamus consequat neque et purus tempus faucibus. Donec molestie et lacus et volutpat. Ut non sollicitudin tortor. Cras eleifend tellus sit amet magna laoreet, vel vehicula nibh ullamcorper. Suspendisse facilisis congue purus at convallis. Vivamus condimentum quam ut volutpat suscipit. Aliquam faucibus, enim in luctus efficitur, sapien nisl ornare justo, vitae venenatis est leo sit amet dolor. Praesent semper tempor eros. Etiam rhoncus, augue quis pulvinar hendrerit, lectus ipsum faucibus augue, ut pellentesque odio sem eget risus.',
        imageUrl: 'google.com', // TODO: replace this
        score: DEFAULT_INSURANCE_SCORE,
      },
      {
        title: 'Refer a Friend',
        description: 'Suspendisse pulvinar dui eros, vel auctor augue rutrum nec. Suspendisse eget pharetra erat. Ut sagittis risus at lobortis auctor. Phasellus vitae magna non tortor auctor malesuada. Aliquam ac mattis nibh. Pellentesque tincidunt purus ligula, sed venenatis sem accumsan vitae. Etiam aliquet massa felis, in mattis urna pulvinar gravida. Cras eget arcu dictum sapien malesuada molestie. Nam lacinia augue eu ipsum egestas, at vestibulum lacus aliquam.',
        imageUrl: 'google.com', // TODO: replace this
        score: DEFAULT_REFERRAL_SCORE,
      },
    ];
  },
});
