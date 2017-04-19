import Ember from 'ember';
import { validatePresence, validateFormat, validateLength, validateConfirmation } from 'ember-changeset-validations/validators'
import moment from 'moment';
const apiKey = 'AIzaSyByoGefg3HDYycC853DvId8_cmowJgNaAc';
const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: service('current-user'),
  filesystem: Ember.inject.service(),
  selectedFiles: [],

  validator: {

    title: [
      validatePresence(true),
    ],

    date: [
      validatePresence(true),
    ],

    startTime: [
      validatePresence(true),
    ],

    endTime: [
      validatePresence(true),
    ],

    description: [
      validatePresence(true),
    ],

    artist: [
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
      const token = this.get('session.session.content.authenticated.token');

      fetch('http://localhost:8080/events/upload', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${token}`
          },
          body: {
            file: this.model.eventImg[0],
            'address': this.model.address,
            'city': this.model.city,
            'state': this.model.state,
            'zip': this.model.zip,
            'title': this.model.title,
            'artist': this.model.artist,
            'date': this.model.date,
            'description': this.model.description,
            'start-time': this.model.startTime,
            'end-time': this.model.endTime,
          }
        }).then(res => res.json())
        .then((data) => {
          const upload = this.store.pushPayload(data);
          

          this.transitionToRoute('event.detail', data.data.id);
        });
    },

    searchLocation (query) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`)
        .then(r => r.json())
        .then((result) => {
          this.set('lat', result.results[0].geometry.location.lat);
          this.set('lng', result.results[0].geometry.location.lng);
        });
    }
  },
});
