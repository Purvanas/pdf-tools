'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { app } = require('../server');

test('sert l’interface et garde le journal privé sans jeton', async (t) => {
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const { port } = server.address();

  const home = await fetch(`http://127.0.0.1:${port}/`);
  assert.equal(home.status, 200);
  assert.match(await home.text(), /PDF Tools/);
  assert.equal(home.headers.get('x-content-type-options'), 'nosniff');

  const errors = await fetch(`http://127.0.0.1:${port}/api/errors`);
  assert.equal(errors.status, 404);
});
