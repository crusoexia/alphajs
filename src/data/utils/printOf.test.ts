import { faker } from '@faker-js/faker';
import printOf from './printOf';

it('should print value with type informations', () => {
  const value = faker.datatype.number();

  expect(printOf('Type')('Constructor')(value)).toEqual(`Constructor ${value} :: Type number`);
});
