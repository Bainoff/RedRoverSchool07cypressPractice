/// <reference types="cypress"/>

const dayjs = require("dayjs")

describe('Get list users', () => {
    const BASE_URL = 'https://reqres.in'

    it('verify status code', () => {
        cy.request(`${BASE_URL}/api/user?page=2`)
            .its('status')
            .should('be.eq', 200)
    })

    it('verify response has key "data"', () => {
        cy.request(`${BASE_URL}/api/user?page=2`)
            .its('body')
            .then(response => {
                console.log(response)
                expect(response).to.have.any.keys('data')
                expect(response.data).to.be.an('array')

            })
    })

    it('verify status code', () => {
        cy.api(`${BASE_URL}/api/user?page=2`)
            .its('status')
            .should('be.eq', 200)
    })

    it('posted data check', () => {
        let date = dayjs().format('YYYY-MM-DD')

        cy.api({
            method: "POST",
            url: `${BASE_URL}/api/users`,
            body: {
                "name": "morpheus",
                "job": "leader" 
            }
        })
        .its('body')
        .then(response => {
            expect(response.createdAt.slice(0, 10)).to.be.eql(date)
        })
    })

    it('posted data check', () => {

        cy.api('POST', `${BASE_URL}/api/users`, {
                "name": "morpheus",
                "job": "leader" 
            }
        )
        .its('status')
        .should('be.deep.equal', 201)
    })

    it('update data', () => {
        cy.api('PATCH', `${BASE_URL}/api/users/2`, {
            "name": "morpheus",
            "job": "zion resident"
        })
        .its('body')
        .then(job => {
            expect(job.job).to.be.eql("zion resident")
        })
    })

    it('delete user', () => {
        cy.request('DELETE', `${BASE_URL}/api/users/2`)
        .its('status')
        .should('be.deep.equal', 204)
    })
    
})