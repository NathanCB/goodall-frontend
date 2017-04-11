import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  filesystem: Ember.inject.service(),

  actions: {
    openDialog() {
      this.get('filesystem').prompt().then((files) => {
        // Triggers the action the current component passing the files that were selected
        // Converts from FileList to JS Array
        this.action(Array.from(files));
      });
    }
  }
});
