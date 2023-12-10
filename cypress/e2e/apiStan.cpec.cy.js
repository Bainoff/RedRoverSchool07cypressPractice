/// <reference types='cypress'/>

let token, expires
const userName = 'StanP.'

describe('API testing', () => {
    it.skip('authorization', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/Authorized',
            headers:{

            },
            body: {
                userName,
                password: '_StanP.@1_'
            }
        }).then((response) => {
            expect(response.status).to.be.eql(200)
        })
    })

    it('generate token', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: {
                userName,
                password: '_StanP.@1_'
            }
        }).then((response) => {
            expect(response.status).to.be.eql(200)
            console.log(response)
            token = response.body.token
            expires = response.body.expires
            console.log(token, expires);
        })
    })

    it('login to site', () => {
        cy.setCookie('userName', userName)
        cy.setCookie('token', token)
        cy.setCookie('expires', expires)
        cy.visit('https://demoqa.com/books')
        
    })
})