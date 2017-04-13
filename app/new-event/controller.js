import Ember from 'ember';
import { validatePresence, validateFormat, validateLength, validateConfirmation } from 'ember-changeset-validations/validators'
import moment from 'moment';
const apiKey = 'AIzaSyByoGefg3HDYycC853DvId8_cmowJgNaAc';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  filesystem: Ember.inject.service(),
  selectedFiles: [],

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

  },

  actions: {
    async saveEvent(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Please enter valid form data');
      }

      changeset.save();

      const fetch = this.get('filesystem.fetch');

      fetch('https://arcane-stream-63735.herokuapp.com/upload', {
          method: 'POST',
          headers: {
            accept: 'application/json',
          },
          body: this.model,
        }).then(res => res.json())
        .then((data) => {
          const upload = this.store.pushPayload(data);

          this.store.peekAll('upload');
        });
      changeset.save();
    },

    searchLocation (query) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`)
        .then(r => r.json())
        .then((result) => {
          this.set('lat', result.results[0].geometry.location.lat);
          this.set('lng', result.results[0].geometry.location.lng);
        });
    },
  },
});
