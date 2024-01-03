# cloud-apps &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![CircleCI Status](https://circleci.com/gh/escobard/cloud-apps-2019.svg?style=shield&circle-token=9a2ace13d3d938798ecb8f2efc56176ea7ede1ca)](https://app.circleci.com/pipelines/github/escobard/cloud-apps-2019) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps#pull-requests) 

A simple note-taking tool, built with JavaScript ES6, designed to be cloud-agnostic and re-usable. Each application in the system can be run independently with npm or with Docker. Development, production, integration and end-to-end (e2e) test environments can be simulated with Docker Compose.

Provide screenshots of application (add note in 3 steps)

Provide system overview diagram (showcase)

# Table of contents

* [Quickstart](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#quickstart)
* [Technical Highlights](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#technical-highlights)
* [Application docs](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#application-docs)
* [How to contribute](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#how-to-contribute)
* [Tools and frameworks](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#tools-and-frameworks)
* [License](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#license)

## Quickstart

### Recommended - Run environments with Docker Compose

[Docker](https://www.docker.com/) must be installed.

#### Development
`docker-compose -f dev.yaml up`

#### Production
`docker-compose -f prod.yaml up`

#### Integration tests
`docker-compose -f integration-tests.yaml up --exit-code-from integration`

#### End to end tests
`docker-compose -f e2e-tests.yaml up --no-attach node-chrome --exit-code-from e2e`

### Run environments with NPM and Docker Compose

[Node.js v14.19.0](https://nodejs.org/en/) and [Docker](https://www.docker.com/) must be installed.

#### Development        
 `npm run dev`            
  
#### Production        
 `npm run start`   
 
#### Integration tests
`npm run integration-tests`

#### End to End tests
`npm run e2e-tests`

### Run applications with NPM or Docker

Find detailed instructions on how to run each application within the [Application docs](https://github.com/escobard/cloud-apps-2019?tab=readme-ov-file#application-docs).

## Technical highlights

As a portfolio piece, this project aims to highlight my expertise in several areas, including:

1. Container orchestration for scale
2. Full stack system built with JavaScript
3. Complete automated testing pyramid
4. Starting point for more complex systems
5. Blueprint for automated tests with CircleCI

### Container orchestration for scale

Leveraging the power of Containers, the system and its applications can be deployed as-is to any cloud provider that supports Docker. It is encouraged to leverage the provided Docker Compose files, which simulate how the system & its applications run independently and together to facilitate multi-environment hosting, deployment and automation.

#### System overview

Describe (dev/uat/prod environments)

#### End to end tests

#### Integration tests

### Full stack system built with JavaScript

Each application in the system uses JavaScript, with the exception of the PostgreSQL database. Leveraging a single programming language for all applications of the system has numerous advantages, including:

- **Cross-functional engineering** - seamlessly switch between application and test code, because it all looks the same!
- **Common design patterns** - consistent design patterns and coding styles between applications facilitates readability, maintenance and extendability
- **Easier to staff and scale** - hiring and training engineers on for a single programming language is easier than (the more common) multi language software stacks
- **Large community** - all tools, libraries and frameworks used in the system have large open source communities

### Complete automated testing pyramid

### Starting point for more complex systems

The system and its applications can be leveraged as a starting point (or blueprint / boilerplate) for more complex systems and applications. Each application provides common design patterns that can be leveraged to facilitate development of new features. All applications are containerized with Docker, ready to be deployed as-is to any cloud provider that has Docker support. 

### Blueprint for automated tests with CircleCI

Leveraging CircleCI, Unit tests for each application (except for the database) are run on every new commit to Github. Once unit tests have passed, integration tests are run, validating API and Database changes. After integration tests pass, end to end (e2e) tests are run, validating that the UI, API and Database work as expected with the new changes. 

Following the [fail-fast](https://testsigma.com/blog/test-automation-achieve-fail-fast-fail-often/) automated testing approach, the system provides a starting point (or blueprint / boilerplate) as-is for more complex automated testing requirements.

## Application docs

[UI](https://github.com/escobard/cloud-apps-2019/blob/master/client/ui)  
[API](https://github.com/escobard/cloud-apps-2019/blob/master/server/api)  
[Database](https://github.com/escobard/cloud-apps-2019/tree/master/server/postgres)  
[Integration tests](https://github.com/escobard/cloud-apps-2019/tree/master/server/tests)  
[End to end tests](https://github.com/escobard/cloud-apps-2019/tree/master/client/tests)

## Tools and frameworks

[Node.js](https://nodejs.org/en)  
[Docker](https://www.docker.com/)     
[Docker Compose](https://docs.docker.com/compose/)  
[CircleCI](https://circleci.com)  
[React](https://react.dev/)  
[Express.js](https://expressjs.com/)  
[PostgreSQL](https://www.postgresql.org/)  
[Jest](https://jestjs.io/)  
[Nightwatch](https://nightwatchjs.org/)      
[Selenium](https://www.selenium.dev/)           
[Supertest](https://www.npmjs.com/package/supertest)

## How to contribute

### Commits

Our commits follow the [Angular commit styleguide](https://gist.github.com/brianclements/841ea7bffdb01346392c). Each commit should be carefully thought out and only contain files affected within the scope of the commit message.

### Branching

A branch's name should reference a story and the type of work being committed.

### Pull Requests

Each pull request must pass a review from another contributor and all automated tests.

### Issues

Feel free to open an issue ticket, please leave a screenshot and a detailed instructions on how to replicate the issue.  

## License

This repository is protected under the [MIT License](https://choosealicense.com/licenses/mit/).
