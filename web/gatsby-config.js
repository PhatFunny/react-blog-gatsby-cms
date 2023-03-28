const sanityConfig = require('./sanity-config');

require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `Phat Blog`,
    description: `Phat Blog is a platform for latest technology news and updates.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig
      }
    }
  ],
};
