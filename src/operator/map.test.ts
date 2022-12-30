import map from './map';
import { Functor } from '../typeclass';
import {
  Just,
  Nothing,
} from '../data';

describe('basic function', () => {
  it('should call the functor\'s map method with the first function argument', () => {
    const mapResult = Math.random();
    const functor = {
      map: jest.fn(() => mapResult) as unknown as Functor<number>['map'],
    };
    const fn = () => null;

    const result = map(fn)(functor);

    expect(result).toEqual(mapResult);
    expect(functor.map).toHaveBeenCalledWith(fn);
  });
});

describe('map on Maybe', () => {
  test('Just examples', () => {
    expect(map((x: number) => x * 2)(Just.of(3)).toString()).toEqual('Just 6 :: Maybe number');
    expect(map((x: number) => `${x - 1}`)(Just.of(10)).toString()).toEqual('Just "9" :: Maybe string');
  });

  test('Nothing examples', () => {
    expect(map(() => {
      throw new Error('this should not happen');
    })(Nothing.of()).toString()).toEqual('Nothing :: Maybe a');
  });
});
