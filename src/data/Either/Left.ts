/* eslint @typescript-eslint/no-unused-vars: off */

import Container from '../Container';
import { valueSymbol } from '../utils';
import type { Either } from './Either';

// eslint-disable-next-line
// @ts-ignore
export default class Left<a, b> extends Container<a> implements Either<a, b> {
  static of<c, d>(value: c) {
    return new Left<c, d>(value);
  }

  constructor(value: a) {
    super(value, 'Left', 'Either');
  }

  map<c>(_: (input: b) => c): Either<a, c> {
    // eslint-disable-next-line
    // @ts-ignore
    return Left.of<a, c>(this[valueSymbol]);
  }
}
