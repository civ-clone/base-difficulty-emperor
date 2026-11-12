import Difficulty from '@civ-clone/core-difficulty/Difficulty';
import Emperor from '../Emperor';
import { expect } from 'chai';

describe('Emperor', (): void => {
  it('is a difficulty at level 4', (): void => {
    expect(Object.prototype.isPrototypeOf.call(Difficulty, Emperor)).true;
    expect(Emperor.level()).equal(4);
    expect(Emperor.name).equal('Emperor');
  });
});
