/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import { loginPage, forgotPassPage } from '../../pageObjects/pageElements'
import { FEATURE_FILE_LOGIN } from '../../constants'

describe('Login module', () => {
    beforeEach('Visit forgot password page for each test', () => {
        cy.fixture(FEATURE_FILE_LOGIN).then((demoLogin) => {
            cy.visit(demoLogin.demoURL)
            cy.contains(demoLogin.logoText)
            cy.xpath(loginPage.forgotPass).click()
        })
    })
    afterEach(() => {
        cy.log("In after each test")
    })
    // The request only can be sent once within few minutes, so marks it as skip.
    it.skip('Forgot password can be reset correct', () => {
        cy.fixture(FEATURE_FILE_LOGIN).then((demoLogin) => {
            cy.contains(forgotPassPage.forgotPassText)
            cy.get(forgotPassPage.username).type(demoLogin.email)
            cy.get(forgotPassPage.reset).click()
            cy.contains(forgotPassPage.resetCorrectMsg)

        })
    })

    it('Forgot password can not be reset with cancel button', () => {
        cy.fixture(FEATURE_FILE_LOGIN).then((demoLogin) => {
            cy.get(forgotPassPage.username).type(demoLogin.email)
            cy.get(forgotPassPage.cancel).click()
            cy.contains(loginPage.loginPanelText)

        })
    })

    it('Forgot password can not be reset with wrong username', () => {
        cy.fixture(FEATURE_FILE_LOGIN).then((demoLogin) => {
            cy.get(forgotPassPage.username).type(demoLogin.email + "wrong")
            cy.get(forgotPassPage.reset).click()
            cy.contains(forgotPassPage.resetIncorrectErrorMsg)

        })
    })
})