import { faker } from '@faker-js/faker';
import Right from './Right';

describe('of', () => {
  it('should create a "Right" instance with given value inside', () => {
    expect(Right.of(9)).toBeInstanceOf(Right);
  });
});

describe('toString', () => {
  it('should present its value in string', () => {
    expect(Right.of(12).toString()).toEqual('Right 12 :: Either<a, number>');
    expect(Right.of('12').toString()).toEqual('Right "12" :: Either<a, string>');
  });
});

describe('Functor::map', () => {
  it('should map the inner value to the function', () => {
    const value = faker.datatype.number();
    expect(Right.of<string, number>(value).map((x) => 2 * x).toString()).toEqual(`Right ${value * 2} :: Either<a, number>`);

    expect(Right.of<string, string>('foo').map((x) => `:${x}:`).toString()).toEqual('Right ":foo:" :: Either<a, string>');
  });
});
