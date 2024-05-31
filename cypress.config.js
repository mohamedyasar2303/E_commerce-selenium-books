const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",   //for html report
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())                   //cucumbe report
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin') (on)   // for html report
    },
    specPattern: "cypress/e2e/*.feature",                  //cucumber report 
  },

  reporter: 'cypress-mochawesome-reporter',                //cucumber report
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});
