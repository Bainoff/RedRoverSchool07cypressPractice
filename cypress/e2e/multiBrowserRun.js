const cypress = require('cypress')

const spec = 'cypress/e2e/iFrames.cy.js,cypress/e2e/parametrization.cy.js'

cypress.run({
    spec,
    browser: 'chrome'
})

cypress.run({
    spec,
    browser: 'edge'
})

cypress.run({
    spec,
    browser: 'firefox'
})