Meteor.startup(function () {

  if (Contacts.find({}).count() === 0) {
    _(20).times(function(n) {
      var user = Fake.user();

      Contacts.insert({
        name: {
          first: user.name,
          last: user.surname
        },
        emails: [{label: 'Work', address: user.email}],
        priority: Fake.fromArray(['High', 'Medium', 'Low']),
        location: {
          city: Fake.word(),
          state: Fake.fromArray(STATES)
        },
        details: {
          notes: Fake.paragraph(),
          active: Fake.fromArray([true, false])
        }
      });
    });
  }

});
