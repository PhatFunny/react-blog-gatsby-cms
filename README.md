# React Blog Gastby

A complete blog website created with `JAMstack`. ([Gatsby.js](https://www.gatsbyjs.org/) & [Sanity.io](https://sanity.io)).

Made and implement with ❤️ by [Phat Nguyen]

## Project Details

React Blog Gatsby is a complete tech blog website. Here we will see three post types: `blogs`, `categories`, and `authors`. We will create relations between these three post types. So that we can create a blog post with a category and an author. Also we will make a `search feature` where we can search against all these three post types.

To create this website we will use `JAMstack`. We will use `Gatsby.js` for the frontend and `Sanity.io` for the headless CMS. And to source our content we will use `graphql`.

## Technologies to use:

- [React.js](https://reactjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)
  - [Gatsby-plugin-image](https://www.gatsbyjs.org/packages/gatsby-plugin-image/)
    - Static Image & Gatsby Image
  - Gatsby Page
    - Normal Pages
    - how to create pages programmatically
  - Gatsby Pagination
  - [Gatsby-plugin-local-search](https://www.gatsbyjs.org/packages/gatsby-plugin-local-search/)
  - [GraphQL](https://graphql.org/)
    - Static Query & Page Query
- [Sanity.io](https://sanity.io/)
  - Sanity Schema
  - Custom Blocks
    - Custom Rich-text Block to Write Blog
    - Custom Code Block
  - Studio Customization
- [React-PortableText](https://github.com/portabletext/react-portabletext)
- [Axios](https://www.npmjs.com/package/axios)
- Many More...

## Starter files

You can find all the starter files in starter-files branch. You can to go to the starter-files branch and download zip the the starter files or You can clone the project and git checkout to starter-files branch.

## Tools Used

- Images: Unsplash
- Code Editor: VS Code

sanity terminal

- npm install -g @sanity/cli
- cd studio
- sanity init --reconfigure

sanity dataset (import data)

- sanity dataset import ./data/sample-data.tar.gz production --replace

deploy sanity studio

- sanity deploy

Run and start GraphQL in web

- npm run dev

Add new plugins in gatsby-config file:

- 'gatsby-plugin-image',
- 'gatsby-plugin-sharp',
- 'gatsby-transform-sharp',

Sanity graphql deploy

- sanity graphql deploy

Fix sanity graphql deploy error

- sanity upgrade
