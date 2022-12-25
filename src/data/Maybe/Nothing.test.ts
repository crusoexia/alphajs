import Nothing from './Nothing';
import Just from './Just';

describe('of', () => {
  it('should create a "Nothing"', () => {
    expect(Nothing.of('a')).toBeInstanceOf(Nothing);
  });

  it('should work when be called without the "Nothing" context', () => {
    const { of } = Nothing;
    expect(of()).toBeInstanceOf(Nothing);
  });
});

describe('toString', () => {
  it('should describe it\'s algebra type', () => {
    expect(Nothing.of().toString()).toEqual('Nothing :: Maybe a');
  });
});

describe('Functor::map', () => {
  it('should ignore the mapping functor and return itself', () => {
    const nothing = Nothing.of();
    const fn = jest.fn();

    const actual = nothing.map(fn);

    expect(actual).toEqual(nothing);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should be a singleton', () => {
    const nothing1 = Nothing.of(1);
    const nothing2 = Nothing.of('1');

    expect(nothing1).toBe(nothing2);
  });
});

describe('Applicative::ap', () => {
  it('should do nothing but return "Nothing"', () => {
    const v = jest.fn();

    expect(Nothing.of(v).ap(Just.of('foo'))).toBeInstanceOf(Nothing);
  });
});

describe('Monad::bind', () => {
  it('should bind anything to Nothing', () => {
    const fn = (x: number) => Just.of(x / 10);

    const actual = Nothing.of(100).bind(fn);

    expect(actual.toString()).toEqual('Nothing :: Maybe a');
  });
});

describe('Monad::join', () => {
  it('should return itself', () => {
    expect(Nothing.of().join().toString()).toEqual('Nothing :: Maybe a');
  });
});
