import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | power select input');

test('visiting /power-select-input', function(assert) {
  visit('/');

  andThen(() => assert.equal(find('.selected-country').text(), 'Country: au'));

  selectChoose('.country', 'New Zealand');

  andThen(() => assert.equal(find('.selected-country').text(), 'Country: nz'));
});
