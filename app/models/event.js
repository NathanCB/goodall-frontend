import DS from 'ember-data';

export default DS.Model.extend({
  // file: DS.attr('')
  title: DS.attr('string'),
  artist: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  date: DS.attr('date'),
  startTime: DS.attr('string'),
  endTime: DS.attr('string'),
  photoUrl: DS.attr('string'),

  createdBy: DS.attr(),
  user: DS.belongsTo('user'),
});
