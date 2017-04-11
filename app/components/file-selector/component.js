import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    async uploadPhoto(file, resetInput) {
      debugger

      const newFile = file[0];

      resetInput();
    },
  }
});
