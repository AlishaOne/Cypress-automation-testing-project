/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
import { loginPageDemoQA, widgetsPage } from '../../pageObjects/pageElements'
import { FEATURE_FILE_LOGIN_DEMOQA } from '../../constants'

describe('Features', () => {

    beforeEach(() => {
        cy.log("in beforeEach")
        cy.fixture(FEATURE_FILE_LOGIN_DEMOQA).then((demoLogin) => {
            cy.visit(demoLogin.widgetsURL)
            cy.get(widgetsPage.widgets).click
            cy.get(widgetsPage.mainHeader).contains(widgetsPage.widgetText)

        })
    })

    afterEach(() => {
        cy.log("in afterEach")
    })

    it('Accordian', () => {
        cy.xpath(widgetsPage.accordian).click()
        cy.get(widgetsPage.sectionOneHeader).click()
        cy.contains(widgetsPage.sectionOneText)
        cy.get(widgetsPage.sectionTwoHeader).click()
        cy.contains(widgetsPage.sectionTwoText)

    })

    it('Auto complete', () => {
        cy.xpath(widgetsPage.autoComplete).click()
        cy.contains(widgetsPage.autoCompleteText)
        cy.get(widgetsPage.autoCompleteInputMultiColor).type(widgetsPage.autoCompleteInputColorRed)
        cy.get(widgetsPage.autoCompleteInputMultiColor).type(widgetsPage.autoCompleteInputColorGreen)
        cy.get(widgetsPage.autoCompleteInputOneColor).type(widgetsPage.autoCompleteInputColorBlue)
        cy.contains("Red") //case sensitive
        cy.contains("Green")
        cy.contains("Blue")

    })
})
