import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('geolocate-input', 'Integration | Component | geolocate input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{geolocate-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#geolocate-input}}
      template block text
    {{/geolocate-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
