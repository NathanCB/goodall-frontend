import Ember from 'ember';
import { validatePresence, validateFormat, validateConfirmation, validateLength } from 'ember-changeset-validations/validators'

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  validator: {
    username: [
      validatePresence(true),
      validateLength({ min: 3 }),
    ],
    email: [
      validatePresence(true),
      validateFormat({ type: 'email' }),
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

      const {username, password} = this.getProperties('username', 'password');

      this.get('session').authenticate('authenticator:token', username, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
