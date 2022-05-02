import Castle from '../PGN/AN/Castle';
import Color from '../PGN/AN/Color';
import Piece from '../PGN/AN/Piece';

class King {
  public static readonly CASTLING_RULE: object = {
    [Color.W]: {
      [Piece.K]: {
        [Castle.SHORT]: {
          'sqs': [ 'f1', 'g1' ],
          'sq': {
            'current': 'e1',
            'next': 'g1'
          }
        }
      }
    }
  }
}

export default King;