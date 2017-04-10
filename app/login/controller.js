import Ember from 'ember';
import { validatePresence, validateFormat, validateConfirmation, validateLength } from 'ember-changeset-validations/validators'

export default Ember.Controller.extend({
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
        return alert('Invalid fields');
      }

      changeset.save();

      const {username, password} = this.model;

      this.get('session').authenticate('authenticator:token', username, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
