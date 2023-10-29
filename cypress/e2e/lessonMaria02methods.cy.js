/// <reference types="cypress" />


describe('Common methods', () => {
    it('test1', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://openweather.co.uk/products')


      cy.get('#desktop-menu li a[href="/products"]').as('menuSupport')
      cy.get('@menuSupport').should('have.attr', 'href')
      cy.get('@menuSupport').click()
     
      cy.get('a[href="#current"]').find('h4').should('have.text', 'Current & forecasts')
      // cy.pause()
      cy.log('This is my first test')
      cy.title().should('include', 'Products')
      cy.get('#current a.btn_block').should('have.css', 'background-color', 'rgb(233, 110, 80)')
    })


    it('method .check()', () => {
      cy.visit('https://the-internet.herokuapp.com/checkboxes')


      cy.get('form input').check({ multiple: true }).should('be.checked')
      cy.get('form#checkboxes input:nth-child(1)').uncheck().should('not.be.checked')
    })


    it('method .select()', () => {
      cy.visit('https://the-internet.herokuapp.com/dropdown')
     
      cy.get('select#dropdown').select('Option 2').should('have.value', '2')
    })


    it('verify "exist" assertion', () => {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')


      cy.get('button[onclick="addElement()"]').click()
      cy.get('#elements button.added-manually').should('exist').click()
      cy.get('#elements button.added-manually').should('not.exist')
    })


    it('method .ivoke() and trigger()', () => {
      const expectedMenuText = ['FAQ', 'How to start', 'Ask a question']
        cy.viewport(1920, 1080)
        cy.visit('https://openweathermap.org/')
      cy.get('#support-dropdown').click().trigger('mousedown')
      //   cy.get('#support-dropdown-menu li a').each(($el, ind) => {
      //    expect($el.text()).to.equal(expectedMenuText[ind])
      //   })


        cy.get('#support-dropdown-menu li a').then($els => {
         const textArray = Cypress.$.makeArray($els).map(($el) => $el.innerText);
         expect(textArray).to.eql(expectedMenuText)
        })


      //   cy.get('#support-dropdown-menu li a').each($el => {
      //     if ($el.text() == 'How to start') {
      //       cy.wrap($el).click()
      //     }
      //   })


      //   cy.get('div#desktop-menu a[href*="marketplace"]')
      //     .invoke('removeAttr', 'target')
      //     .click()
   })
})

