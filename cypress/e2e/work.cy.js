/// <reference types='cypress' />

class Domik {
  getSectionLocator = () => cy.get(".jenkins-section > h2");

  getArrayFunc = () => {
    cy.get(".jenkins-section > h2").then(($els) => {
      return Cypress.$.makeArray($els).map(($el) => $el.innerText);
    });
  };

  checkVisibilityAndConsistansyMethod() {
    this.getSectionLocator()
      .should("be.visible")
      .and("have.prop", "tagName", "H2");
    return this;
  }

  getArrayAssertionMethod() {
    expect(this.getArrayFunc).to.deep.equal(arrayFromFixtures);
    return new NewJobPage();
  }
}
