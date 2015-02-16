Template.contacts.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('contacts');
  }.bind(this));
};

Template.contacts.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.contacts.helpers({
  contacts: function () {
    return Contacts.find();
  }
});
