/// <reference types="cypress" />


describe('aliasVariable', () => {
    beforeEach(function() {
        cy.viewport(1920, 1080)
        cy.visit('https://openweathermap.org/')
        cy.get('#desktop-menu a[href="/guide"]').invoke('text').as('menuGuide')
    })


    it('verify menu Guide', function()  {
        cy.get('#desktop-menu a[href="/guide"]').click()
        cy.get('h1.breadcrumb-title').should('have.text', this.menuGuide)
    })
})

