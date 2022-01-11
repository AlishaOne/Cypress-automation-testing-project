/* eslint-disable no-undef */

describe('Login module', () => {

    it('Homepage is correct', () => {
        cy.fixture('localData.json').then((localData) => {
            cy.log(localData)
            cy.visit(localData.localURL)
            cy.contains(localData.logoText)
        })
    })

    it('Homepage is incorrect', () => {
        cy.fixture('localData.json').then((localData) => {
            cy.log(localData)
            cy.visit(localData.localURL)
            cy.contains(localData.logoText + " wrong")
        })
    })

})