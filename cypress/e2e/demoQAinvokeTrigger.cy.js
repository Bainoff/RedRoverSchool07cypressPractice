/// <reference types='cypress' />

describe('Trigger method', () => {
    it('demoQA - drag', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/dragabble')
        cy.get('#dragBox')
        .trigger('mousedown', {which:1, pageX:0, pageY:0})
        .trigger('mousemove', {which:1, pageX:200, pageY:200})
        .trigger('mouseup')
        cy.get('#dragBox').should(($el) => {
            const coord = $el.position()
            console.log(coord)
            expect(coord.left).to.be.at.least(200)
            expect(coord.top).to.be.greaterThan(200)
        })
    })

    it('demoQA - drag', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/droppable')
        cy.get('#draggable')
        .trigger('mousedown', {which:1, pageX:0, pageY:0})
        .trigger('mousemove', {which:1, pageX:350, pageY:50})
        .trigger('mouseup')
        cy.get('#droppable').should('have.text', 'Dropped!')
    })

    it('demoQA - resize', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/resizable')
        cy.get('#resizableBoxWithRestriction')
            .invoke('width', 300).invoke('height', 280)
        cy.get('#resizableBoxWithRestriction')
            .should(($el) => {
                const width = parseInt($el[0].style.width)
                const height = parseInt($el[0].style.height)
                expect(width).to.be.closeTo(300, 3)
                expect(height).to.be.closeTo(280, 3)
            })
    }
    )
    it.only('demoQA - resize Alone', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/resizable')
        cy.get('#resizable')
            .invoke('width', 750).invoke('height', 200)
    })
})