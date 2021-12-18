/* eslint-disable no-undef */

describe('Register module', () => {

    it('Homepage is correct', () => {
        cy.fixture('localData.json').then((localData) => {
            cy.log(localData)
            cy.visit(localData.localURL)
            cy.contains(localData.logoText)
        })
    })

})