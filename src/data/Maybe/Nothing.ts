/* eslint-disable @typescript-eslint/no-unused-vars */

import { Maybe } from './Maybe';

export default class Nothing<a> implements Maybe<a> {
  private static instance: Nothing<unknown>; // eslint-disable-line no-use-before-define

  static of<b>(value?: b) {
    Nothing.instance = Nothing.instance ?? new Nothing();
    return Nothing.instance;
  }

  ap<i, o>(functor: Maybe<i>): Maybe<o> {
    return this as unknown as Nothing<o>;
  }

  bind<i, o>(fn: (input: i) => Maybe<o>): Maybe<o> {
    return this as unknown as Nothing<o>;
  }

  join<o>() {
    return this as unknown as Nothing<o>;
  }

  map<b>(fn: (value: a) => b) {
    return this as unknown as Nothing<b>;
  }

  // eslint-disable-next-line class-methods-use-this
  toString() {
    return 'Nothing :: Maybe a';
  }
}
