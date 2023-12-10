/// <reference types="cypress" />

describe('Testing tags through the cypress project', () => {
    it('test1', { tags: ['@smoke', '@tag1', '@bug'] }, () => {
        console.log('test2')
        cy.log('test2')
    });

    it('test2', { tags: ['@smoke', '@tag2'] }, () => {
        console.log('test2')
        cy.log('test2')
    });

    it('test3', { tags: ['@smoke', '@tag3'] }, () => {
        console.log('test3')
        cy.log('test3')
    });
})