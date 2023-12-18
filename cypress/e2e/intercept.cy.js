/// <reference types="cypress" />

const texxt = "This determines when, if ever, build records for this project should be discarded. Build records include the console output, archived artifacts, and any other metadata related to a particular build.\n\nKeeping fewer builds means less disk space will be used in the Build Record Root Directory , which is specified on the Configure System screen.\n\nJenkins offers two options for determining when builds should be discarded:\n\nBuild age: discard builds when they reach a certain age; for example, seven days old.\nBuild count: discard the oldest build when a certain number of builds already exist.\nThese two options can be active at the same time, so you can keep builds for 14 days, but only up to a limit of 50 builds, for example. If either limit is exceeded, then any builds beyond that limit will be discarded.\n\nYou can also ensure that important builds are kept forever, regardless of the setting here — click the Keep this build forever button on the build page.\nThe last stable and last successful build are also excluded from these rules.\n\nIn the Advanced section, the same options can be specified, but specifically for build artifacts . If enabled, build artifacts will be discarded for any builds which exceed the defined limits. The builds themselves will still be kept; only the associated artifacts, if any, will be deleted.\n\nFor example, if a project builds some software and produces a large installer, which is archived, you may wish to always keep the console log and information about which source control commit was built, while for disk space reasons, you may want to keep only the last three installers that were built.\nThis can make sense for projects where you can easily recreate the same artifacts later by building the same source control commit again.\n\nNote that Jenkins does not discard items immediately when this configuration is updated, or as soon as any of the configured values are exceeded; these rules are evaluated each time a build of this project completes."
var projName = Math.round((Math.random()*10000))

describe('interceptor example in Jenkins', () => {
    beforeEach('logging in', () => {
        cy.visit('http://localhost:8080/login?from=%2F')
        cy.get('#j_username').type('admin')
        cy.get('#j_password').type('12345678')
        cy.get('button[name="Submit"]').click()
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type(projName)
        cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob').click()
        cy.get('button#ok-button').click()
    })

    before('create pipeline project', () => {

    })


    it('intercept in work', () => {
        cy.intercept('GET', '/descriptor/jenkins.model.BuildDiscarderProperty/help').as('getHelpTooltip')
        cy.intercept('POST', `/job/${projName}/descriptorByName/org.jenkinsci.plugins.workflow.cps.CpsFlowDefinition/checkScript`).as('checkScript')

        cy.get('a[title="Help for feature: Discard old builds"]').click()
        cy.wait('@getHelpTooltip')
        cy.wait('@checkScript')
        cy.get('.help[style="display: block;"] > div').should('be.visible')
            .then($el => {
                expect($el.get(0).innerText).to.equal(texxt)
            })
    })
})