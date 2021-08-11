# Lumin

## Description

This is a recreation of the [luminskin's](https://store.luminskin.com/products) product page 

## Requirement

- `Node`: The latest version of node (v15.14.0)
- `Yarn`: We use `yarn` install packages
- `Git` : We use `git` as a version control system via `github`

## Getting Started

### Installation steps

- Verify that `node` and `yarn` is installed on your local machine by running the command `node -v` and `yarn -v`
- Clone the repository to the folder of choice using `git clone https://github.com/efe-osa/pangaea-lumin.git`
- In the project root directory install project dependencies using `yarn install` or `yarn`.
- To test the project works as expected, run `yarn start`
- Open `http://localhost:3000` with on your browser to see the result.

### Set up environment

```
cp .env-template .env
```

### Installation

```bash
$ yarn
```

### Running the app

```bash
# development
$ yarn start

# build project
$ yarn build

# production mode
$ yarn start

```

### Test

```bash
$ yarn test 

```

### Improvements
- The user experience and performance of the application can be scaled up by integrating `next-pwa`. It will enable offline support and configure progressive web apps features for the site.

https://www.npmjs.com/package/next-pwa
