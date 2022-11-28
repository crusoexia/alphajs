export default function valueOf(value: unknown) {
  switch (typeof value) {
    case 'string':
      return `"${value}"`;
    case 'object':
      return JSON.stringify(value);
    default:
      return `${value}`;
  }
}
