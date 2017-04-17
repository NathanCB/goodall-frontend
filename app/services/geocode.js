import Ember from 'ember';
import config from 'goodall-frontend/config/environment';

const apiKey = config.google.apiKey;

export default Ember.Service.extend({
  searchLocation (query) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`)
      .then(r => r.json())
      .then((result) => {
        return result.results[0].geometry.location;
      });
  },
});
