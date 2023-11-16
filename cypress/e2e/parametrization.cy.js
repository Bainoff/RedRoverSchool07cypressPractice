import headers from "../fixtures/headers.json"

describe('headersParam', function () {
    beforeEach(function () {
        cy.visit('http://localhost:8080/login')
        cy.get('#j_username').type('admin');
        cy.get('input[name="j_password"]').type('12345678');
        cy.get('button[name="Submit"]').click();
        cy.get('#side-panel #tasks a').as('sideMenuLink')
    })

    headers.sideMenuName.forEach((linkName, idx) => {
        it (`Verify side menu link ${linkName} functionality`, function (){
            cy.wrap(this.sideMenuLink[idx]).click()

            cy.url().should('contain', headers.endPointsSideMenu[idx])
            cy.contains(headers.headerPage[idx])
        })
    })
})