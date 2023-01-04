# TypeScript

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)

## General Info

TypeScript analyses my code constantly. And can give great information on my code without me needing to do anything.

If you want to check your JavaScript code with typescript parser, and you use VS Code, just add this in your first line
`//@ts-check`

<!-- ### Screenshot -->

## Technologies

A list of technologies used within the project:

- [Node JS](https://nodejs.org/en/download/package-manager/#arch-linux): Version 19.3
- [TypeScript](https://www.typescriptlang.org/): Version 4.9
- [TS-Node](https://www.npmjs.com/package/ts-node): Version 10.9.1
- [Nodemon](https://www.npmjs.com/package/nodemon): Version 2.0.20

## Installation

A little intro about the installation.

Global installation

```javascript
$ sudo pacman -S nodejs npm
// If you want to run node directly with TS without transpile, install ts-node and tslib
$ sudo npm install -g typescript ts-node tslib @types/node
$ tsc --version // typescript version
$ ts-node --version // typescript node version

// To run typescript directly with ts-node
$ ts-node main.ts
```

Poject installation

```javascript
$ sudo pacman -S nodejs npm
// If you want to run node directly with TS without transpile ts-node main.ts, install ts-node and tslib
$ sudo npm install -D typescript ts-node tslib @types/node
$ npx tsc --version // typescript version
$ npx ts-node --version // typescript node version

// To run typescript directly with ts-node
$ npx ts-node main.ts
```

Install nodemon to watch changes using typescript directly.

```javascript
$ sudo npm i -g nodemon // globaly
$ npm i -D nodemon // locally

// Watch ts changes using the demon
$ nodemon main.ts // globally
$ npx nodemon main.ts // locally
```

For this project just install its dependencies and check examples.

```javascript
$ npm install
```

<!-- Side information: To use the application in a special environment use `lorem ipsum` to start -->

## Collaboration

> Just create a pull request if you want to add a new explain using TS.

<!-- ## FAQs

---

A list of frequently asked questions

1. **This is a question in bold**
   Answer of the first question with _italic words_.
2. **Second question in bold**
   To answer this question we use an unordered list:

- First point
- Second Point
- Third point

3. **Third question in bold**
   Answer of the third question with _italic words_.
4. **Fourth question in bold**
   | Headline 1 in the tablehead | Headline 2 in the tablehead | Headline 3 in the tablehead |
   |:--------------|:-------------:|--------------:|
   | text-align left | text-align center | text-align right | -->
