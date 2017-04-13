import DS from 'ember-data';
import config from 'goodall-frontend/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  // namespace: 'api'
});
