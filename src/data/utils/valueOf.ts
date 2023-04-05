import Container from '../Container';

export default function valueOf(value: unknown) {
  switch (typeof value) {
    case 'string':
      return `"${value}"`;
    case 'object':
      return value instanceof Container
        ? value.toString()
        : JSON.stringify(value);
    default:
      return `${value}`;
  }
}
