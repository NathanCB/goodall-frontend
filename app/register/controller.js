import Ember from 'ember';
import { validatePresence, validateFormat, validateConfirmation } from 'ember-changeset-validations/validators'

export default Ember.Controller.extend({
  validator: {
    email: [
      validatePresence(true),
      validateFormat({ type: 'email' }),
    ],
    password: [
      validatePresence(true),
    ],
    passwordConfirmation: validateConfirmation({ on: 'password' }),
  },

  actions: {
    async createUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Invalid fields');
      }


      // Applies changes to "model"
      changeset.save();

      const user = this.store.createRecord('user', this.model);
      user.save();
    },
  }
});
