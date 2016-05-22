import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simple-form/inputs/power-select-input', 'Integration | Component | power-select-input', {
  integration: true
});

test('sets initial value', function(assert) {
  this.set('data', {
    country: 'au',
  });

  this.set('countries', [
    {isoCode: 'au', name: "Australia"},
    {isoCode: 'nz', name: "New Zealand"},
    {isoCode: 'ca', name: "Canada"},
    {isoCode: 'de', name: "Germany", disabled: true},
  ]);

  this.render(hbs`
    {{#simple-form data as |f|}}
      {{f.input "country" type="power-select" options=countries optionLabelPath="name" optionValuePath="isoCode" placeholder="Select your Country..." label="Country"}}
    {{/simple-form}}
  `);

  assert.equal(this.$('.country label').text().trim(), 'Country');
});
