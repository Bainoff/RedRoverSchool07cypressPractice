const expectedNames = [
  "Elements",
  "Forms",
  "Alerts, Frame & Windows",
  "Widgets",
  "Interactions",
  "Book Store Application",
];

describe("demoQA", () => {
  it("1st test", () => {
    cy.visit("https://demoqa.com/");
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
    cy.get("#userName").type("john");
    cy.wait(1000);
    cy.get("#userEmail").type("init@mail.com");
    cy.get("#currentAddress").type(
      "Brighton str., 12/34, Ohio, CHICAGO, 12345"
    );
    cy.get("#permanentAddress").type("the same");
    cy.get("#submit").click();
  });
});
