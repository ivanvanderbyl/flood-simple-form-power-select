# flood-simple-form-power-select

Adds a drop in replacement for the classic select box with an Ember Power Select.

## Installation

  ember install flood-simple-form-power-select

## Usage

```hbs
{{#simple-form data on-change=(action "handleFormInputChange") as |f|}}
  {{f.input "country" 
    type="power-select" 
    collection=countries 
    optionLabelPath="name" 
    optionValuePath="isoCode" 
    placeholder="Select your Country..." 
    label="Country"
  }}
{{/simple-form}}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
