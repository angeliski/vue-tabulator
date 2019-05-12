# VueTabulator Contributing Guide
> This is adapted from [Vue.js Contributing Guide](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md).

Hi! I'm really excited that you are interested in contributing to VueTabulator. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](https://github.com/angeliski/vue-tabulator/blob/dev/.github/CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Pull Request Guidelines

- The `master` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - GitHub will automatically squash it before merging.

- Make sure `npm test` passes. (see [development setup](#development-setup))

- If adding a new feature:
  - You should open a suggestion issue first and have it approved before working on it.
  - Add accompanying test case.

- If fixing bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 8+**.
We should use [yarn](https://yarnpkg.com).

After cloning the repo, run:

``` bash
$ yarn # install the dependencies of the project
```

### Committing Changes

Commit messages should follow the [commit message convention](./COMMIT_CONVENTION.md) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `yarn commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### Commonly used NPM scripts

``` bash
# Run the development server to test vue-tabulator
$ yarn dev

# build all dist files
$ yarn build

# run the unit tests
$ yarn test:unit

# run the e2e tests in cypress
$ yarn test:e2e

# Run the development server to vuepress documentation
$ yarn docs:dev
```

There are some other scripts available in the `scripts` section of the `package.json` file.

The default test script will do the following: lint with ESLint -> unit tests with coverage -> e2e tests. **Please make sure to have this pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally.

## Project Structure

- **`docs`**: contains the full documentation of vue-tabulator. We use [vuepress](https://vuepress.vuejs.org) for that.

- **`test`**: contains all tests. The unit tests are written with [Jest](https://jestjs.io/). The e2e tests are written for and run with [Cypress](https://www.cypress.io/).

- **`src`**: contains the source code. 

  - **`components`**: contains the Vue components.
  - **`scss`**: contains the scss files. That files is just a copy from [Tabulator](https://github.com/olifolkerd/tabulator/tree/master/src/scss).
  - **`types`**: contains the types for Typescript.

## Credits

Thank you to all the <a href="https://github.com/angeliski/vue-tabulator/graphs/contributors">people who have already contributed</a> to VueTabulator!