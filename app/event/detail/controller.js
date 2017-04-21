import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service(),

  actions: {
    toggleModal: function() {
      this.transitionToRoute('event.index');
    },

    deleteEvent() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute('event');
      });
    },
  }
});
