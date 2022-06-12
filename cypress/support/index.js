// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  require('cypress-xpath')
  require('teacher')
  import 'cy-mobile-commands'
  //Dark theme

//Halloween theme

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

import '@shelex/cypress-allure-plugin';
/// <reference types="@shelex/cypress-allure-plugin" />
import "cypress-real-events/support";
const { commitInfo } = require('@cypress/commit-info');

module.exports = on => {
  on('file:preprocessor', file => {
    commitInfo().then(console.log);
  });
};
import '@applitools/eyes-cypress/commands'
import 'cypress-iframe'

