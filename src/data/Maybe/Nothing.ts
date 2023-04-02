/* eslint-disable @typescript-eslint/no-unused-vars */

import { Maybe } from './Maybe';
import Data from '../Data';

export default class Nothing<a> extends Data implements Maybe<a> {
  private static instance: Nothing<unknown>; // eslint-disable-line no-use-before-define

  static of<b>(_?: b) {
    Nothing.instance = Nothing.instance ?? new Nothing();
    return Nothing.instance;
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

  // eslint-disable-next-line class-methods-use-this
  show() {
    return 'Nothing :: Maybe a';
  }

  valueOf() {
    return this.show();
  }
}
