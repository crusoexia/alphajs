/* eslint @typescript-eslint/no-unused-vars: off */

import Container, { TYPE_PLACEHOLDER } from '../Container';
import { valueSymbol } from '../utils';
import type { Either } from './Either';

// eslint-disable-next-line
// @ts-ignore
export default class Right<a, b> extends Container<b> implements Either<a, b> {
  static of<c, d>(value: d) {
    return new Right(value);
  }

  constructor(value: b) {
    super(value, 'Right', `Either<a, ${TYPE_PLACEHOLDER}>`);
  }

  // eslint-disable-next-line
  // @ts-ignore
  // TODO: remove after implement Either
  map<c>(fn: (input: b) => c) {
    return Right.of(fn(this[valueSymbol]));
  }
}
