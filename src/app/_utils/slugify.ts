import { ITopic } from '../_core/types';

export const slugify = (topic: ITopic) =>
  topic.name
    .toLowerCase()
    .split(' ')
    .join('-');
