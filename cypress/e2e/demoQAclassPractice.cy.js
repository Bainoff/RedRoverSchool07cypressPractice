//import { expectedNames } from "./demoQa.cy";

describe('demoQA', () => {
    it('', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.viewport(1920, 1080)
        cy.get('#firstName').type('Mikolka')
        cy.get('#lastName').type('Karapuz').clear().type('Paravoz')
        cy.get('#userEmail').type('hypertrain@mail.cy')
        cy.get("div [value='Female']").check({force: true}).should('be.checked')
        cy.get('#gender-radio-1').should('not.be.checked')
        cy.get('#userNumber').type('1234567890')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('October').should('have.value', '9')
        cy.get('.react-datepicker__year-select').select('1939').should('have.value', '1939')
        cy.get('.react-datepicker__day').contains('17').click()
        cy.get('#subjectsInput').type('Chemistry').type('{enter}')
        cy.get('#hobbies-checkbox-3').check({force: true})
        cy.get('#uploadPicture').selectFile('D:/courses/automation/RedRoverSchool/07/cypress/cypress/e2e/pict1.png')
        cy.get('#currentAddress').type('Islandia, Rejkjawik, Whales str., 33-22/1')
        // cy.get('.css-1wy0on6').click()
        // cy.get('[id^="react-select-3-option-"]').then(($els) => {
        //     const state = Cypress.$.makeArray($els).filter((el) => $el.innerText == 'NCR')
        //     return cy.wrap(state)
        // }).click()
    })
})
