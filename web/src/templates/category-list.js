import { graphql } from 'gatsby';
import React from 'react';
import PageSpace from '../components/PageSpace';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';

export const query = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function CategoryList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      <SEO title="categories" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All categories"
            description="This month will bring about the 88th Academy Awards.
          Starting in 1928, this prestigious award ceremony ..."
          />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/categories"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default CategoryList;
