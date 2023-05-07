import { faker } from '@faker-js/faker';
import Left from './Left';
import Right from './Right';

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

describe('Monad::bind', () => {
  describe('bind', () => {
    it('should return itself without change', () => {
      const fn = (x: unknown) => Right.of(x);
      const value = faker.datatype.number();

      const actual = Left.of(value).bind(fn);

      expect(actual.toString()).toEqual(`Left ${value} :: Either<number, b>`);
    });
  });

  describe('join', () => {
    it('should return itself without change', () => {
      expect(Left.of('foo').join().toString()).toEqual('Left "foo" :: Either<string, b>');
      expect(Left.of(Left.of('foo')).join().toString()).toEqual('Left (Left "foo") :: Either<Either<string, b>, b>');
    });
  });
});
