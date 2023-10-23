// test suite name
describe('first test', () => {
    // test case
         it('verify link Querying', () => {
    //steps
                cy.visit('https://example.cypress.io/')
                cy.get('ul.home-list li a').contains('Querying').click()
    //assertion
                cy.url().should('include', '/commands/querying')
                cy.get('div.container h1').should('have.text', 'Querying')
        })
    })