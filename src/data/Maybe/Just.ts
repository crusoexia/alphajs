import { Maybe } from './Maybe';
import valueSymbol from '../valueSymbol';
import valueOf from '../valueOf';

export default class Just<a> implements Maybe<a> {
  static of<b>(value: b) {
    return new Just<b>(value);
  }

  private [valueSymbol]: a;

  constructor(value: a) {
    this[valueSymbol] = value;
  }

  map<b>(fn: (value: a) => b) {
    return new Just(fn(this[valueSymbol]));
  }

  toString() {
    return `Just ${valueOf(this[valueSymbol])} :: Maybe ${typeof this[valueSymbol]}`;
  }
}
