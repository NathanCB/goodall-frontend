import Ember from 'ember';
import { validatePresence, validateFormat, validateLength, validateConfirmation } from 'ember-changeset-validations/validators'

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  validator: {
    username: [
      validatePresence(true),
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

  actions: {
    async createUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Please enter valid form data');
      }


      // Applies changes to "model"
      changeset.save();

      const user = this.store.createRecord('user', this.model);
      await user.save();

      this.transitionToRoute('login');
    },
  }
});
