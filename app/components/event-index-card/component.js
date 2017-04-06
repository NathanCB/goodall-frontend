import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  fonts: [
    'source',
    'vt',
    'quicksand',
    'raleway',
    'lora',
    'muli',
    'inconsolata',
    'catamaran',
    'crimson',
    'abril',
    'gloria',
    'space',
    'amatic',
    'josefin',
    'righteous',
    'bungee',
    'poiret',
    'courgette',
    'playfair',
    'didact',
    'sorts',
  ],

  init() {
    this._super(...arguments);

    const randomFont = this.fonts[Math.floor(Math.random()*this.fonts.length)];

    this.set('font', randomFont);
  }
});
