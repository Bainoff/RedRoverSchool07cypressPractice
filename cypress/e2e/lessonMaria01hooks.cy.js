/// <reference types="cypress" />


describe('hooks', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/')
    })


    it('verify link Querying', () => {
        // cy.visit('https://example.cypress.io/')
       
        cy.get('ul.home-list li a').contains('Querying').click()
        cy.url().should('include', '/commands/querying')
        cy.get('div.container h1').should('have.text', 'Querying')
    })


    it('verify link2', () => {
        // cy.visit('https://example.cypress.io/')


        cy.get('ul.home-list li a').contains('assert').click()
        cy.url().should('include', '/commands/assertions')
    })


    it('verify link3', () => {
        // cy.visit('https://example.cypress.io/')


        cy.get('a[href="/commands/actions"]').contains('select').click()
        cy.url().should('include', '/commands/actions')
    })
})

