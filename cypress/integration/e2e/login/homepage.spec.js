/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import {loginPage} from '../../pageObjects/pageElements'

describe('Register module', () => {

    before(() => {
        cy.log("in before")
    })
    after(() => {
        cy.log("in after")
    })

    beforeEach(() => {
        cy.log("in beforeEach")
      });
    
      afterEach(() => {
        cy.log("in afterEach")
      });

    it('Homepage is correct', () => {
        cy.fixture('localData.json').then((localData) => {
        cy.log(localData)
        cy.visit(localData.localURL)
        cy.contains(localData.logoText)
        // cy.get(loginPage.email).type(localData.email)
        // cy.get(loginPage.password).type(localData.password)
        // cy.get(loginPage.submit).click()
    })

    })

})