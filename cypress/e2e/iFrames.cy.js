/// <reference types="cypress" />

describe('iFrame testing', () => {
    it.only(`click on the element in the iFrame window in ${Cypress.browser.name}`, () => {
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1')
            .its('0.contentDocument')
            .its('body')
            .find('button#click_me_1')
            .click()
            .should('have.text', 'Clicked')
        cy.get('#frame1')
            .its('0.contentDocument')
            .find('#frame2')
            .its('0.contentDocument')
            .find('button#click_me_2')
            .click()
    })

    it('iFrame - click on the element tile', () => {
        cy.visit('https://globalsqa.com/demo-site/frames-and-windows/#iFrame')
        cy.get('iframe[name=globalSqa')
            .its('0.contentDocument')
            .find('div.isotope-item')
            .eq(0)
            .click()
        cy.get('iframe[name=globalSqa')
            .its('0.contentDocument')
            .find('div.page_heading h1')
            .should('have.text', 'Selenium 3.0 Training')
    })
})