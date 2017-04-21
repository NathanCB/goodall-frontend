import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [
    'only',
  ],
  geocode: Ember.inject.service(),
  isShowingModal: false,

  // tagName: '',

  actions: {
    async searchLocation (city) {
      try {
        // const events = await this.store.query('event', { zip: zip });
        const events = await this.store.query('event', { searchBy: 'city', value: city });
        // const events = await this.store.query('event', { city: city });

        this.set('model', events);
      } catch (error) {
        alert('No events found. This may not be a valid zip code');
      }
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  },

  // fonts: [
  //   'vt',
  //   'quicksand',
  //   'raleway',
  //   'lora',
  //   'inconsolata',
  //   'catamaran',
  //   'crimson',
  //   'abril',
  //   'gloria',
  //   'space',
  //   'amatic',
  //   'josefin',
  //   'righteous',
  //   'bungee',
  //   'poiret',
  //   'courgette',
  //   'playfair',
  //   'didact',
  //   'sorts',
  // ],

  // fontSizes: [
  //   '2',
  //   '3',
  //   '4',
  //   '5',
  // ],

  // fontColors: [
  //   'green',
  //   'yellow',
  //   'blue',
  //   'red',
  //   'pale-white',
  // ],

  // init() {
  //   this._super(...arguments);

  //   const randomFont = this.fonts[Math.floor(Math.random()*this.fonts.length)];
  //   const randomFontSize = this.fontSizes[Math.floor(Math.random()*this.fontSizes.length)];
  //   const randomFontColor = this.fontColors[Math.floor(Math.random()*this.fontColors.length)];

  //   this.set('font', randomFont);
  //   this.set('fontSize', randomFontSize);
  //   this.set('fontColor', randomFontColor);
  // }
});
