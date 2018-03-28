# egg-jpush

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-jpush.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-jpush
[travis-image]: https://img.shields.io/travis/eggjs/egg-jpush.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-jpush
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-jpush.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-jpush?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-jpush.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-jpush
[snyk-image]: https://snyk.io/test/npm/egg-jpush/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-jpush
[download-image]: https://img.shields.io/npm/dm/egg-jpush.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-jpush

<!--
Description here.
-->
egg plugin for [jpush](https://github.com/jpush/jpush-api-nodejs-client)

## Install

```bash
$ npm i egg-jpush --save
```

## Dependencies
- [jpush-sdk](https://github.com/jpush/jpush-api-nodejs-client)


## Usage

```js
// {app_root}/config/plugin.js
exports.jpush = {
  enable: true,
  package: 'egg-jpush',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.jpush = {
  appKey: '',
  masterSecret: '',
  appName: '',
  isDebug: true
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```js
await this.app.jpush.sendToOne('120c83f7601980a06c3', 'hello world')
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
