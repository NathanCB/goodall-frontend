import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  actions: {
    toggleModal: function() {
      this.transitionToRoute('event.index');
    }
  }
});
