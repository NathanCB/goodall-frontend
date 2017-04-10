import Ember from 'ember';
import { validatePresence, validateFormat, validateLength, validateConfirmation } from 'ember-changeset-validations/validators'

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
