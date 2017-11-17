/* eslint-env mocha */

'use strict';

const expect = require('chai').expect; // eslint-disable-line
const config = require('.');

describe('Config', () => {
  it('is an object', () => {
    expect(config).to.be.an('object');
  });
});
