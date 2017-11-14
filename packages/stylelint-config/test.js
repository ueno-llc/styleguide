'use strict';

const { expect } = require('chai');
const config = require('.');

describe('Config', () => {
  it('is an object', () => {
    expect(config).to.be.an('object');
  });
});
