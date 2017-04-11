import Ember from 'ember';
import { validatePresence, validateFormat, validateLength, validateConfirmation } from 'ember-changeset-validations/validators'

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  validator: {
    eventImg: [
      validatePresence(true)
    ],

    title: [
      validatePresence(true),
    ],

    location: [
      validatePresence(true),
    ],

    date: [
      validatePresence(true),
    ],

    startTime: [
      validatePresence(true),
    ],

    duration: [
      validatePresence(true),
    ],

    description: [
      validatePresence(true),
    ],

    artists: [
      validatePresence(true),
    ],

  }
});
