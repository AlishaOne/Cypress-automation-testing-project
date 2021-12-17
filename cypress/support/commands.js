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
import {booking} from '../integration/API/endpoints/endpoints'

Cypress.Commands.add('add_a_booking', () => {
        const body = {
            firstname : "JK",
            lastname : "Rolling",
            totalprice : 50,
            depositpaid : true,
            bookingdates : {
                checkin : "2021-12-01",
                checkout : "2021-12-01"
            },
            additionalneeds : "no"
        }
        cy.request('post', booking.booking_url, body).then(
            (res) => {
            expect(res.status).to.eq(200)    
        })
        })
