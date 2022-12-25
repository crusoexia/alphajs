import { Maybe } from './Maybe';
import valueSymbol from '../valueSymbol';
import valueOf from '../valueOf';
import Data from '../Data';

export default class Just<a> extends Data implements Maybe<a> {
  static of<b>(value: b) {
    return new Just<b>(value);
  }

  private [valueSymbol]: a;

  constructor(value: a) {
    super();
    this[valueSymbol] = value;
  }

  ap<i, o>(functor: Maybe<i>): Maybe<o> {
    return functor.map(this[valueSymbol] as (x: i) => o) as Maybe<o>;
  }

  bind<i, o>(fn: (input: i) => Maybe<o>): Maybe<o> {
    return this.map(fn as unknown as (value: a) => o).join();
  }

  join<o>() {
    return this[valueSymbol] as unknown as Maybe<o>;
  }

  map<b>(fn: (value: a) => b) {
    return new Just(fn(this[valueSymbol]));
  }

  valueOf() {
    return `Just ${valueOf(this[valueSymbol])} :: Maybe ${typeof this[valueSymbol]}`;
  }
}
