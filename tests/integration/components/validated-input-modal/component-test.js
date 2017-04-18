import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('validated-input-modal', 'Integration | Component | validated input modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{validated-input-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#validated-input-modal}}
      template block text
    {{/validated-input-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
