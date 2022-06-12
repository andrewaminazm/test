// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import 'cypress-fill-command';
import { commandTimings } from 'cypress-timings'
commandTimings()

Cypress.Commands.add("login", () => {
    cy.visit('http://printcheq.devartlabcrm.com')
    cy.wait(8000)
   
    cy.get('#txtUserName').type('630')
    
    cy.get('#txtPassword').type('630')
   
    cy.get('.btn').click()
    cy.wait(8000)



    })
    Cypress.Commands.add("logins", () => {
        cy.visit('http://23.250.115.98:2078/cms/CommonData/Login?ReturnUrl=%2Fcms%2FPatientAdmin%2FSendNotification')

        cy.get('#Email').type('admin3@mozej.com')
        cy.wait(7000)
        cy.get('#Password').type('a12345678')
        cy.wait(7000)
        cy.get('#loginForm > .btn').click().then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.log('malkelogin ')
          })
        
        
        cy.wait(7000)
       
    
    
        })
        Cypress.Commands.add("logiins", () => {
          cy.visit('http://23.250.115.98:2078/patient/Login')
          cy.get('#Phone').click({ force: true }).type('01211782855')
          cy.get('#Password').click({ force: true }).type('andrewA2')
          cy.get('#loginForm > .btn-primary').click({ force: true }) .then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.log('malkelogin ')
          })
        
        cy.wait(7000)
        
        
       
       
    
    
        })

        Cypress.Commands.add("logiiins", () => {
          cy.visit('http://23.250.115.98:2078/doctor/login')
          cy.get('#Email').click({ force: true }).type('andrewazmy93@gmail.com')
          cy.get('#Password').click({ force: true }).type('andrew22A')
          cy.get('#loginForm > .btn').click({ force: true }).then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.log('makelogin ')
          })
          cy.wait(7000)
        
    
        
        
       
       
    
    
        })

        Cypress.Commands.add("truflalogins", () => {
          cy.visit(' https://bestinsurance.trumarket.dev/').then(() => {
      // we are trying to return something
      // from the .within callback,
      // but it won't have any effect
    cy.log('enter website ')
  })

     cy.wait(8000)



     cy.get('#username').type('andrew.a@trufla.com').then(() => {
    // we are trying to return something
    // from the .within callback,
    // but it won't have any effect
   cy.log('enter user name ')
    /* ==== Generated with Cypress Studio ==== */
   
    /* ==== End Cypress Studio ==== */
   })

     cy.wait(8000)
     cy.get('#password').type('01211782855A@aa').then(() => {
         // we are trying to return something
         // from the .within callback,
         // but it won't have any effect
       cy.log('enter password ')
       })
     cy.wait(8000)

     cy.get('#kc-login').click().then(() => {
       // we are trying to return something
       // from the .within callback,
       // but it won't have any effect
    cy.log('press login ')
     })

     cy.wait(8000)

     
        
       
       
    
    
        })

    import '@testing-library/cypress/add-commands';
    import {configure} from '@testing-library/cypress'
configure({testIdAttribute: 'data-test-id'})

require('cypress-downloadfile/lib/downloadFileCommand')


