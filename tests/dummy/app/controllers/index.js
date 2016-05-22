import Ember from 'ember';

export default Ember.Controller.extend({

  countries: [
    {isoCode: 'au', name: "Australia"},
    {isoCode: 'nz', name: "New Zealand"},
    {isoCode: 'ca', name: "Canada"},
    {isoCode: 'de', name: "Germany"},
  ],

  data: Ember.Object.create({
    country: 'au',
  }),

  actions: {
    handleFormInputChange(field, value) {
      this.get('data').set(field, value);
      this.propertyDidChange('data');
    }
  }
});
