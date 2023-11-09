/// <reference types='cypress' />

describe('Pop-up windows', () => {
    it('Alert window', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql('You clicked a button')
        })
    })

    it('Confirm window, click on "OK"', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Do you confirm action?')
        })
        cy.get('#confirmResult')
            .should('contain', 'You selected')
            .and('contain', 'Ok') 
    })
    
    it('Confirm window, click on "cancel"', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Do you confirm action?')
            return false
        })
        cy.get('#confirmResult')
            .should('contain', 'You selected')
            .and('contain', 'Cancel') 
    })

    it('Prompt window', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.window().then(function (question) {
            cy.get('#promtButton').click()
            cy.stub(question, 'prompt').returns('Hello')
        })
        cy.get('#promptResult').should('contain', 'Hello')
    })
})