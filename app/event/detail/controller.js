import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  title: 'Floral',
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
