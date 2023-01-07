import { faker } from '@faker-js/faker';
import { AlgebraicData } from '../data';
import show from './show';

it('should call the `show` method of given data instance', () => {
  const dataString = faker.lorem.sentence();
  const data = {
    show: jest.fn(() => dataString),
  } as unknown as AlgebraicData<string>;

  expect(show(data)).toEqual(dataString);
});
