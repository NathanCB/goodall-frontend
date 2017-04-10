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
    passwordConfirmation: validateConfirmation({ on: 'password' }),
  },

  actions: [
    async authenticate(changeset) {
      await changeset.validate();
    }
  ]
});
