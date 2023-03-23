/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// Import custom schema
import blog from './documents/blog';
import author from './documents/author';

// Import custom objects
import customImage from './objects/customImage';
import bodyText from './objects/bodyText';
import customCode from './objects/customCode';
import excerpText from './objects/excerpText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    author,
    customImage,
    bodyText,
    customCode,
    excerpText,
  ]),
});
