/* eslint @typescript-eslint/no-unused-vars: off */

import Container from '../Container';
import { valueSymbol } from '../utils';
import type { Either } from './Either';

// eslint-disable-next-line
// @ts-ignore
export default class Right<a, b> extends Container<b> implements Either<a, b> {
  static of<c, d>(value: d) {
    return new Right(value);
  }

  constructor(value: b) {
    super(value, 'Right', 'Either');
  }

  map<c>(fn: (input: b) => c): Either<a, c> {
    // eslint-disable-next-line
    // @ts-ignore
    return Right.of(fn(this[valueSymbol]));
  }
}
