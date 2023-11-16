/// <reference types="cypress" />

describe('Shadow DOM', () => {
    const inputData = 'Test data'
    it('Type in the input field', () => {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#userName')
            .shadow()
            .find('#kils')
            .type(inputData)
            .invoke('val')
            .then((text) => {
                expect(text).to.eql(inputData)
            })
    })

    it('Type in the input field with "includeShadowDom: true" added to cypress.config.js file', () => {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#kils')
            .type(inputData)
            .invoke('val')
            .then((text) => {
                expect(text).to.eql(inputData)
            })
    })

    it.only('Type in the input field', () => {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#kils', {includeShadowDom: true})
            .type(inputData)
            .invoke('val')
            .then((text) => {
                expect(text).to.eql(inputData)
            })
    })
})