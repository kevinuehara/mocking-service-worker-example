# Mocking Service Worker Example

This project is an example where I'm using MSW for explain how mock a call for a API without mock a data in your code.
MSW is a 'fake-backend' where we can integrate and intercept the calls for the API.

With MSW you can intercept the call to an API using the Service Worker and facilitate integration and testing after the API is done.

There are two branches:

- `main` (with MSW integration)
- `without-msw` (where you can compare when you don't have the msw in your project)

Also I'm using the `faker` to dynamically generate data for our 'fake api'

## Pre-requisites

- Node
- Yarn or NPM

## How to run?

1. Install dependencies

```sh
yarn
```

or

```sh
npm install
```

2. Running the project

```sh
yarn dev
```

or

```sh
npm run dev
```
