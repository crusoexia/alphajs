import Just from './Just';
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

describe('map', () => {
  it('should map the wrapped value to the function and return a new "Just" wrap the result', () => {
    expect(Just.of(3).map((x) => 2 * x)[valueSymbol]).toEqual(6);
    expect(Just.of('foo').map((x) => `${x}bar`)[valueSymbol]).toEqual('foobar');
    expect(Just.of({ name: 'John' }).map((x) => x.name)[valueSymbol]).toEqual('John');
  });
});
