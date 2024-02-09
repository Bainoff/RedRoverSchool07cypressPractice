/// <reference types="cypress" />


describe("US_003.004 | Header > Cart", () => {
  it.skip("TC_003.004.001 Header > Cart > Popup window", () => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.wait(1000)
    cy.get("div.minicart-wrapper").click()
    cy.get("div.block-minicart").should('be.visible')
  })
  it('Add to cart with intercept', () => {
    cy.visit("https://magento.softwaretestingboard.com/", {failOnStatusCode: false})
    // const endpoint = 
    // cy.get("a[title='Radiant Tee']").click()
    // cy.get("#option-label-size-143-item-166").click()
    // cy.get("#option-label-color-93-item-50").click()
    cy.intercept('GET', '/customer/section/load/?sections=cart%2Cmessages&force_new_section_timestamp=true&_=1705696878305').as('cart');
    // cy.get("button[title='Add to Cart']").click()
    cy.wait('@cart')
    // .then((interception) => {
    //     expect(interception.response.statusCode).to.eq(200);
    // });
    cy.get("div.minicart-wrapper").should("be.visible")
    cy.get("div.minicart-wrapper").click()
  })
})
