/* eslint @typescript-eslint/no-unused-vars: off */

import Container, { TYPE_PLACEHOLDER } from '../Container';
import { valueSymbol } from '../utils';
import type { Either } from './Either';

export default class Left<a, b> extends Container<a> implements Either<a, b> {
  static of<c, d>(value: c) {
    return new Left<c, d>(value);
  }

  constructor(value: a) {
    super(value, 'Left', `Either<${TYPE_PLACEHOLDER}, b>`);
  }

  // eslint-disable-next-line
  // @ts-ignore
  map<c>(_: (input: b) => c) {
    return Left.of<a, c>(this[valueSymbol]);
  }

  bind<o>(_: (input: b) => Either<a, o>): Either<a, o> {
    return this as unknown as Either<a, o>;
  }

  join(): Left<a, b> {
    return this;
  }
}
