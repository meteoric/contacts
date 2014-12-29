AutoForm.hooks({
  'contacts-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      Router.go('contacts.show', {_id: result});
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
