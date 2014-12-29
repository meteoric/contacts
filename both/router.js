Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('contacts', {
    path: '/',
    data: function () {
      return {
        contacts: Contacts.find()
      };
    }
  });

  this.route('contacts.show', {
    path: '/contacts/:_id',
    data: function () {
      return {
        contact: Contacts.findOne({_id: this.params._id})
      };
    }
  });
});
