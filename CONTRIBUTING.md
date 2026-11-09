# Contributing to doofplus-website

First off, thanks for taking the time to contribute!

## Development Process
1. Use the develop branch as the base for your feature branches.
2. Follow Domain-Driven Design (DDD) principles: create domain, application, infrastructure, and presentation layers for each new Bounded Context.
3. Verify your code with **npm run build** and ensure the tests pass before committing.


## Commit Guidelines
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
Please ensure your commit messages follow this format:
- feat(hero): add hero release view
- fix(iam): resolve login token issue
- docs(readme): update setup instructions

Do not use fast-forward merges when merging to develop.