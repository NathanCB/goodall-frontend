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

  fontSizes: [
    '1',
    '2',
    '3',
    '4',
    '5'
  ],

  init() {
    this._super(...arguments);

    const randomFont = this.fonts[Math.floor(Math.random()*this.fonts.length)];
    const randomFontSize = this.fontSizes[Math.floor(Math.random()*this.fontSizes.length)];

    this.set('font', randomFont);
    this.set('fontSize', randomFontSize);
  }
});
