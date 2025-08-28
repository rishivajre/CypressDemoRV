/// <reference types="Cypress"/>

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout : 6000,

  //video: true,
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1,
    },
  
  // projectId: "ymshak",    //for generating Mochawesome reports - set via environment variable

  e2e: {
    setupNodeEvents(on, config) {   
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    //where to find cypress related spec files: with the use of 'specPattern' property
    specPattern: 'cypress/integration/examples/*.js',//this is available on global level
    
    env: {
      "url": "https://rahulshettyacademy.com"
    }
  },

});
