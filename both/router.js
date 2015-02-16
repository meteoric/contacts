Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('contacts', {
    path: '/'
  });

  this.route('contacts.show', {
    path: '/contacts/:_id'
  });
});
