import Data from '../Data';

export default function valueOf(value: unknown) {
  switch (typeof value) {
    case 'string':
      return `"${value}"`;
    case 'object':
      return value instanceof Data
        ? value.toString()
        : JSON.stringify(value);
    default:
      return `${value}`;
  }
}
