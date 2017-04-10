import Ember from 'ember';
import { validatePresence, validateFormat, validateLength, validateConfirmation } from 'ember-changeset-validations/validators'

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  validator: {
    eventImg: [
      validatePresence(true)
    ]
  }
});
