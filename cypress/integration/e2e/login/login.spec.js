/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import { loginPage } from '../../pageObjects/pageElements'

describe('Login module', () => {

    before(() => {
        cy.log("in before")
    })

    after(() => {
        cy.log("in after")
    })

    beforeEach(() => {
        cy.log("in beforeEach")
    })

    afterEach(() => {
        cy.log("in afterEach")
    })

    it('Login is correct', () => {
        cy.fixture('demoLogin.json').then((demoLogin) => {
            cy.log(demoLogin)
            cy.visit(demoLogin.demoURL)
            cy.get(loginPage.email).type(demoLogin.email)
            cy.get(loginPage.password).type(demoLogin.password)
            cy.get(loginPage.submit).click()
            cy.contains(demoLogin.logoText)
        })
    })

    it('Login with wrong credentials', () => {
        cy.fixture('demoLogin.json').then((demoLogin) => {
            cy.log(demoLogin)
            cy.visit(demoLogin.demoURL)
            cy.get(loginPage.email).type(demoLogin.email + 'wrong')
            cy.get(loginPage.password).type(demoLogin.password)
            cy.get(loginPage.submit).click()
            cy.contains(demoLogin.errorMSG)
        })
    })

})