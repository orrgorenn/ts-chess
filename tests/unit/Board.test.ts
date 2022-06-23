import { expect } from 'chai';
import Piece from '../../src/PGN/AN/Piece';
import Board from '../../src/Board';

describe('new Board', () => {
  it('is instantiated', () => {
    const board = new Board();
    expect(32).to.eql(board.size);
  });
});

describe('board.getPieceBySq()', () => {
  it('a1 is a rook', () => {
    const piece = new Board().getPieceBySq('a1');
    expect(piece.getId()).to.eql(Piece.R);
  });
  it('h8 is a rook', () => {
    const piece = new Board().getPieceBySq('h8');
    expect(piece.getId()).to.eql(Piece.R);
  });
});
