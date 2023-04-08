import { valueOf } from './utils';
import valueSymbol from './utils/valueSymbol';

export const TYPE_PLACEHOLDER = '%t';

const parsePrint = (str: string) => str.split(' :: ');

const printOf = ({
  constructor,
  typeClass,
} : {
  constructor: string;
  typeClass: string;
}) => <T>(
  data: T,
) => {
  if (data instanceof Container) {
    const [value, type] = parsePrint(data.toString());
    return `${constructor} (${value}) :: ${typeClass.replace(TYPE_PLACEHOLDER, type)}`;
  }

  return `${constructor} ${valueOf(data)} :: ${typeClass.replace(TYPE_PLACEHOLDER, typeof data)}`;
};

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
    return printOf({
      constructor: this.#valueConstructor,
      typeClass: this.#typeClass,
    })(this[valueSymbol]);
  }
}
