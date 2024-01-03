/// <reference types="cypress" />

describe('Testing session', () => {
    const userName = 'StanP.'
    const password = '_StanP.@1_'
    beforeEach(() => {
        cy.loginToWebSite(userName, password)
        cy.visit('https://demoqa.com/profile')
    })

    it('test1', () => {
        console.log('test2')
        cy.log('test2')
        Cypress.session.clearAllSavedSessions() //before we need to start another session in other window
    });

    it('test2', () => {
        cy.get("div[class='text-right col-md-5 col-sm-12'] #submit").click()
        cy.url().should('equal', 'https://demoqa.com/login')
        console.log('test2')
        cy.log('test2')
    });

    it('test3',  () => {
        cy.get('#gotoStore').click()
        console.log('test3')
        cy.log('test3')
    });
})