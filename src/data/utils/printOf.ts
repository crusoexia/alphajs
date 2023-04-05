import valueOf from './valueOf';

const printOf = (
  typeClass: string,
) => (
  valueConstructor: string,
) => <T>(
  value: T,
) => `${valueConstructor} ${valueOf(value)} :: ${typeClass} ${typeof value}`;

export default printOf;
