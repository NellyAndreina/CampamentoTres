const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 414,
  viewportHeight: 896,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.casaideas.cl",
    //specPattern: “/Users/fabian/Desktop/ChallengeCasaIdeas/cypress/e2e/pages/*.spec.js”,
    failOnStatusCode: false,
    responseTimeout: 120e3,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

