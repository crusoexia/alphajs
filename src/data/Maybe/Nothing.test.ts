import Nothing from './Nothing';

describe('of', () => {
  it('should create a "Nothing"', () => {
    expect(Nothing.of('a')).toBeInstanceOf(Nothing);
  });

  it('should work when be called without the "Nothing" context', () => {
    const { of } = Nothing;
    expect(of()).toBeInstanceOf(Nothing);
  });
});

describe('map', () => {
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

describe('toString', () => {
  it('should describe it\'s algebra type', () => {
    expect(Nothing.of().toString()).toEqual('Nothing :: Maybe a');
  });
});
