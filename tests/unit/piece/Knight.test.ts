import { expect } from 'chai';
import Knight from '../../../src/piece/Knight';

describe('Knight.getMobility()', () => {
  it ('d4', () => {
    let knight = new Knight('w', 'd4');
    let mobility = [
      'c6',
      'b5',
      'b3',
      'c2',
      'e2',
      'f3',
      'f5',
      'e6'
    ];
    expect(knight.getMobility()).to.eql(mobility);
  });
  it ('h1', () => {
    let knight = new Knight('w', 'h1');
    let mobility = [
      'g3',
      'f2'
    ];
    expect(knight.getMobility()).to.eql(mobility);
  });
  it ('b1', () => {
    let knight = new Knight('w', 'b1');
    let mobility = [
      'a3',
      'd2',
      'c3'
    ];
    expect(knight.getMobility()).to.eql(mobility);
  });
});
