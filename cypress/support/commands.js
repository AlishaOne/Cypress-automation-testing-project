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
import { booking } from '../integration/API/endpoints/endpoints'
import { loginPage } from '../integration/pageObjects/pageElements'


Cypress.Commands.add('add_a_booking', () => {
    cy.fixture('bookingData.json').then((booking_body) => {
        cy.request('post', booking.booking_url, booking_body).then(
            (res) => {
                expect(res.status).to.eq(200)
            })
    })
})
Cypress.Commands.add('login', (email, password) => {
    cy.fixture('/demoLogin.json').then((demoLogin) => {
        cy.log(demoLogin)
        cy.visit(demoLogin.demoURL)
        cy.get(loginPage.email).type(email)
        cy.get(loginPage.password).type(password)
        cy.get(loginPage.submit).click()
        cy.contains(demoLogin.logoText)
    })
}

)