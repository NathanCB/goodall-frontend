import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  geocode: Ember.inject.service(),

  actions: {
    searchLocation (query) {
      this.get('geocode').searchLocation(query)
        .then((result) => {
          this.set('lat', result.lat);
          this.set('lng', result.lng);
        });
    },

    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
  }
});
