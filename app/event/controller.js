import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'only',
  ],
  geocode: Ember.inject.service(),
  isShowingModal: false,

  actions: {
    async searchLocation (zip) {
      try {
        const events = await this.store.query('event', { zip: zip });
          
        this.set('model', events);
      } catch (error) { 
        alert('No events found. This may not be a valid zip code');
      }
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
