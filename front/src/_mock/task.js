import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const tasks = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  status: sample(['done', 'not done']),
  name: sample([
    'this is my content',
    'this is second content',
  ]),
}));
