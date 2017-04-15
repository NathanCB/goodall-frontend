import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    only: {
      refreshModel: true,
    }
  },
  model() {
    return this.store.findAll('event');
  }
});
