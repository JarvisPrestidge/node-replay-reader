/* eslint-disable no-undef */
const assert = require('assert');
const { ReplayReader } = require('.');

describe('Parsing a replay', () => {
  it('Should initialize the reader', () => {
    // eslint-disable-next-line no-unused-vars
    const reader = new ReplayReader('./examples/replays/1.replay');
  });

  it('Should parse a replay', async () => {
    const reader = new ReplayReader('./examples/replays/1.replay');
    const replay = await reader.parse();
    assert.notStrictEqual(typeof replay.meta, 'undefined', 'The replay meta should be defined');
  });

  it('Should parse a replay with resolveAccountNames enabled', async () => {
    const reader = new ReplayReader('./examples/replays/1.replay', { resolveAccountNames: true });
    const replay = await reader.parse();
    assert.notStrictEqual(typeof replay.meta, 'undefined', 'The replay meta should be defined');
  });
});
