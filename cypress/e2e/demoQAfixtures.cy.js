// cypress/e2e/secondReview.spec.cy.js

/// <reference types='cypress' />

describe('Second Review', () => {

    let allNamesNew;
  
    // const formData = {
    //   'firstName': 'Stan',
    //   'lastName': 'P.'
    // };
  
    beforeEach(() => {
      cy.fixture('secondReview').as('allData')
    })
  
    it('Testing tool tips', () => {
      cy.visit('https://demoqa.com/tool-tips');
      cy.get('#toolTipButton').trigger('mouseover');
  
      cy.get('div.tooltip-inner').should('have.text', 'You hovered over the Button');
    });
  
    it('Filing in the form', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      cy.get('#firstName')
        .should('have.text', '')
        .type(formData.firstName)
        .should('have.value', formData.firstName);
      cy.get('#lastName')
        .should('have.text', '')
        .type(formData.lastName)
        .should('have.value', formData.lastName);
      cy.get('#submit').click();
    });
  
    it('Filing in the form: fixtures 1 version', function() {
      cy.visit('https://demoqa.com/automation-practice-form');
      cy.get('#firstName')
        .should('have.text', '')
        .type(this.allNames.firstName)
        .should('have.value', this.allNames.firstName);
      cy.get('#lastName')
        .should('have.text', '')
        .type(this.allNames.lastName)
        .should('have.value', this.allNames.lastName);
      cy.get('#submit').click();
    });
  
    it('Filing in the form: fixtures 2 version', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
      cy.get('#firstName')
        .should('have.text', '')
        .type(allNamesNew.firstName)
        .should('have.value', allNamesNew.firstName);
      cy.get('#lastName')
        .should('have.text', '')
        .type(allNamesNew.lastName)
        .should('have.value', allNamesNew.lastName);
      cy.get('#submit').click();
    });
  
    it.only('Filing in the form: fixtures 3 version', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
  
      cy.get('@allData').its('formData').then((allNamesNew) => {
        cy.get('#firstName')
          .should('have.text', '')
          .type(allNamesNew.firstName)
          .should('have.value', allNamesNew.firstName);
        cy.get('#lastName')
          .should('have.text', '')
          .type(allNamesNew.lastName)
          .should('have.value', allNamesNew.lastName);
        cy.get('#submit').click();
      }) ; 
    });
  });
  