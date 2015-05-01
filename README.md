*********************************************************
 INFO - Wallet WebApp
*********************************************************

###App is using NodeJS, before continuing make sure it is installed
Get it [here] (http://nodejs.org)

Front End Framework:
- AngularJS

End to End Testing:
- Protractor

Unit Testing:
- Karma
- Mocha, Chai, Sinon

Build tool:
- Grunt

*********************************************************
 EXECUTION
*********************************************************

#RUNNING THE APP:
Make sure you are inside `wallet` directory and run:
`npm install -g grunt-cli`
and then 
`npm install`

To build the app with production configuration type command:
`grunt build`

In order to build the app with dev configuration type command:
`grunt builddev`

#RUNNING THE UNIT TESTS:

To run tests by using grunt move to `wallet` and run:
`grunt karma`

To run tests individually without grunt go `test` directory and run:
`karma start`

#RUNNING THE E2E TESTS:

You need to configure your Apache server to serve static assets of webapp.
Enter the path where you serve the webapp in `baseUrl` of `protractor.conf.js` file before continuing.

To run tests by using grunt move to `wallet` and run:
`grunt protractor`

To run tests individually without grunt go `test` directory and run:
`protractor protractor.conf.js`

#GRUNT TASKS:

Build dev version. Runs jshint, building templates, setting configuration to dev environment and unit testing
`grunt`

Build both src and minified version with unit testing and production configuration:
`grunt build`

Build both src and minified version with unit testing and development configuration:
`grunt builddev`

Run unit tests on src:
`grunt test`

Run unit tests on minified:
`grunt testmin`

Build debugging version with temp folder available:
`grunt debug`

Change configuration to Production environment:
`grunt prodconfig`

Change configuration to Development environment:
`grunt devconfig`

Create templates:
`grunt templates`
