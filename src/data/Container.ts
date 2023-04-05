import { printOf } from './utils';
import valueSymbol from './utils/valueSymbol';

export default class Container<a> {
  #valueConstructor: string;

  #typeClass: string;

  protected [valueSymbol]: a;

  constructor(value: a, valueConstructor: string, typeClass: string) {
    this[valueSymbol] = value;
    this.#valueConstructor = valueConstructor;
    this.#typeClass = typeClass;
  }

  toString(): string {
    return printOf(this.#typeClass)(this.#valueConstructor)(this[valueSymbol]);
  }
}
