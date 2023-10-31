const expectedNames = [
  "Elements",
  "Forms",
  "Alerts, Frame & Windows",
  "Widgets",
  "Interactions",
  "Book Store Application",
];

const textBox = {
    fullName: 'Barbara Streisand',
    email: 'star' + Math.round(Math.random()*1000) + '@hollywood.com',
    currAddress: 'Green str., 15, Ohio, CA',
    permAddress: 'Yellow str., 16, Ohio, CA'
}
describe("demoQA", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/");
  })
  it("Text box", () => {
    cy.get("div.card")
      .should("have.length", 6)
      .then(($els) => {
        const namesofElements = Cypress.$.makeArray($els).map(
          ($el) => $el.innerText
        );
        console.log(namesofElements);
        expect(namesofElements).to.deep.equal(expectedNames);
      });
    cy.get("div.card")
      .should("have.length", 6)
      .each(($el, idx) => {
        const namesofElement = $el.text();
        console.log(namesofElement);
        expect(namesofElement).to.deep.eql(expectedNames[idx]);
      });
    cy.get("div.card")
      .should("have.length", 6)
      .then(($els) => {
        const namesofElements = Cypress._.map(
          Cypress.$.makeArray($els),
          "innerText"
        );
        return namesofElements;
      })
      .should("deep.eql", expectedNames);

    cy.get("div.card:first-child").click();
    cy.get("div.main-header").should("be.visible").and("have.text", "Elements");
    cy.get("div.main-header").then(($el) => {
      let text = $el.text();
      cy.log(text);
      expect(text).to.equal("Elements");
      expect(text).to.eql("Elements");
    });
    cy.get("#item-0 > span").contains("Text Box").click();
    cy.url().should("be.equal", "https://demoqa.com/text-box");
    cy.url().should("eql", "https://demoqa.com/text-box");
    cy.get("#userName").type(`${textBox.fullName}`);
    cy.wait(1000);
    cy.get("#userEmail").type(`${textBox.email}`);
    cy.get("#currentAddress").type(`${textBox.currAddress}`);
    cy.get("#permanentAddress").type(`${textBox.permAddress}`);
    cy.get("#submit").click();
    cy.get('#output > div > p:nth-child(1)').should('contain', textBox.fullName)
    cy.get('#output > div > p:nth-child(2)').should('contain', textBox.email)
    cy.get('#output > div > p:nth-child(3)').should('contain', textBox.currAddress)
    cy.get('#output > div > p:nth-child(4)').should('contain', textBox.permAddress)
  });
  it('Check box', () =>{
    cy.get("div.card:first-child").as('Elements').click();
    cy.get('#item-1 .text').contains('Check Box').click();
    cy.get('.main-header').should('have.text', 'Check Box')
    cy.get('[title = "Expand all"] > svg').click()
    setTimeout(1000)
    cy.get('[title = "Collapse all"] > svg').click()
    cy.get('[title="Toggle"]:nth-child(1)').click()

  })
});
