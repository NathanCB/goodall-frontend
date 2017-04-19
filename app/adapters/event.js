import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForQuery(query) {
    if (query.zip) {
      const zip = query.zip;
      delete query.zip;

      return `${this._super(...arguments)}/searchzip/${zip}`;
    }

    return this._super(...arguments);
  }
})