import Ember from 'ember';
import { validatePresence, validateFormat, validateConfirmation, validateLength } from 'ember-changeset-validations/validators'

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  validator: {
    username: [
      validatePresence(true),
      validateLength({ min: 3 }),
    ],
    password: [
      validatePresence(true),
    ],
  },

  actions: {
    async authenticate(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Invalid login');
      }


      changeset.save();

      const {username, password} = this.model;

      this.get('session').authenticate('authenticator:jwt', username, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
      debugger;
      this.transitionToRoute('event');
    },
  }
});
