import Ember from 'ember';
import layout from './template';
import computed from 'ember-computed';

const { isPresent, get } = Ember;

export default Ember.Component.extend({
  layout,

  tagName: '',

  didReceiveAttrs() {
    const newInputAttrs = this.getAttr('inputAttributes') || {};
    Object.keys(newInputAttrs).forEach((key) => {
      this.set(key, newInputAttrs[key]);
    });
  },

  multiple: false,
  noMatchesMessage: 'No options available',
  searchEnabled: false,
  allowClear: false,
  renderInPlace: false,

  /**
   * A path to fetch the label from each object in collection. This can be null
   * if the collection is an array of strings.
   *
   * @type {String}
   */
  optionLabelPath: 'label',

  /**
   * A path to fetch the value for each option. If null, will return the object.
   *
   * @type {String}
   */
  optionValuePath: null,

  /**
   * The current selection
   *
   * @type {Object}
   */
  selected: computed.alias('value'),

  /**
   * The options to render in the list
   *
   * @type {Array[Object]}
   */
  options: computed.reads('collection'),

  selectionOptions: computed('value', 'selected', 'options.[]', 'multiple', {
    get() {
      let { selected, options, optionValuePath, multiple } =
        this.getProperties('selected', 'options', 'optionValuePath', 'multiple');

      if (multiple) {
        if (!Ember.isArray(selected)) {
          selected = [selected];
        }

        if (isPresent(optionValuePath)) {
          return options.filter((option) =>
            selected.map((val) =>
              String(val)).indexOf(String(get(option, optionValuePath))) > -1);
        } else {
          return selected;
        }
      } else {
        if (isPresent(optionValuePath)) {
          return options.find((option) => String(get(option, optionValuePath)) === String(selected));
        } else {
          return selected;
        }
      }

    },
  }),

  actions: {
    handleSelectChange(option) {
      const multiple = this.get('multiple');
      const optionValuePath = this.get('optionValuePath');

      let returnValue = null;

      if (isPresent(optionValuePath)) {
        if (multiple) {
          returnValue = option.map((val) => get(val, optionValuePath));
        }else if (option) {
          returnValue = get(option, optionValuePath);
        }
      } else {
        returnValue = option;
      }
      this.sendAction('on-change', returnValue);
    },

    handleFocusIn() {
      // this.sendAction('focus-in');
    },

    handleFocusOut() {
      // this.sendAction('focus-out');
    },
  },
});
