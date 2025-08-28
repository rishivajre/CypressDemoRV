/// <reference types="Cypress"/>

import { defineConfig } from "Cypress";

export default defineConfig({
  defaultCommandTimeout: 6000,
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  
  retries: {
    runMode: 1,
    openMode: 0
  },
  
  // Uncomment and set your project ID if using Cypress Dashboard
  // projectId: process.env.CYPRESS_PROJECT_ID,

  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Return the config object
      return config;
    },
    
    // Base URL for your application
    baseUrl: 'https://rahulshettyacademy.com',
    
    // Spec file pattern - keeping your current structure
    specPattern: 'cypress/integration/examples/*.js',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Additional environment variables
    env: {
      "url": "https://rahulshettyacademy.com"
    }
  },

});
