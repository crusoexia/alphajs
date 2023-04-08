import { faker } from '@faker-js/faker';
import Container from './Container';

describe('construction', () => {
  it('should create an instance', () => {
    expect(new Container(
      faker.datatype.number(),
      faker.lorem.word(),
      faker.lorem.word(),
    )).toBeInstanceOf(Container);
  });
});

describe('toString', () => {
  it('should replace the type placeholder with value\'s type', () => {
    expect(
      new Container(110, 'C', 'TypeClass<a, b, %t>').toString(),
    ).toEqual('C 110 :: TypeClass<a, b, number>');
  });

  it('should present its number value in string', () => {
    const value = faker.datatype.number();

    expect(
      new Container(value, 'C', 'TC<%t>').toString(),
    ).toEqual(`C ${value} :: TC<number>`);
  });

  it('should present its string value in string', () => {
    const value = faker.lorem.sentence();

    expect(
      new Container(value, 'C', 'TC<%t>').toString(),
    ).toEqual(`C "${value}" :: TC<string>`);
  });

  it('should present its boolean value in string', () => {
    const value = faker.datatype.boolean();

    expect(
      new Container(value, 'C', 'TC<%t>').toString(),
    ).toEqual(`C ${value} :: TC<boolean>`);
  });

  it('should present its undefined value in string', () => {
    expect(
      new Container(undefined, 'C', 'TC<%t>').toString(),
    ).toEqual('C undefined :: TC<undefined>');
  });

  it('should present its null value in string', () => {
    expect(
      new Container(null, 'C', 'TC<%t>').toString(),
    ).toEqual('C null :: TC<object>');
  });

  it('should present its object value in string', () => {
    expect(
      new Container({ name: 'foo' }, 'C', 'TC<%t>').toString(),
    ).toEqual('C {"name":"foo"} :: TC<object>');
  });

  it('should present its array value in string', () => {
    expect(
      new Container([1, 2, 4], 'C', 'TC<%t>').toString(),
    ).toEqual('C [1,2,4] :: TC<object>');
  });

  it('should present its function value in string', () => {
    expect(
      new Container(() => null, 'C', 'TC<%t>').toString(),
    ).toEqual('C () => null :: TC<function>');
  });

  it('should print the nested containers', () => {
    const nestest = new Container(3, 'Nestest', 'TC<%t>');
    const nested = new Container(nestest, 'Nested', 'TC<%t>');
    const c = new Container(nested, 'C', 'TC<%t>');

    expect(c.toString()).toEqual('C (Nested (Nestest 3)) :: TC<TC<TC<number>>>');
  });
});
