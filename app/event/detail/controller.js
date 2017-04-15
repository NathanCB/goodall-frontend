import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  title: 'Floral',
  id: '1',
  description: 'The relentless invisible storm of radio signals and electronic particles, the hustle and bustle, and the billions of petrol explosions in the engine blocks of trucks and cars seem to churn up the molecules of life and heaven so violently that the beautiful fogs are unable to hold together like they once did.',
  date: '5/5/2017',
  startTime: '8:00 PM',
  endTime: '11:00 PM',
  artist: 'Franz Kline',
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
