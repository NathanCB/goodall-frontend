import Ember from 'ember';

export function eventCardClass(params, {font, fontSize, fontColor}) {
  return `index-grid__item f-${font} f-${fontSize} f-${fontColor}`;
}

export default Ember.Helper.helper(eventCardClass);
