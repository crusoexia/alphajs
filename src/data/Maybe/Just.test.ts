import Just from './Just';
import Nothing from './Nothing';
import valueSymbol from '../valueSymbol';

describe('of', () => {
  it('should wrap the given value into a "Just" instance', () => {
    expect(Just.of('foo')).toBeInstanceOf(Just);
  });
});

describe('toString', () => {
  it('should return it\'s type and value in string', () => {
    expect(Just.of('foo').toString()).toEqual('Just "foo" :: Maybe string');
    expect(Just.of(-1).toString()).toEqual('Just -1 :: Maybe number');
    expect(Just.of(true).toString()).toEqual('Just true :: Maybe boolean');

    expect(Just.of(() => null).toString()).toEqual('Just () => null :: Maybe function');
    expect(Just.of({ name: 'foo' }).toString()).toEqual('Just {"name":"foo"} :: Maybe object');
    expect(Just.of([1, 2, 3]).toString()).toEqual('Just [1,2,3] :: Maybe object');

    expect(Just.of(undefined).toString()).toEqual('Just undefined :: Maybe undefined');
    expect(Just.of(null).toString()).toEqual('Just null :: Maybe object');
  });
});

describe('Functor::map', () => {
  it('should map the wrapped value to the function and return a new "Just" wrap the result', () => {
    expect(Just.of(3).map((x) => 2 * x)[valueSymbol]).toEqual(6);
    expect(Just.of('foo').map((x) => `${x}bar`)[valueSymbol]).toEqual('foobar');
    expect(Just.of({ name: 'John' }).map((x) => x.name)[valueSymbol]).toEqual('John');
  });
});

describe('Applicative::ap', () => {
  it('should apply the value of given Just to the wrapped function and return the Just result', () => {
    expect(Just.of((x: number) => (x + 1)).ap(Just.of(9)).toString()).toEqual('Just 10 :: Maybe number');
    expect(Just.of((x: string) => (`${x}bar`)).ap(Just.of('foo')).toString()).toEqual('Just "foobar" :: Maybe string');
  });

  it('should requires appliy twice for binary function', () => {
    // TODO
    // Should we by default curry the wrapped function? Or let the user decide about this?
    expect(Just.of((a: number) => (b: number) => a + b).ap(Just.of(8)).ap(Just.of(7)).toString()).toEqual('Just 15 :: Maybe number');
  });

  it('should return Nothing when applied to Nothing', () => {
    expect(Just.of((x: number) => (x * 2)).ap(Nothing.of()).toString()).toEqual('Nothing :: Maybe a');
  });
});

describe('Monad::bind', () => {
  it('should bind its value to the fn', () => {
    const fn = (x: number) => Just.of(x / 10);

    const actual = Just.of(100).bind(fn);

    expect(actual.toString()).toEqual('Just 10 :: Maybe number');
  });

  it('should return Nothing when the fn return Nothing', () => {
    const fn = (x: number) => Nothing.of(x / 10);

    const actual = Just.of(100).bind(fn);

    expect(actual.toString()).toEqual('Nothing :: Maybe a');
  });
});

describe('Monad::join', () => {
  it('should return the internal Functor', () => {
    expect(Just.of(Just.of('x')).join().toString()).toEqual('Just "x" :: Maybe string');
  });
});
