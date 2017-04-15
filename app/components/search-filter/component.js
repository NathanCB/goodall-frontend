import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    eventSelect() {
      this.set('isClicked', true)
    },
    spaceSelect() {
      this.set('isClicked', true)
    }
  }
});
