import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    uploadPhoto(file, resetInput) {


      resetInput();
    },
  }
});
