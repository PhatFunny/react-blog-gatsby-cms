import { graphql } from 'gatsby';
import React from 'react';

export const query = graphql`
  query categoriesQuery ($limit: Int!, $offset: Int!){
    allSanityCategory {
      sort: { fields: _createAt: order: DESC }
      limit: $limit
      skip: $offset
    }{
      nodes {
        
      }
    }
  }
`;

function CategoryList() {
  return <div>CategoryList</div>;
}

export default CategoryList;
