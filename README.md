# inject-snippet [![NPM version](https://badge.fury.io/js/inject-snippet.svg)](http://badge.fury.io/js/inject-snippet)

> Inject a snippet of code or content into a string.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i inject-snippet --save
```

## Usage

```js
var inject = require('inject-snippet');
```

Inject a snippet into a string with placeholders (used for subsequent insertions):

```js
var str = 'before <!-- snippet --> after';
inject(str, 'foo');
//=> 'before <!-- snippet -->\nfoo\n<!-- endsnippet --> after'
```

Inject a snippet into a string without placeholders:

```js
var str = 'before <!-- snippet --> after';
inject(str, 'foo', {placeholders: false})
//=> 'before foo after'
```

## Related projects

* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](http://assemble.io)
* [boilerplate](https://github.com/jonschlinkert/boilerplate): Easily create, share and use boilerplates for node.js and web projects.
* [snippet](https://github.com/jonschlinkert/snippet): CLI and API for easily creating, reusing, sharing and generating snippets of code from the… [more](https://github.com/jonschlinkert/snippet)
* [scaffold](https://github.com/jonschlinkert/scaffold): Generate a project or files from scaffolds.
* [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/inject-snippet/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 15, 2015._