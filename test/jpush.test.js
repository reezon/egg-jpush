'use strict';

const mock = require('egg-mock');

describe('test/jpush.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/jpush-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, jpush')
      .expect(200);
  });
});
