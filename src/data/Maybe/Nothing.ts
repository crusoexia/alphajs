/* eslint-disable @typescript-eslint/no-unused-vars */

import { Maybe } from './Maybe';
import Container from '../Container';

export default class Nothing<a> extends Container<a> implements Maybe<a> {
  private static instance: Nothing<unknown>; // eslint-disable-line no-use-before-define

  static of<b>(value?: b) {
    Nothing.instance = Nothing.instance ?? new Nothing(value);
    return Nothing.instance;
  }

  constructor(value: a) {
    super(value, 'Nothing', 'Maybe');
  }

  ap<i, o>(_: Maybe<i>): Maybe<o> {
    return this as unknown as Nothing<o>;
  }

  bind<i, o>(_: (input: i) => Maybe<o>): Maybe<o> {
    return this as unknown as Nothing<o>;
  }

  join<o>() {
    return this as unknown as Nothing<o>;
  }

  map<b>(_: (value: a) => b) {
    return this as unknown as Nothing<b>;
  }

  show() {
    return this.toString();
  }

  // eslint-disable-next-line class-methods-use-this
  toString() {
    return 'Nothing :: Maybe a';
  }
}
