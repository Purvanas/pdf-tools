'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { parsePageRange } = require('../public/page-range');

test('accepte des pages et plages, déduplique puis trie', () => {
  assert.deepEqual(parsePageRange('7, 1-3, 2, 10-12', 12), [1, 2, 3, 7, 10, 11, 12]);
});

test('rejette les plages ambiguës ou hors document', () => {
  for (const value of ['', '2foo', '3-', '4-2', '0', '1,', '9']) {
    assert.equal(parsePageRange(value, 8), null, value);
  }
});
