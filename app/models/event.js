import DS from 'ember-data';

export default DS.Model.extend({
  // eventImg: DS.attr('file'),
  title: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('date'),
  startTime: DS.attr('string'),
  endTime: DS.attr('string'),
  description: DS.attr('string'),
  artist: DS.attr('string'),
  // user: DS.attr('string'),
});
