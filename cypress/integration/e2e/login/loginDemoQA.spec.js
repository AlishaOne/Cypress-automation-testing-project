/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import { loginPageDemoQA } from '../../pageObjects/pageElements'
import { FEATURE_FILE_LOGIN_DEMOQA } from '../../constants'

describe('Login module', () => {

    before(() => {
        cy.log("in before")
    })

    after(() => {
        cy.log("in after")
    })

    beforeEach(() => {
        cy.log("in beforeEach")
        cy.fixture(FEATURE_FILE_LOGIN_DEMOQA).then((demoLogin) => {
            cy.visit(demoLogin.demoURL)
            cy.contains(demoLogin.logoText)

        })
    })

    afterEach(() => {
        cy.log("in afterEach")
    })

    it('Login is correct', () => {
        cy.fixture(FEATURE_FILE_LOGIN_DEMOQA).then((demoLogin) => {
            cy.get(loginPageDemoQA.email).type(demoLogin.email)
            cy.get(loginPageDemoQA.password).type(demoLogin.password)
            cy.get(loginPageDemoQA.submit).click()
            cy.contains(demoLogin.afterLoginText)
            cy.get(loginPageDemoQA.logout).click()
        })
    })

    it('Login with wrong credentials', () => {
        cy.fixture(FEATURE_FILE_LOGIN_DEMOQA).then((demoLogin) => {
            cy.get(loginPageDemoQA.email).type(demoLogin.email + 'wrong')
            cy.get(loginPageDemoQA.password).type(demoLogin.password)
            cy.get(loginPageDemoQA.submit).click()
            cy.contains(demoLogin.errorMSG)
        })
    })

})