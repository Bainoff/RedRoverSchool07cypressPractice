1) install nodeJS
2) create folder
3) open this folder in vs code
4) check if the node js is installed with command "node -v"
5) console npm init, all enter
6) console npm install cypress --save -dev - installing
7) console npx cypress open

shadowDom: in cypress.config.js add command "includeShadowDom: true"

opt)
	1) plugin for attachFile('filename.jpg') command: "npm install --save cypress-file-upload"
	2) in file support/commands.js || index.js add the line "import 'cypress-file-upload'"

opt) plugin for API testing:
	1)command "npm i cypress-plugin-api"
	2) add plugin into e2e.js file with the line "import 'cypress-plugin-api'"

opt) plugin for tests tagging
	1) command "npm i -D @cypress/grep" (appears in package.json)
	2) e2e.js/cypress.config.js
	
running selected tests with tag:
it('test2', { tags: '@smoke' }, () => {

with multiple tags:
it('test1', { tags: ['@smoke', '@tag1', '@bug'] }, () => {

from entire project:
"npx cypress run --env grepTags=@smoke"

running selected tests with tags from selected file:
"npx cypress run --spec cypress\e2e\testTags.spec.cy.js --env grepTags=@smoke"

running selected tests with title from selected file:
"npx cypress run --spec cypress\e2e\testTags.spec.cy.js --env grep=test1"

running tests without any tags from selected file:
npx cypress run --spec cypress\e2e\testTags.spec.cy.js --env grepUntagged=true

exclude tests
"npx cypress run --spec cypress\e2e\testTags.spec.cy.js --env grepTags="@smoke --@bug""


wait for debug
setTimeout(() => { debugger; }, 5000)

reports:
cypress cloud - paid reports

mochawesome
https://www.npmjs.com/package/cypress-mochawesome-reporter
1) command in CLI: "npm i --save-dev cypress-mochawesome-reporter"
2) add following content to cypress.config.js file:
"const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});"
3) in file e2e.js add line "import 'cypress-mochawesome-reporter/register';"
