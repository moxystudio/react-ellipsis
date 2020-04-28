# react-ellipsis

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/react-ellipsis
[downloads-image]:https://img.shields.io/npm/dm/@moxy/react-ellipsis.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/react-ellipsis.svg
[build-status-url]:https://github.com/moxystudio/react-ellipsis/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/react-ellipsis/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/react-ellipsis
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/react-ellipsis/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/react-ellipsis
[david-dm-image]:https://img.shields.io/david/moxystudio/react-ellipsis.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/react-ellipsis?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/react-ellipsis.svg

A wrapper component that adds an Ellipsis to the end of a single or multiline text.

## Installation

```sh
$ npm install @moxy/react-ellipsis
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Motivation

Truncating a text and appending an ellipsis (`...`) to the end of it is a very common use case. It's pretty straightforward to implement, by using CSS only, if we're talking single line. However, for multi-line texts, things get a little bit trickier. Even trickier when you don't really know how many lines of text you're going to have, as it all depends on the css properties you will set for the `<div>` your text will be in. This package aims to ease the pain of appending an ellipsis to any text, while also taking care of responsivity.

## Usage

In the component where the truncated text is meant to be placed, import the `Ellipsis` component and just send the text as its child, in `string` format. Like so:

```js
import React from 'react';
import Ellipsis from '@moxy/react-ellipsis';

import styles from '...';

const Home = () => (
    <div>
        <h1>react-ellipsis</h1>
        <Ellipsis className={ styles.text }>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </Ellipsis>
    </div>
);
```

It works just fine if you pass a height and/or width as a style to the `Ellipsis`. The text will then appear truncated, with an ellipsis appended at the end.


## API

These are the props available in `@moxy/react-ellipsis`. 
Besides these, additional props are spread to the component. This means you can also pass some useful callbacks (`onMouseEnter`, `onMouseLeave`, `onClick`, etc) if you want.

#### children

Type: `string`
Required: `true`

A string to be truncated by the `Ellipsis` component.

#### tag

Type: `string`
Default: `p`

A HTML tag to wrap the truncated text.

#### className

Type: `string`

A className to apply to the component.


## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```

## Demo

A demo [Next.js](https://nextjs.org/) project is available in the [`/demo`](./demo) folder so you can try out this component.

First, build the `react-ellipsis` project with:

```sh
$ npm run build
```

To run the demo, do the following inside the demo's folder:

```sh
$ npm i
$ npm run dev
```

*Note: Everytime a change is made to the package a rebuild is required to reflect those changes on the demo.*

## FAQ

### I can't override the component's CSS, what's happening?

There is an ongoing [next.js issue](https://github.com/zeit/next.js/issues/10148) about the loading order of modules and global CSS in development mode. This has been fixed in [v9.3.6-canary.0](https://github.com/zeit/next.js/releases/tag/v9.3.6-canary.0), so you can either update `next.js` to a version higher than `v9.3.5`, or simply increase the CSS specificity when overriding component's classes, as we did in the [`demo`](./demo/pages/index.module.css), e.g. having the page or section CSS wrap the component's one.

## License

Released under the [MIT License](https://www.opensource.org/licenses/mit-license.php).
