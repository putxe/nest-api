<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A nest.js minimal API example with clean architecture concepts</p>
    <p align="center">


## Description

You can request two routes (both with GET method): 
- `/` which returns an hello message
- `/players` which returns a short list of football players.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start


## Run tests

```bash
# unit tests
$ pnpm run test

# test coverage
$ pnpm run test:cov
```

## Clean architecture
I've used principles of Clean Architecture and it fits pretty well with nest.js! 

The main concept is to separate the business part (aka domain) from technical part (infrastructure and external dependencies). 

For example for player context there is four layers: 
- `presentation` which expose the data to the world and handle the requests
- `domain` which is the core of the entities, use cases and the business rules
- `application` which contains the services and can call multiples use cases from the domain 
- `infrastructure` which is an external dependency (database for example)
