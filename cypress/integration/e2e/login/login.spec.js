/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import { loginPage } from '../../pageObjects/pageElements'
import { FEATURE_FILE_LOGIN } from '../../constants'


describe('Login module', () => {

    before(() => {
        cy.log("in before")
    })

    after(() => {
        cy.log("in after")
    })

    beforeEach(() => {
        cy.log("in beforeEach")
        cy.fixture(FEATURE_FILE_LOGIN).then((demoLogin) => {
            cy.visit(demoLogin.demoURL)
            cy.contains(demoLogin.logoText)

        })
    })

    afterEach(() => {
        cy.log("in afterEach")
    })

    it('Login is correct', () => {
        cy.fixture(FEATURE_FILE_LOGIN).then((demoLogin) => {
            cy.get(loginPage.email).type(demoLogin.email)
            cy.get(loginPage.password).type(demoLogin.password)
            cy.get(loginPage.submit).click()
            cy.contains(demoLogin.logoText)
        })
    })

    it('Login with wrong credentials', () => {
        cy.fixture(FEATURE_FILE_LOGIN).then((demoLogin) => {
            cy.get(loginPage.email).type(demoLogin.email + 'wrong')
            cy.get(loginPage.password).type(demoLogin.password)
            cy.get(loginPage.submit).click()
            cy.contains(demoLogin.errorMSG)
        })
    })

})