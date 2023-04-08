import { faker } from '@faker-js/faker';
import Left from './Left';

describe('of', () => {
  it('should create a Left with given value', () => {
    expect(Left.of(faker.datatype.string())).toBeInstanceOf(Left);
  });
});

describe('Functor::map', () => {
  it('should ignore the function and return itself', () => {
    const value = faker.datatype.number();
    expect(Left.of<number, number>(value).map((x) => x * 2).toString()).toEqual(`Left ${value} :: Either<number, b>`);
  });
});
