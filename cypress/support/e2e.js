// ***********************************************************
// This example support/e2e.js is processed and
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

//when facing uncaughty error in while running automation use this code
Cypress.on('uncaught:exception', (err, runnable) => {                     //in cypress while running the code cypress as stop so i past this code.
    // Return false to prevent Cypress from failing the test
    return false;
    })

    import 'cypress-xpath';

    require('cypress-xpath')
    import 'cypress-mochawesome-reporter/register';   //html report 


    

// Alternatively you can use CommonJS syntax:
// require('./commands')