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
  it('should present its number value in string', () => {
    const value = faker.datatype.number();
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        value,
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} ${value} :: ${typeClass} number`);
  });

  it('should present its string value in string', () => {
    const value = faker.lorem.sentence();
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        value,
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} "${value}" :: ${typeClass} string`);
  });

  it('should present its boolean value in string', () => {
    const value = faker.datatype.boolean();
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        value,
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} ${value} :: ${typeClass} boolean`);
  });

  it('should present its undefined value in string', () => {
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        undefined,
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} undefined :: ${typeClass} undefined`);
  });

  it('should present its null value in string', () => {
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        null,
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} null :: ${typeClass} object`);
  });

  it('should present its object value in string', () => {
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        { name: 'foo' },
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} {"name":"foo"} :: ${typeClass} object`);
  });

  it('should present its array value in string', () => {
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        [1, 2, 4],
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} [1,2,4] :: ${typeClass} object`);
  });

  it('should present its function value in string', () => {
    const valueConstructor = faker.lorem.word();
    const typeClass = faker.lorem.word();

    expect(
      new Container(
        () => null,
        valueConstructor,
        typeClass,
      ).toString(),
    ).toEqual(`${valueConstructor} () => null :: ${typeClass} function`);
  });
});
