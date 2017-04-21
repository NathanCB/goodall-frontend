import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForQuery(query) {

    if (query.city) {
      const city = query.city;
      delete query.city;

      return `${this._super(...arguments)}/searchby/${city}`;
    }

    return this._super(...arguments);
  }
});
