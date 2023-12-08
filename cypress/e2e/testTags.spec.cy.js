/// <reference types="cypress" />

describe('Testing tags through the cypress project', () => {
    it('test2', { tags: '@smoke' }, () => {
        console.log('test2')
        cy.log('test2')
    });

    it('test2', () => {
        console.log('test2')
        cy.log('test2')
    });

    it('test3', () => {
        console.log('test3')
        cy.log('test3')
    });
})