# Bank Management Library Demo

TypeScript library package demo for school. This project was created with [typescript-starter](https://github.com/bitjson/typescript-starter)

Read the docs: <https://alexandrelamberty.github.io/bank-management-library-demo/>

## Usage

```shell
npm i @eevos/bank-management-library-demo
```

## Development

Clone the library and update the dependencies:

```shell
git clone https://github.com/alexandrelamberty/bank-management-library-demo 
```

execute:

```shell
npm run watch:build 
```

and / or

```shell
npm run watch:test 
```

then start implemententing features and adding tests...

## Working localy with a project that use the library

Link the library localy with:

```shell
npm link
```

In the main project that use the library, link the package library to the project:

```shell
npm link @eevos/bank-management-library-demo
```

And use anything that will watch your code.

Checkout this post <https://devimalplanet.com/how-to-build-and-run-typescript-watch-mode>

This will allow the live update of the package in the project that use it.
