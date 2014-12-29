Template._contactsEdit.helpers({
  contact: function () {
    var template = Template.instance();
    return Contacts.findOne({_id: template.data.id});
  }
});

AutoForm.hooks({
  'contacts-edit-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
