/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// Import custom schema
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';

// Import custom objects
import customImage from './objects/customImage';
import richText from './objects/richText';
import customCode from './objects/customCode';
import normalText from './objects/normalText';
import featured from './documents/featured';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    blog,
    author,
    category,
    featured,

    // objects
    customImage,
    richText,
    customCode,
    normalText,
  ]),
});
