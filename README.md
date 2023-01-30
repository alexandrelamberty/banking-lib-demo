# Banking Library Demo

TypeScript library package demo for school. This project was created with [typescript-starter](https://github.com/bitjson/typescript-starter)

## Usage

Install the library

```shell
npm i @eevos/banking-demo
```

Example of creating a Person, CurrentAccount and Bank class instances.

```ts
import {
  Bank,
  CurrentAccount,
  Person,
} from "@eevos/banking-demo";

// Create a Person
const person = new Person("Doe", "John", new Date("1978-04-12"));

// Create a CurrentAccount associated with the person created, set the credit line and make a deposit
const account = new CurrentAccount("000-111", person);
account.creditLine = 20;
account.deposit(200);

// Create a bank and add the account created
const bank = new Bank("My Bank");
bank.addAccount(account);
```

Read the docs: <https://alexandrelamberty.github.io/banking-lib-demo/>

## Development

Clone the library and update the dependencies:

```shell
git clone https://github.com/alexandrelamberty/banking-lib-demo 
```

execute:

```shell
npm run watch:build 
```

and / or

```shell
npm run watch:test 
```

then start implementing features and adding tests...

## Working locally with a project that use the library

Link the library locally with:

```shell
npm link
```

In the main project that use the library, link the package library to the project:

```shell
npm link @eevos/banking-demo
```

And use anything that will watch your code.

Checkout this post <https://devimalplanet.com/how-to-build-and-run-typescript-watch-mode>

This will allow the live update of the package in the project that use it.

## Tests

Simply run

```shell
npm run test:unit
```

Pour ceux qui sont interessé moi j'ai fait de l'exo une librairie.
Le code source:
La librairie NPM:
