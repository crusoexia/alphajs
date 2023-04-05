import { Maybe } from './Maybe';
import valueSymbol from '../utils/valueSymbol';
import Container from '../Container';

export default class Just<a> extends Container<a> implements Maybe<a> {
  static of<b>(value: b) {
    return new Just<b>(value);
  }

  constructor(value: a) {
    super(value, 'Just', 'Maybe');
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

  show() {
    return this.toString();
  }
}
