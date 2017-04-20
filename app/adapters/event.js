import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForQuery(query) {
    // if (query.zip) {
    //   const zip = query.zip;
    //   delete query.zip;

    //   return `${this._super(...arguments)}/searchzip/${zip}`;
    // }
    // if (query.city) {
    //   const city = query.city;
    //   delete query.city;

    //   return `${this._super(...arguments)}/searchby/${city}`;
    // }
    if (query.city) {
      const city = query.city;
      delete query.city;

      return `${this._super(...arguments)}/searchBy/${city}`;
    }
    else if (query.zip) {
      const zip = query.zip;
      delete query.zip;

      return `${this._super(...arguments)}/searchBy/${zip}`;
    }

    return this._super(...arguments);
  }
})
