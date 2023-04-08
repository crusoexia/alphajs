import valueOf from './valueOf';
import { Just } from '../Maybe';

it('should return the string present value for the primitive types', () => {
  expect(valueOf(1)).toEqual('1');
  expect(valueOf('2')).toEqual('"2"');
  expect(valueOf(true)).toEqual('true');
  expect(valueOf(undefined)).toEqual('undefined');
  expect(valueOf(null)).toEqual('null');
});

it('should return the stringified object structure for objects', () => {
  expect(valueOf({ foo: 'bar' })).toEqual('{"foo":"bar"}');
});

it('should return the "toString" result if the object is an instance of "Data"', () => {
  expect(valueOf(Just.of(3))).toEqual('Just 3 :: Maybe<number>');
});
