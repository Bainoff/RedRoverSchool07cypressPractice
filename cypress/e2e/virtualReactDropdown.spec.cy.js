/// <reference types="cypress" />

describe("Virtual Scroll Dropdown", () => {
    const expectedItem = 'Item #14'

  it("Select particular item", () => {
    cy.visit('https://primereact.org/dropdown')
    cy.get('div.doc-main section.py-4:nth-of-type(8) div.p-dropdown').click()
    searchForOption(expectedItem)
    cy.get('div.doc-main section.py-4:nth-of-type(8) span.p-dropdown-label')
        .should('have.text', expectedItem)
    
        function searchForOption (item, level = 0) {
        if (level > 99) {
            throw new Error('Max recursion level exceeded')
        }
        cy.get('div.doc-main section.py-4:nth-of-type(8) span.p-dropdown-label')
            .then(($el) => {
                const activeOption = $el.text()
                if (activeOption != item) {
                    cy.wrap($el).type('{downarrow}')
                    searchForOption(item, ++level)
                }
                cy.wrap($el).click()
            })
    }

  })
})
