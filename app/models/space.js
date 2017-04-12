import DS from 'ember-data';

export default DS.Model.extend({
  spaceImg: DS.attr('file'),
  name: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('text'),
});
