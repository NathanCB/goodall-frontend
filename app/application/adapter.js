import DS from 'ember-data';
import config from 'goodall-frontend/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,

  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${this._super(...arguments)}/me`;
    }

    return this._super(...arguments);
  }
});
