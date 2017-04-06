import Ember from 'ember';

const apiKey = 'AIzaSyByoGefg3HDYycC853DvId8_cmowJgNaAc';

export default Ember.Controller.extend({
  actions: {
    searchLocation (query) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`)
        .then(r => r.json())
        .then((result) => {
          this.set('lat', result.results[0].geometry.location.lat);
          this.set('lng', result.results[0].geometry.location.lng);
        })
    }
  }
});
