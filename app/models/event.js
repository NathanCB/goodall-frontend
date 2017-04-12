import DS from 'ember-data';

export default DS.Model.extend({
  eventImg: DS.attr('file'),
  title: DS.attr('string'),
  // location: DS.attr('string')
  date: DS.attr('date'),
  startTime: DS.attr('time'),
  duration: DS.attr('string'),
  description: DS.attr('text'),
  artists: DS.attr('string'),
});
